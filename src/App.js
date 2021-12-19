import './App.css';
import CodeMirror from '@uiw/react-codemirror';
import { useState } from 'react';

function App() {
  const [code,setCode] = useState('function add(a,b){return a+b}');
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
          onChange={(editor, data, value) => {
              setCode(editor.getValue());
          }}
          className="w-96 h-80"
        />
      </div>
    </div>
  );
}

export default App;
