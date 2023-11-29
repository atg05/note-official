import "./Card.style.css";


const Card = () => {
  return (
    <div className="card-container">
      <h3>Title of Card</h3>
      <p>Description</p>
      <div className="time_stamp">
        <p>22:24 PM</p>
        <p>22 Jan</p>
      </div>
    </div>
  )
}

export default Card