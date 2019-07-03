import React, { useState } from 'react';

const App = props => {
  const [text, setText] = useState('');
  const {} = props;

  return (
    <div>
      Welcome to my autocomplete project
      <input type="text" placeholder="type here" value={text} onChange={e => setText(e.target.value)} />
    </div>
  );
};

export default App;
