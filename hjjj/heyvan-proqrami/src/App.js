import React from 'react';
import PetInfo from './components/PetInfo';
import PetPhoto from './components/PetPhoto';
import './App.css';

function App() {
  const pet = {
    name: 'Chris',
    type: 'İt',
    age: 3,
    breed: 'Golden Retriever',
    owner: 'Maqa',
    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJU_aRybhiJnVUitOFKoexK89bvCy4oyB5ACTXE8zUxF8xhVM'
  };

  return (
    <div className="App">
      <h1>Heyvan Proqramı</h1>
      <PetPhoto photoUrl={pet.photoUrl} />
      <PetInfo 
        name={pet.name}
        type={pet.type}
        age={pet.age}
        breed={pet.breed}
        owner={pet.owner}
      />
    </div>
  );
}

export default App;
