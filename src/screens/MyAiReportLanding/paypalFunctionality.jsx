import React, { useState, useEffect, useRef } from "react";
import "./modal.css";
import { Button } from "@mui/material";

const PaypalButton = ({price}) => {
  const paypalContainerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  let amount = 0;
  if(price === 20){
    amount = "20.00";
  }else if(price === 30){
    amount = "30.00";
  }else if(price === 10){
    amount = "10.00";
  }else {
    return null;
  }


  useEffect(() => {
    // Dynamically load the PayPal script once
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=AX0vNV67manTkTJOnbNU042IrEFT_Zu2OY1D_z2eBn5aiRG7opZLhhjb3TCwljMtYw5HWXKFEmqFRy1L&currency=USD";
    script.async = true;
    script.onload = () => {
      console.log("PayPal script loaded");
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup PayPal script
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (isModalOpen && window.paypal) {
      // Clear existing buttons if already rendered
      paypalContainerRef.current.innerHTML = "";

      // Render PayPal buttons
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            console.log("Order is being created");
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount, // Payment amount
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert(`Transaction completed by ${details.payer.name.given_name}`);
            });
          },
          onError: (err) => {
            console.error("PayPal Checkout Error:", err);
          },
        })
        .render(paypalContainerRef.current); // Render buttons to the container
    }
  }, [isModalOpen]); // Re-run when the modal opens


  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        sx={{
          display: "flex",
          padding: "var(--spacing-lg, 12px) 102px",
          justifyContent: "center",
          alignItems: "center",
          gap: "var(--spacing-sm, 6px)",
          alignSelf: "stretch",
          borderRadius: "var(--radius-md, 8px)",
          border: "2px solid rgba(255, 255, 255, 0.12)",
          backgroundColor: "#168118", // Ensure consistent primary color
          boxShadow:
            "0px 0px 0px 1px rgba(16, 24, 40, 0.18) inset, 0px -2px 0px 0px rgba(16, 24, 40, 0.05) inset, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
          color: "#FFF",
          fontFamily: '"Fold Grotesque Pro"',
          fontSize: "var(--Font-size-text-md, 16px)",
          fontStyle: "normal",
          fontWeight: 850,
          lineHeight: "var(--Line-height-text-md, 24px)", // 150%
          textTransform: "none", // Prevent uppercase text transformation
          "&:hover": {
            backgroundColor: "#136A15", // Darken the background on hover
          },
        }}
        onClick={() => setIsModalOpen(true)}
      >
        Get Started
      </Button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>GET AI REPORT(S)</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p>Enter your email address where the report will be delivered:*</p>
          <input type="text" placeholder="Email address" />
          <p>How many reports do you want?* ("Example: 2 or 5")</p>
          <input type="number" placeholder="Number of reports" />
          <p>
            Enter the valid ticker symbols matching reports you want, separated
            by a space:*
          </p>
          <input type="text" placeholder="e.g., AAPL TSLA MSFT" />
          <div
            id="paypal-button-container"
            ref={paypalContainerRef}
            style={{ marginTop: "20px" }}
          ></div>
        </div>
      </Modal>
    </div>
  );
};

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default PaypalButton;