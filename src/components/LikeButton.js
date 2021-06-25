import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const LikeButton = ({ handleChange, isChecked }) => {
  return (
    <FormGroup style={{display: 'block'}}>
      <FormControlLabel
      control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="favorite" />}
      checked={isChecked()}
      onChange={() => handleChange()}
      />
    </FormGroup>
  )
}
 
export default LikeButton;