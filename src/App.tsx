import Header from "./components/header/Header";
// import Card from "./components/card/Card";
// import Toolbar from "./components/toolbar/Toolbar";
// import Button from "./components/common/Button/Button"
import "./styles/index.css";

function App() {
  return (
    <>
      {/* <Button /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginInline: "auto",
          maxWidth: "70%",
        }}
      >
        <Header />

        {/* <Toolbar /> */}
      </div>
    </>
  );
}

export default App;
