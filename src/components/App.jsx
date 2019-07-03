import React, { useState } from 'react';

const dictionary = ['cookie', 'key', 'curb', 'call', 'cayman', 'catman', 'cat', 'caca'];

class Node {
  constructor(char) {
    this.val = char;
    this.word = null;
    this.children = Array(26).fill(null);
    // char codes 97-122, a-z
  }
}

class Trie {
  constructor() {
    this.root = new Node(null, false);
  }

  addWord(str) {
    let root = this.root;
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const charCode = str.charCodeAt(i);
      let child = root.children[charCode - 96];

      if (!child) {
        child = new Node(char);
        root.children[charCode - 97] = child;
      }
      root = child;
    }
    root.word = str;
  }

  getSubtree(str) {
    const result = [];

    return result;
  }
}

const App = props => {
  const [text, setText] = useState('');
  const {} = props;

  return (
    <div>
      Welcome to my autocomplete project
      <div>
        <input type="text" placeholder="type here" value={text} onChange={e => setText(e.target.value)} />
      </div>
    </div>
  );
};

export default App;
