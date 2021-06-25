import Burrito from './components/Burrito';
import burritoImage from './assets/istockphoto-burrito.jpg'

const App = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Do you like this Burrito?</h1>
      <img src={burritoImage}/>
      <Burrito/>
    </div>
  )
}

export default App;
