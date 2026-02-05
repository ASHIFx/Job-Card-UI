import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <>    <div className='container'>
      <div className="card">
        <div className="header">
          <img src={props.logo} alt="" />
          <button>Save  <Bookmark size={17}/></button>
        </div>
        <div className="center">
          <div className="time">
            <h3>{props.company}</h3>
            <p>{props.time}</p>
          </div>
          <h2>{props.post}</h2>
          <div className="tags">
            <button>{props.tag1}</button>
            <button>{props.tag2}</button>
          </div>
        </div>
        <div className="footer">
          <div className="salloc">
            <h3>{props.salary}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply now</button>
        </div>
      </div>
    </div>
    
</>
  )
}

export default Card