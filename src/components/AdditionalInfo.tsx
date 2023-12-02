import React, { ChangeEvent, useCallback } from "react";
import { Input } from "antd";
import { $additionalInfo, setRequestPayload } from "../model/request.model";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";

const { TextArea } = Input;

export const AdditionalInfo = () => {
  const { t } = useTranslation();
  const value = useStore($additionalInfo);

  const onChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setRequestPayload({ name: "additionalInfo", value: e.target.value });
  }, []);

  return (
    <TextArea
      rows={2}
      placeholder={t("WRITE_ADDITIONAL_INFO")}
      onChange={onChange}
      value={value || ""}
    />
  );
};
