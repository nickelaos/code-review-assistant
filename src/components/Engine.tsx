import { Select } from "antd";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { $engine, setRequestPayload } from "../model/request.model";
import { useStore } from "effector-react";

const options = [
  {
    label: "OpenAI",
    value: "openai"
  },
  {
    label: "Google Bard",
    value: "google"
  }
];

export const Engine = () => {
  const { t } = useTranslation();
  const value = useStore($engine);

  const onChange = useCallback((value: string) => {
    setRequestPayload({ name: "engine", value });
  }, []);

  return (
    <Select
      options={options}
      onChange={onChange}
      placeholder={t("SELECT_ENGINE")}
      value={value}
    />
  );
};
