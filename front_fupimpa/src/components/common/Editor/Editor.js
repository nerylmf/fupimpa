
import './Editor.css'
import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closebrackets';


export function CodeEditor() {
  const [code, setCode] = React.useState('// Bem-vindo ao Fupimpa!');

  return (
    <CodeMirror
      value={code}
      options={{
        mode: 'javascript',
        lineNumbers: true,
        autoCloseBrackets: true,

      }}
      onBeforeChange={(editor, data, value) => {
        setCode(value);

      }}
      onChange={(editor, data, value) => { }}
    />
  );
}





