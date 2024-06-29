import React, { useState } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const SpellChecker = () => {
  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);

    const words = inputText.split(' ');
    for (let word of words) {
      const lowerCaseWord = word.toLowerCase();
      if (customDictionary[lowerCaseWord]) {
        setSuggestion(`Did you mean: ${customDictionary[lowerCaseWord]}?`);
        return;
      }
    }
    setSuggestion('');
  };

  return (
    <div className="container">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter text..."
        rows="10"
        cols="50"
      />
      <p className="suggestion">{suggestion}</p>
    </div>
  );
};

export default SpellChecker;
