import { Col } from 'react-bootstrap'
import './BetaCard.css'

const BetaCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <div className='container1'>
          <img src={imgUrl} alt='' />
        </div>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
export default BetaCard