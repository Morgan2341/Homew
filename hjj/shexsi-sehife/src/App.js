import React from 'react';
import UserInfo from './components/UserInfo';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Photo from './components/Photo';
import './App.css';

function App() {
  const user = {
    fullName: 'Fabrizo Romano',
    phone: '+123456789',
    email: 'fabrizo.roman@example.com',
    city: 'Napoli',
    experience: [
      { jobTitle: 'Software Engineer', company: '433', years: '2018-2022' },
      { jobTitle: 'Junior Developer', company: 'FIFA', years: '2015-2018' }
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'],
    photoUrl: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRVzmymuHHtE-d-AedRWsStyotTnfmRJIpXfHS-J22bgv4G988GrWTMHy7skRbWyj9H5dFfIQlTehhtJc0'
  };

  return (
    <div className="App">
      <h1>Şəxsi Səhifə</h1>
      <Photo photoUrl={user.photoUrl} />
      <UserInfo 
        fullName={user.fullName} 
        phone={user.phone} 
        email={user.email} 
        city={user.city} 
      />
      <Experience experience={user.experience} />
      <Skills skills={user.skills} />
    </div>
  );
}

export default App;
