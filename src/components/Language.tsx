import React, { useCallback } from "react";
import { Select } from "antd";
import { $language, setRequestPayload } from "../model/request.model";
import { useTranslation } from "react-i18next";
import { useStore } from "effector-react";

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
  const { t } = useTranslation();
  const value = useStore($language);

  const onChange = useCallback((value: string) => {
    setRequestPayload({ name: "language", value });
  }, []);

  return (
    <Select
      placeholder={t("SELECT_LANGUAGE")}
      onChange={onChange}
      options={options}
      value={value}
    />
  );
};
