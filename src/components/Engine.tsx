import { Select } from "antd";
import { useCallback } from "react";

const options = [
  {
    label: "OpenAI",
    value: "openai"
  }
];

export const Engine = () => {
  const onChange = useCallback((value: string) => {}, []);
  return (
    <Select options={options} onChange={onChange} placeholder="Select engine" />
  );
};
