import { Select } from "antd";
import { useCallback } from "react";
import { setRequestPayload } from "../model/request.model";

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
  const onChange = useCallback((value: string) => {
    setRequestPayload({ name: "engine", value });
  }, []);
  return (
    <Select options={options} onChange={onChange} placeholder="Select engine" />
  );
};
