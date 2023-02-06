import React, { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');

  const handleFileUpload = event => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = event => {
      setText(event.target.result);
    };

    reader.readAsText(file);
  };

  

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <pre>{text}</pre>
    </div>
  );
};

export default App;