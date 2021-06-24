import React from "react";
import { useFirestore, useFirestoreDocData } from 'reactfire';
import LikeButton from './LikeButton';


const Burrito = ({ handleChange, isChecked }) => {
  const burritoRef = useFirestore()
  .collection('foodTruck')
  .doc('burrito');
  
  const { status, data } = useFirestoreDocData(burritoRef);

  handleChange = () => {

    if(sessionStorage.getItem('liked') === null) {
      sessionStorage.setItem('liked', 'false');
    }

    const likedState = sessionStorage.getItem('liked');

    if(likedState === 'false') {
      sessionStorage.setItem('liked', 'true');
      let vote = {
        liked: data.liked + 1
      }
      burritoRef.set(vote)
    } else {
      sessionStorage.setItem('liked', 'false');
      let vote = {
        liked: data.liked - 1
      }
      burritoRef.set(vote)
    }

  };

  isChecked = () => {
    const likedState = sessionStorage.getItem('liked')
    if(likedState === 'false') {
      return false
    } else {
      return true
    }
  }

  if (status === "loading") {
    return <p>Fetching burrito flavor...</p>;
  } else {
    return (
      <div>
        <p>The burrito is liked: {data.liked}!</p>
        <LikeButton 
          handleChange={handleChange}
          isChecked={isChecked}
        />
      </div>
    )
  }
}
 
export default Burrito;
