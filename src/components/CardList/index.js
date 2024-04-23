import {Link} from 'react-router-dom'
import './index.css'

const CardList = prop => {
  const {id, name, logo_url} = prop
  return (
    <Link className="card-list" to={`courses/${id}`}>
      <img src={logo_url} alt={name} />
      <p>{name}</p>
    </Link>
  )
}
export default CardList
