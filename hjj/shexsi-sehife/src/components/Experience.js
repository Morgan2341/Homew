import React from 'react';

function Experience({ experience }) {
  return (
    <div>
      <h3>İş Təcrübəsi</h3>
      <ul>
        {experience.map((exp, index) => (
          <li key={index}>
            <strong>{exp.jobTitle}</strong> - {exp.company} ({exp.years})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
