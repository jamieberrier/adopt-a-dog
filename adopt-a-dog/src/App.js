import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import 'fontsource-roboto';
import './App.css';
import { fetchDogs } from './services/dogs';
import DogCard from './components/DogCard';

function App() {
  // Declare new state variables: isLoading, dogs
  const [isLoading, setIsLoading] = useState(true)
  const [dogs, setDogs] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    fetchDogs()
      .then(dogsData => {
        setDogs(Object.values(dogsData.data))
        setIsLoading(false)
      })
      .catch(error => console.log('Request Failed', error))
    return () => setIsLoading(true);
  }, [])

  const dogCards = dogs.map((dog, index) => (
    <div key={index}>
      <DogCard key={dog.animalID.toString()} dog={dog} />
      <br></br>
    </div>
  ))

  return (
    <div className="App">
      <header className="App-header">
        Adopt Me
      </header>
      {isLoading && 
        <>
          <p className="App-link">Loading...</p>
          <img src={logo} className="App-logo" alt="logo" />
        </>
      }
      {dogCards}
    </div>
  );
}

export default App;
