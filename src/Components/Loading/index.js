import React from "react";
import "./styles.css";

const Loading = () => {
  return (
    <>
      <div className="loadingDiv">
      <div class="loading">
        <span>loading...</span>
      </div>
      </div>
      {/* <div className="spinnerDiv">
        <p className="spinner">Loading . . .</p>
        </div> */}
    </>
  );
};

export default Loading;
