import React, { useState, useEffect, useRef } from "react";
import "./modal.css";
import { Button } from "@mui/material";
import { handleSendMail } from "../../utils/sendMail";

const PaypalButton = () => {
  const paypalContainerRef = useRef(null);
  const [amt, setAmt] = useState('1.00');
  const [noOfReports, setNoOfReports] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [tickerSymbols, setTickerSymbols] = useState("");
  function isValidTickerSymbol(symbol) {
    // Check if the symbol is a non-empty string and matches the pattern of 1-5 uppercase letters
    const regex = /^[A-Z]{1,5}$/;
    return regex.test(symbol);
  }

  function calculateTotalCost(quantity) {
    // Pricing tiers
    const pricing = {
      1: 25,
      2: 40,
      3: 45,
      4: 60,
      5: 50,
      6: 60,
      7: 70,
      8: 80,
      9: 90,
      10: 100
    };

    // Check if the quantity is within the pricing tiers
    if (quantity < 1 || quantity > 10) {
      return "Invalid quantity. Please select between 1 and 10.";
    }



    // Return the corresponding cost
    return pricing[quantity];
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
    console.log("Modal open state changed:", isModalOpen, amt);
    if (!email) {
      if (paypalContainerRef.current) {
        console.log(paypalContainerRef)
        paypalContainerRef.current.innerHTML = "Please enter your email address";
        paypalContainerRef.current.style.color = "red";
        return;
      }
    }
    else if (noOfReports < 1 || noOfReports > 10) {
      // alert("Invalid quantity. Please select between 1 and 10.");
      if (paypalContainerRef.current) {
        paypalContainerRef.current.innerHTML = "Invalid quantity. Please select between 1 and 10.";
        paypalContainerRef.current.style.color = "red";
        return;
      }
    } else {
      const symbols = tickerSymbols.split(" ");
      for (const symbol of symbols) {
        if (!isValidTickerSymbol(symbol)) {
          if (paypalContainerRef.current) {
            paypalContainerRef.current.innerHTML = "Invalid ticker symbol(s). Please enter valid symbols separated by a space.";
            paypalContainerRef.current.style.color = "red";
            return;
          }
        }
      }
    }




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
                    value: amt, // Payment amount
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              handleSendMail({ email, tickerSymbols, mode: "Report Asked" })
              alert(`Transaction completed by ${details.payer.name.given_name}`);
            });
          },
          onError: (err) => {
            console.error("PayPal Checkout Error:", err);
          },
        })
        .render(paypalContainerRef.current); // Render buttons to the container
    }
  }, [isModalOpen, amt, email, tickerSymbols]); // Re-run when the modal opens

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        sx={{
          height: 'max-content',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          borderRadius: "var(--radius-lg, 10px)",
          border: "1px solid #FFF",
          background: "#168118",
          color: "#FFF",
          boxShadow:
            "0px 0px 0px 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(16, 24, 40, 0.18)) inset, 0px -2px 0px 0px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(16, 24, 40, 0.05)) inset, 0px 1px 2px 0px var(--Colors-Effects-Shadows-shadow-xs, rgba(16, 24, 40, 0.05))",
          fontFamily: "'Fold Grotesque Pro', sans-serif",
          fontStyle: "normal",
          fontWeight: 850,
          lineHeight: "var(--Line-height-text-lg, 28px)",
        }}
        onClick={() => setIsModalOpen(true)}
      >
        Get AI Report
      </Button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>GET AI REPORT(S)</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p>Enter your email address where the report will be delivered:*</p>
          <input type="text" placeholder="Email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p>How many reports do you want?* ("Example: 2 or 5")</p>
          <input value={noOfReports} type="number" placeholder="Number of reports" onChange={(e) => { setNoOfReports(e.target.value); setAmt(calculateTotalCost(e.target.value)) }} />
          <p>
            Enter the valid ticker symbols matching reports you want, separated
            by a space:*
          </p>
          <input type="text" placeholder="e.g., AAPL TSLA MSFT" value={tickerSymbols} onChange={
            (e) => {
              setTickerSymbols(e.target.value);
            }
          } />
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