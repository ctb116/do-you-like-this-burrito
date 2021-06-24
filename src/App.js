import { useFirestore, useFirestoreDocData } from 'reactfire';

function Burrito() {
  const burritoRef = useFirestore()
  .collection('foodTruck')
  .doc('burrito');

  const { status, data } = useFirestoreDocData(burritoRef);

  if (status === "loading") {
    return <p>Fetching burrito flavor...</p>;
  }

  return <p>The burrito is liked: {data.liked}!</p>;

}


function App() {

  return (
    <div>
      <Burrito/>
    </div>
  );
}

export default App;
