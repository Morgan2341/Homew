import React from 'react';

function Skills({ skills }) {
  return (
    <div>
      <h3>Bacarıqlar</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
