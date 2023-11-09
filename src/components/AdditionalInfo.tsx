import React, { ChangeEvent, useCallback } from "react";
import { Input } from "antd";
import { setRequestPayload } from "../model/request.model";

const { TextArea } = Input;

export const AdditionalInfo = () => {
  const onChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setRequestPayload({ name: "additionalInfo", value: e.target.value });
  }, []);

  return (
    <TextArea
      rows={2}
      placeholder="Write additional information..."
      onChange={onChange}
    />
  );
};
