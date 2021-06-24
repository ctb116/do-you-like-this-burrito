const LikeButton = ({ handleChange, isChecked }) => {
  return <input 
            type='checkbox'
            checked={isChecked()}
            onChange={() => handleChange()}
          />;
}
 
export default LikeButton;