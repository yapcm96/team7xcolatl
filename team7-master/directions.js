function Directions() {
    const [text, setText] = React.useState("");
    React.useEffect(() => {
      L.mapquest.key = "jE1GaB5KTwbfCCHaA6rVAL0qvAT6sAPV";
      var map = L.mapquest.map('map', {
        center: [51.513128992320084, -0.12508325170625087],
        layers: L.mapquest.tileLayer('map'),
        zoom: 13
      });
    }, []);
  
    function local(start) {
      L.mapquest.directions().route({
        start,
        end: '11 Downing St, London GB, SW1A 2AB'
      });
    }
  
    return /*#__PURE__*/React.createElement("div", {
      className: "container "
    }, /*#__PURE__*/React.createElement("h3", null, "Get Directions"), /*#__PURE__*/React.createElement("div", {
      className: "input-group mb-3 row"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control col-sm-6",
      placeholder: "Address",
      "aria-label": "Address",
      "aria-describedby": "button-addon1",
      value: text,
      onChange: e => setText(e.target.value)
    }), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-outline-secondary col-sm-6",
      type: "button",
      id: "button-addon1",
      onClick: () => local(text)
    }, "Button")));
  }
  
  const locationElement = document.getElementById("locationRoot");
  ReactDOM.render( /*#__PURE__*/React.createElement(Directions, null), locationElement);