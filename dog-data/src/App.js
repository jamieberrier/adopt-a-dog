import React, { useEffect, useState } from 'react';
import 'fontsource-roboto';
import './App.css';
import { fetchDogs } from './services/dogs';

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

  return (
    <div className="App">
      <header className="App-header">
        {isLoading && <p>Loading...</p>}
        {dogs.map(dog => (
          <div>
            <h3>
              <a href={dog.locationUrl}>{dog.animalName}</a>
            </h3>
            <img src={dog.animalThumbnailUrl} alt={dog.animalDescription} />
            <p>{dog.animalGeneralAge} {dog.animalSex} {dog.animalBreed}</p>
            <p>zip: {dog.animalLocation}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
