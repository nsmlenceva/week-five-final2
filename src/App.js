import './App.css';
import { data } from './data';
import { useState } from 'react';


function App() {
  const [present, setPresent] = useState(0);
  const {id, name, description, image} = data[present];

  const PreviousPr = ()  => {
    setPresent( present => {
      present --;
      if (present < 0 ) {present = data.length-1}
      return present;
    }
    )
  }

  const NextPr = () => {
    setPresent( present => {
      present ++;
      if (present > data.length-1) {present = 0}
      return present;
    }
    )

  }


  return (
    <div>
      <div className='container'>
        <h1>{id} - {name}</h1>
      </div>
      <div className='container'>
        <img src={image} alt="present" width="300px"/>
      </div>
      <div className='container'>
        <p>{description}</p>
      </div>
      <div className='container'>
        <button onClick={PreviousPr}>Previous</button>
        <button onClick={NextPr}>Next</button>
      </div>
    </div>
  );
}

export default App;
