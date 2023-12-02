import React, { useCallback, useState } from "react";
import { Select } from "antd";
import i18next from "i18next";

const options = [
  {
    label: "English",
    value: "en"
  },
  {
    label: "Українська",
    value: "uk"
  }
];

export const Internationalization = () => {
  const [value, setValue] = useState(i18next.language);

  const onChange = useCallback((value: string) => {
    void i18next.changeLanguage(value);
    setValue(value);
  }, []);

  return (
    <Select
      options={options}
      onChange={onChange}
      value={value}
      className="lang-selector"
    />
  );
};
