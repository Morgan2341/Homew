import React from 'react';

function UserInfo({ fullName, phone, email, city }) {
  return (
    <div>
      <h2>{fullName}</h2>
      <p><strong>Telefon:</strong> {phone}</p>
      <p><strong>E-poçt:</strong> {email}</p>
      <p><strong>Yaşayış şəhəri:</strong> {city}</p>
    </div>
  );
}

export default UserInfo;
