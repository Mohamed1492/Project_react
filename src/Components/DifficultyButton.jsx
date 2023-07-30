import { Link } from 'react-router-dom'

const DifficultyButton = ({difficulty,color, fontsize, handleClick}) => {

    
    const buttonStyle = {
        backgroundColor: color,
        color: 'white',
        margin: '50px',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        width: "200px",
        height: "150px",
        fontSize: fontsize,
  
      };

      let stars = '';
  if (difficulty === 'Easy') {
    stars = '⭐'; // One star for easy
  } else if (difficulty === 'Medium') {
    stars = '⭐⭐'; // Two stars for medium
  } else if (difficulty === 'Hard') {
    stars = '⭐⭐⭐'; // Three stars for hard
  }
  return (
    <div >
    <Link  to="/Quiz" >
        <button style={buttonStyle} value={difficulty} onClick={() => handleClick(difficulty)}> {stars} <br /><span>{difficulty}</span></button>
    </Link>
    </div>
  )
}

export default DifficultyButton