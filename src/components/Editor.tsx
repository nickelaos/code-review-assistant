import MonacoEditor from "react-monaco-editor/lib/editor";
import React, { useCallback, useState } from "react";
import { Select } from "antd";
import { Engine } from "./Engine";

import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import "monaco-editor/esm/vs/basic-languages/css/css.contribution";
import "monaco-editor/esm/vs/basic-languages/html/html.contribution";
import "monaco-editor/esm/vs/basic-languages/java/java.contribution";
import "monaco-editor/esm/vs/basic-languages/php/php.contribution";
import "monaco-editor/esm/vs/basic-languages/sql/sql.contribution";
import "monaco-editor/esm/vs/basic-languages/python/python.contribution";
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution";
import "monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution";

const options = {
  minimap: {
    enabled: true
  },
  contextmenu: true
};

monaco.languages.register({ id: "sql" });
monaco.languages.register({ id: "css" });
monaco.languages.register({ id: "html" });
monaco.languages.register({ id: "python" });
monaco.languages.register({ id: "java" });
monaco.languages.register({ id: "php" });
monaco.languages.register({ id: "javascript" });
monaco.languages.register({ id: "typescript" });

const languageOptions = [
  {
    value: "javascript",
    label: "JavaScript"
  },
  {
    value: "typescript",
    label: "TypeScript"
  },
  {
    value: "python",
    label: "Python"
  },

  {
    value: "css",
    label: "CSS"
  },
  {
    value: "html",
    label: "HTML"
  },
  {
    value: "java",
    label: "Java"
  },
  {
    value: "php",
    label: "PHP"
  },
  {
    value: "sql",
    label: "SQL"
  }
];

function Editor() {
  const [language, setLanguage] = useState("typescript");

  const onLanguageChange = useCallback((value: string) => {
    setLanguage(value);
  }, []);

  const onChange = useCallback((value: string) => {
    console.log(value);
  }, []);

  const onEditorDidMount = useCallback(() => {}, []);

  return (
    <>
      <Select
        placeholder="Select language"
        onChange={onLanguageChange}
        options={languageOptions}
      />
      <Engine />
      <MonacoEditor
        height={"440px"}
        language={language}
        theme="vs-dark"
        value={""}
        onChange={onChange}
        options={options}
        editorDidMount={onEditorDidMount}
      />
    </>
  );
}

export default Editor;
