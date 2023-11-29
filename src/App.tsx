import Card from "./components/card/Card"
// import Button from "./components/common/Button/Button"
import "./styles/index.css"


function App() {
  return (
    <>
      
      {/* <Button /> */}
      <div style={{display:'flex',flexDirection:'column',gap:'10px',marginInline:'auto',maxWidth:'80%'}}>

      <Card />
      <Card />
      <Card />
      <Card />
      </div>
    </>
  )
}

export default App
