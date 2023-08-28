import React from 'react';

const Witness = ({ name, testimony }) => {
  return (
    <div>
      <h2>Witness: {name}</h2>
      <p>Testimony: {testimony}</p>
    </div>
  );
};

export default Witness;