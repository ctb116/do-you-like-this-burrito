import Burrito from './components/Burrito';
import burritoImage from './assets/istockphoto-burrito.jpg'

const App = () => {
  return (
    <div>
      <div className='header'>
        <h1>Do you like this Burrito?</h1>
      </div>
      <img src={burritoImage} alt=''/>
      <Burrito/>
    </div>
  )
}

export default App;
