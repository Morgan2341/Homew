import React from 'react';

function PetInfo({ name, type, age, breed, owner }) {
  return (
    <div>
      <h2>Ev Heyvanı Məlumatları</h2>
      <p><strong>Adı:</strong> {name}</p>
      <p><strong>Növü:</strong> {type}</p>
      <p><strong>Yaşı:</strong> {age}</p>
      <p><strong>Cinsi:</strong> {breed}</p>
      <p><strong>Sahibi:</strong> {owner}</p>
    </div>
  );
}

export default PetInfo;
