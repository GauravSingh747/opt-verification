import React from "react";
import { useGlobalContext } from "./context";

const ModelBtn = () => {
  const { closeModal, setOtp } = useGlobalContext();

  const clear = (e) => {
    e.preventDefault();
    setOtp(["", "", "", "", "", ""]);
  };

  return (
    <>
      <div className="change">
        <div>
          <p className="blue1">Change Number</p>
        </div>
        <div>
          <p className="blue2">Re-send OTP</p>
        </div>
      </div>
      <div className="bottom-btn">
        <div>
          <button className="md-btn" onClick={closeModal}>
            Close
          </button>
        </div>
        <div>
          <button className="md-btn" onClick={clear}>
            Clear
          </button>
        </div>
        <button className="md-btn">Verify Mobile Number</button>
      </div>
    </>
  );
};

export default ModelBtn;
