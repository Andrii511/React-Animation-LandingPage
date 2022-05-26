import React from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "react-modal";
import "../../styles/ConnectWalletModal.scss";
import ConnectButton from "./ConnectButton";

export default function ConnectWalletModal({
  connection,
  action,
  chapterID,
  comicID,
}) {
  const [modalIsOpen, setIsOpen] = React.useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  Modal.setAppElement(document.getElementById("root"));
  return (
    <div className="modal-wrapper">
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Connect Wallet Modal"
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
      >
        <div className="px-5 py-10">
          <div className="mb-10">
            <h1 className="text-5xl mb-5">Get Access to Full Comic</h1>
            <p>
              To read this comic you need to connect your wallet and verify you
              have the correct NFTs. If you do not have one of our NFTs please
              head to Magic Eden to purchase one. Or
              {action === "preview" ? (
                <span className="link-text cursor-pointer" onClick={closeModal}>
                  {" "}
                  View Preview
                </span>
              ) : (
                <Link
                  to={{
                    pathname: "/comic",
                    search: `?action=preview&comic=${comicID}&chapter=${chapterID}`,
                  }}
                >
                  <span
                    className="link-text cursor-pointer"
                    onClick={closeModal}
                  >
                    {" "}
                    View Preview
                  </span>
                </Link>
              )}
            </p>
          </div>
          <ConnectButton connection={connection} />
        </div>
      </Modal>
    </div>
  );
}
