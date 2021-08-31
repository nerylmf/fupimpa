
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
      value={code.codeAtual}
      options={{
        mode: 'javascript',
        lineNumbers: true,
        autoCloseBrackets: true,

      }}
      onBeforeChange={(editor, data, value) => {
        code.setCodeAtual(value);
      }}
      onChange={(editor, data, value) => { }}
    />
  );
}





