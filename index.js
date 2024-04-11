const element = (
  //   Write your code here.
  <div className="bgContainer">
    <h1 className="heading">Super Over League</h1>
    <div className="imageContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
        className="imageOne"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
        className="imageTwo"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
