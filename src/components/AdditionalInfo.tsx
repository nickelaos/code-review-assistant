import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

export const AdditionalInfo = () => {
  return <TextArea rows={2} placeholder="Write additional information..." />;
};
