import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';

function App() {

  const [blocks, setBlocks] = useState([]);

  const addBlock = (newBlock) => {
    setBlocks([
      ...blocks,newBlock
    ]);
  }

  return (

    <div className="App">
      <MessageForm onNewColor={addBlock}/>
      <MessageDisplay message={ blocks } />
    </div>
  );
}

export default App;
