import React from "react";
import { useGlobalContext } from "./context";

const Home = () => {
  const { openModal } = useGlobalContext();
  return (
    <div className="home">
      <div>
        <h3 className="phone">
          Click the below button to verify your mobile no.
        </h3>
      </div>
      <div>
        <button className="md-btn verify" onClick={openModal}>
          Verify Number
        </button>
      </div>
    </div>
  );
};

export default Home;
