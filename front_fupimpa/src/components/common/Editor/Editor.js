
import './Editor.css'
import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closebrackets';
import { useContext } from 'react/cjs/react.development';
import { AtividadeContext } from '../../pages/PaginaAtividade/PaginaAtividade';


export function CodeEditor() {
  const code = useContext(AtividadeContext);

  return (
    <CodeMirror 
      mode='javascript'
      theme='monokai'
      value={code.codeAtual}
      options={{   
        
        smartIndent: true,
        lineNumbers: true,
        autoCloseBrackets: true,

      }}
      onBeforeChange={(editor, data, value) => {
        code.setCodeAtual(value);
        code.setCodeRealidade(value);
      }}
      onChange={(editor, data, value) => { }}
    />
  );
}





