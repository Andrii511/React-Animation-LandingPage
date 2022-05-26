import React, { useMemo } from "react";
import ReactPixel from "react-facebook-pixel";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faTimes,
  faUser,
  faShoppingBag,
  faBars,
  faLink,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletExtensionWallet,
  getSolletWallet,
} from "@solana/wallet-adapter-wallets";
import ReactGA from "react-ga4";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";

import { clusterApiUrl } from "@solana/web3.js";
import {
  StoreContext,
  initialState,
} from "../contexts/ComicsVerification/context";

import { reducer } from "../contexts/ComicsVerification/reducer";
import Page from "./Page";

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faTimes,
  faUser,
  faShoppingBag,
  faBars,
  faLink,
  faArrowLeft
);

const network = process.env.REACT_APP_SOLANA_NETWORK;

function App() {
  const endpoint = useMemo(() => clusterApiUrl(network), []);
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSlopeWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    []
  );

  // , { gtagOptions: { debug_mode: true } }
  React.useEffect(() => {
    ReactGA.initialize("G-CE9PE73ZFC");
  }, []);

  const advancedMatching = { em: "some@email.com" }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
  const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: false, // enable logs
  };
  ReactPixel.init("4736101819790787", advancedMatching, options);

  ReactPixel.pageView(); // For tracking page view
  // ReactPixel.track(event, data); // For tracking default events. More info about standard events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#standard-events
  // ReactPixel.trackSingle('PixelId', event, data); // For tracking default events.
  // ReactPixel.trackCustom(event, data); // For tracking custom events. More info about custom events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#custom-events
  // ReactPixel.trackSingleCustom('PixelId', event, data);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletDialogProvider>
          <StoreContext.Provider value={{ state, dispatch }}>
            <Page />
          </StoreContext.Provider>
        </WalletDialogProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
