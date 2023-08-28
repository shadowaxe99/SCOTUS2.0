import React, { useState } from 'react';

const Courtroom = () => {
  const [caseNumber, setCaseNumber] = useState('');
  const [judge, setJudge] = useState('');
  const [lawyers, setLawyers] = useState([]);
  const [witnesses, setWitnesses] = useState([]);
  const [jury, setJury] = useState([]);

  const handleCaseNumberChange = (event) => {
    setCaseNumber(event.target.value);
  };

  const handleJudgeChange = (event) => {
    setJudge(event.target.value);
  };

  const handleLawyerChange = (event, index) => {
    const updatedLawyers = [...lawyers];
    updatedLawyers[index] = event.target.value;
    setLawyers(updatedLawyers);
  };

  const handleWitnessChange = (event, index) => {
    const updatedWitnesses = [...witnesses];
    updatedWitnesses[index] = event.target.value;
    setWitnesses(updatedWitnesses);
  };

  const handleJuryChange = (event, index) => {
    const updatedJury = [...jury];
    updatedJury[index] = event.target.value;
    setJury(updatedJury);
  };

  return (
    <div>
      <h2>Courtroom</h2>
      <label htmlFor="caseNumber">Case Number:</label>
      <input
        type="text"
        id="caseNumber"
        value={caseNumber}
        onChange={handleCaseNumberChange}
      />

      <label htmlFor="judge">Judge:</label>
      <input
        type="text"
        id="judge"
        value={judge}
        onChange={handleJudgeChange}
      />

      <h3>Lawyers:</h3>
      {lawyers.map((lawyer, index) => (
        <input
          key={index}
          type="text"
          value={lawyer}
          onChange={(event) => handleLawyerChange(event, index)}
        />
      ))}

      <h3>Witnesses:</h3>
      {witnesses.map((witness, index) => (
        <input
          key={index}
          type="text"
          value={witness}
          onChange={(event) => handleWitnessChange(event, index)}
        />
      ))}

      <h3>Jury:</h3>
      {jury.map((juror, index) => (
        <input
          key={index}
          type="text"
          value={juror}
          onChange={(event) => handleJuryChange(event, index)}
        />
      ))}
    </div>
  );
};

export default Courtroom;