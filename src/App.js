import './App.css';
import { useState } from 'react';
import { data } from './data';

function App() {
 const [place, setPlace] = useState(data);
 const [text, setText] = useState(false);

 const removeCity = (id) => {
  let newThing = place.filter(thing => thing.id !== id);
  setPlace(newThing);
 }

 const showText = (item) =>{
  item.showMore = !item.showMore;
  setText(!text);
 }

 return(<div>
  <div className='container'>
    <h1>{place.length} interesting cities in Russia</h1>
  </div>

  {place.map(item => {
    const {id, city, description, source, image, showMore} = item;
    return(<div>
      <div className='container'>
        <h2>{id} - {city}</h2>
      </div>

      <div className='container'>
        <img src={image} width="400px" alt="city"/>
      </div>

      <div className='container'>
        <p>{showMore ? description : description.substring(0, 50) + "..."} 
          <button onClick={() => showText(item)} className='submit'>{showMore ? 'меньше' : 'больше'}</button></p>
      </div>

      <div className='container'>
        <p>{source}</p>
      </div>

      <div className='container'>
        <button onClick={() => removeCity(id)} className='btn'>удалить</button>
      </div>
    </div>)
  }
)}
 <div className='container'>
  <button onClick={() => setPlace([])} className='btn all'>удалить все</button>
 </div>
 </div>)
  
}
export default App;
