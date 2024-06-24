import React from 'react';

function PetPhoto({ photoUrl }) {
  return (
    <div>
      <img src={photoUrl} alt="Ev Heyvanı Fotoşəkili" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
    </div>
  );
}

export default PetPhoto;
