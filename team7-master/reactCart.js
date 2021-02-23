const AppState = React.createContext();

function ItemsBox() {
  const {
    items,
    clearItems
  } = React.useContext(AppState);
  const itemsOutput = items ? /*#__PURE__*/React.createElement("span", {
    className: "badge badge-warning bg-white",
    id: "lblCartCount"
  }, " ", items, " ") : null;
  return ReactDOM.createPortal(itemsOutput, document.getElementById("shoppingCartRoot"));
}

function ClearCart() {
  const {
    items,
    clearItems
  } = React.useContext(AppState);
  const itemsOutput = items ? /*#__PURE__*/React.createElement("button", {
    onClick: clearItems
  }, "Clear") : null;
  return ReactDOM.createPortal(itemsOutput, document.getElementById("clearCartRoot"));
}

function SendItems(props) {
  const {
    items,
    setItems
  } = React.useContext(AppState);
  let newItems = items + 1;
  const id = props.id;
  return ReactDOM.createPortal( /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => setItems(newItems)
  }, "Add to Cart"), document.getElementById(id));
}

function App() {
  const [items, setItems] = React.useState(0);
  return /*#__PURE__*/React.createElement(AppState.Provider, {
    value: {
      items,
      setItems,
      clearItems: () => setItems(null)
    }
  }, /*#__PURE__*/React.createElement(ItemsBox, null), /*#__PURE__*/React.createElement(ClearCart, null), /*#__PURE__*/React.createElement(SendItems, {
    id: "chocolateOne"
  }), /*#__PURE__*/React.createElement(SendItems, {
    id: "chocolateTwo"
  }), /*#__PURE__*/React.createElement(SendItems, {
    id: "chocolateThree"
  }));
}

const rootElement = document.getElementById("reactRoot");
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), rootElement);

