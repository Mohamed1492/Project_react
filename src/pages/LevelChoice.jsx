import DifficultyButton from "../Components/DifficultyButton"


const LevelChoice = ({handleLevel }) => {

  
  const handleClick = (selectedChoice) => {
    handleLevel (selectedChoice);
  };
  return (
    <div className='Choice'>
      <DifficultyButton difficulty="Easy" color="green" fontsize="32px" handleClick={handleClick}/>
      <DifficultyButton difficulty="Medium" color="orange" fontsize="36px" handleClick={handleClick}/>
      <DifficultyButton difficulty="Hard" color="red" fontsize="40px" handleClick={handleClick}/>
    </div>
  )
}

export default LevelChoice