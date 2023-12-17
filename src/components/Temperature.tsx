import React from "react";
import { Slider } from "antd";
import { useTranslation } from "react-i18next";
import {setRequestPayload} from "../model/request.model";

export const Temperature = () => {
  const { t } = useTranslation();

  const onChange = (value: number) => {
      setRequestPayload({ name: "temperature", value });
  };

  return (
    <div className="slider">
      <span>{t("PRECISION")}</span>
      <Slider
        min={0}
        max={1}
        step={0.1}
        tooltip={{ open: false }}
        defaultValue={0.2}
        onChange={onChange}
      />
      <span>{t("CREATIVITY")}</span>
    </div>
  );
};
