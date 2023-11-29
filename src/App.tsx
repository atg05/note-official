import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Toolbar from "./components/toolbar/Toolbar";
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
          gap: "10px",
          marginInline: "auto",
          maxWidth: "80%",
        }}
      >
        <Header />
        <Card />
        <Card />
        <Card />
        <Card />
        <Toolbar />
      </div>
    </>
  );
}

export default App;
