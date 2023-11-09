import React, { useCallback } from "react";
import { Select } from "antd";
import { setRequestPayload } from "../model/request.model";

const options = [
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

export const Language = () => {
  const onChange = useCallback((value: string) => {
    setRequestPayload({ name: "language", value });
  }, []);

  return (
    <Select
      placeholder="Select language"
      onChange={onChange}
      options={options}
    />
  );
};
