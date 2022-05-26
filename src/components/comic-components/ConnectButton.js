import React, { useEffect, useMemo } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  WalletDialogButton,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-material-ui";
import { StoreContext } from "../../contexts/ComicsVerification/context";
import { setIsVerified } from "../../contexts/ComicsVerification/types";
import "../../styles/Button.scss";
import api from "../../api/api";

const ConnectButton = ({ connection }) => {
  const { dispatch } = React.useContext(StoreContext);
  const wallet = useWallet();

  const anchorWallet = useMemo(() => {
    if (
      !wallet ||
      !wallet.publicKey ||
      !wallet.signAllTransactions ||
      !wallet.signTransaction
    ) {
      return;
    }
    return {
      publicKey: wallet.publicKey,
      signAllTransactions: wallet.signAllTransactions,
      signTransaction: wallet.signTransaction,
    };
  }, [wallet]);

  useEffect(() => {
    if (!wallet.connected) {
      dispatch(
        setIsVerified({
          isVerified: false,
        })
      );
    }
  }, [dispatch, wallet.connected]);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const verified = await api
          .get({
            endpoint: `/user/auth/${anchorWallet?.publicKey?.toBase58()}`,
          })
          .then((response) => response.data);
        dispatch(
          setIsVerified({
            isVerified: verified,
          })
        );
      } catch (e) {
        console.log(e);
      }
    };
    if (connection && wallet.connected && anchorWallet?.publicKey) verifyUser();
  }, [anchorWallet?.publicKey]);

  return (
    <div className="connect-wallet-wrapper">
      {!wallet.connected && (
        <WalletDialogButton className="connect-wallet">
          Connect
        </WalletDialogButton>
      )}
      {wallet.connected && (
        <WalletDisconnectButton className="disconnect-wallet">
          Disconnect
        </WalletDisconnectButton>
      )}
    </div>
  );
};

export default ConnectButton;
