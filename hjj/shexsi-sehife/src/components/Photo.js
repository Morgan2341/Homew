import React from 'react';

function Photo({ photoUrl }) {
  return (
    <div>
      <img src={photoUrl} alt="User Photo" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
    </div>
  );
}

export default Photo;
