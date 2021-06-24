import { useFirestore, useFirestoreDocData } from 'reactfire';
import LikeButton from './LikeButton';


const Burrito = () => {
  const burritoRef = useFirestore()
  .collection('foodTruck')
  .doc('burrito');
  
  const { status, data } = useFirestoreDocData(burritoRef);

  function handleClick() {
    let upvote = {
      liked: data.liked + 1
    }
    burritoRef.set(upvote)
  }

  if (status === "loading") {
    return <p>Fetching burrito flavor...</p>;
  } else {
    return (
      <div>
        <p>The burrito is liked: {data.liked}!</p>
        <LikeButton handleClick={handleClick}/>
      </div>
    )
  }
}
 
export default Burrito;
