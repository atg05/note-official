import Button from "../common/Button/Button";
import "./Header.style.css";

const Header = () => {
  return (
    <div className='header-container'>
        <p className="title">Notes</p>
        <Button>New</Button>
        </div>
  )
}

export default Header