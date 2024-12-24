// Write your code here.
import './index.css'

const CardItem = props => {
  const {title, description, imgUrl, className} = props

  return (
    <div className="container">
      <div className="cards">
        <div className={className}>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="img">
            <img src={imgUrl} alt={title} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardItem
