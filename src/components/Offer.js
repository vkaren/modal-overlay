import React from "react";

function Offer(props) {
  return (
    <div className="overlay" onClick={props.close}>
      <div className="offer">
        <button className="close" onClick={props.close}>
          x
        </button>
        <p>Click the button below to accept our amazing offer!</p>
        <button className="accept" onClick={props.accept}>
          Accept offer
        </button>
      </div>
    </div>
  );
}

export default Offer;
