import React, { ChangeEvent, useCallback } from "react";
import { Input } from "antd";
import { $additionalInfo, setRequestPayload } from "../model/request.model";
import { useStore } from "effector-react";

const { TextArea } = Input;

export const AdditionalInfo = () => {
  const value = useStore($additionalInfo);

  const onChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setRequestPayload({ name: "additionalInfo", value: e.target.value });
  }, []);

  return (
    <TextArea
      rows={2}
      placeholder="Write additional information..."
      onChange={onChange}
      value={value || ""}
    />
  );
};
