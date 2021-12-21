import './App.css';
import CodeMirror from '@uiw/react-codemirror';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [code,setCode] = useState('');
  const checkCode = () => {
    console.log('check code');
    axios
      .post('http://localhost:5000',{code}) 
      .then(({data})=>console.log(data))
    console.log('gtfgh');
    console.log(code);
  }
  return (
    <div className="App ">
      <div className='absolute top-20 bottom-40 left-20 right-20 text-left'>
        <CodeMirror
          value={code}
          options={{
            theme: 'dracula',
            keyMap: 'sublime',
            mode: 'jsx',
          }}
          onChange={(editor,change) => {
            console.log(editor);
            setCode(editor)
          }}
          className="w-96 h-80"
        />
        <button onClick={() => checkCode()}>Submit Code</button>
      </div>
    </div>
  );
}

export default App;
