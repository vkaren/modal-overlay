import React from "react";
import Offer from "./Offer";

class App extends React.Component {
  state = {
    render: "show",
  };
  showOffer = () => {
    this.setState({ render: "offer" });
  };
  acceptOffer = () => {
    this.setState({ render: "accept" });
  };
  closeOffer = (e) => {
    if (e.target.className === "close" || e.target.className === "overlay") {
      this.setState({ render: "show" });
    }
  };
  render() {
    if (this.state.render === "show") {
      return (
        <button className="show" onClick={this.showOffer}>
          Show Offer
        </button>
      );
    } else if (this.state.render === "offer") {
      return <Offer accept={this.acceptOffer} close={this.closeOffer} />;
    } else if (this.state.render === "accept") {
      return <p>Offer accepted :)</p>;
    }
  }
}

export default App;
