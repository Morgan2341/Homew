import React from 'react';

function Poster({ posterUrl }) {
  return (
    <div>
      <img src={posterUrl} alt="Film afişası" style={{ width: '200px', height: '300px' }} />
    </div>
  );
}

export default Poster;
