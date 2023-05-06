import React, { useRef } from "react";
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";
import ModelBtn from "./ModelBtn";
import Home from "./Home";
const Modal = () => {
  const { isModalOpen, closeModal, otp, setOtp } = useGlobalContext();
  const inputRefs = useRef([]);

  //======= fn-1 ======
  function handleOtpChange(event, index) {
    const { value } = event.target;
    if (/^\d*$/.test(value) && index < otp.length) {
      // Update the corresponding digit in the OTP
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      // moving the focus to the next input if a digit is aleady entered
      if (value && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }
    }
  }

  //======= fn-2 ======
  function handleKeyDown(event, index) {
    if (
      event.key === "Backspace" &&
      !otp[index] &&
      inputRefs.current[index - 1]
    ) {
      // Deleteing the focus and moving to next
      const updatedOtp = [...otp];
      updatedOtp[index - 1] = "";
      setOtp(updatedOtp);
      inputRefs.current[index - 1].focus();
      // code for moving focus to prev input
    } else if (event.key === "ArrowLeft" && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
      //  next input focus
    } else if (event.key === "ArrowRight" && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  }

  //======= fn-3 ====== logic for user can directly paste from the code
  function handlePaste(event) {
    event.preventDefault();
    const clipboardData = event.clipboardData.getData("text/plain").slice(0, 6);
    const pastedOtp = [...clipboardData.padEnd(6, " ")].map((char) =>
      /^\d$/.test(char) ? char : ""
    );
    setOtp(pastedOtp);
  }

  return (
    <main>
      <Home />
      <div
        className={`${
          isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="modal-container">
          {/* =================================== */}
          <div className="otp-form">
            <h2 className="phone">Phone verification</h2>
            <h2>Enter the Otp you recieved on 89206-6XXX </h2>
            <div className="popup">
              <form>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    className="input-text"
                    type="text"
                    maxLength="1"
                    placeholder="-"
                    value={digit}
                    ref={(ref) => (inputRefs.current[index] = ref)}
                    onChange={(event) => handleOtpChange(event, index)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    onPaste={handlePaste}
                  />
                ))}
              </form>
              <ModelBtn />
            </div>
          </div>
          <button className="close-modal-btn" onClick={closeModal}>
            <FaTimes></FaTimes>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Modal;
