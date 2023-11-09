import MonacoEditor from "react-monaco-editor/lib/editor";
import React, { useCallback } from "react";
import { useStore } from "effector-react";
import { Engine } from "./Engine";
import { AdditionalInfo } from "./AdditionalInfo";
import { Language } from "./Language";

import { $language, setRequestPayload } from "../model/request.model";
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

const EDITOR_HEIGHT = 440;

function Editor() {
  const language = useStore($language);

  const onChange = useCallback((value: string) => {
    setRequestPayload({ name: "input", value });
  }, []);

  const onEditorDidMount = useCallback(() => {}, []);

  return (
    <>
      <Language />
      <Engine />
      <MonacoEditor
        height={EDITOR_HEIGHT}
        language={language || "javascript"}
        theme="vs-dark"
        value=""
        onChange={onChange}
        options={options}
        editorDidMount={onEditorDidMount}
      />
      <AdditionalInfo />
    </>
  );
}

export default Editor;
