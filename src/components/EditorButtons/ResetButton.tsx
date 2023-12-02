import React from "react";
import { Button } from "antd";
import { ClearOutlined } from "@ant-design/icons";
import { resetRequestPayload } from "../../model/request.model";

export const ResetButton = () => {
  const reset = () => {
    resetRequestPayload();
  };

  return (
    <Button
      type="default"
      className="reset-btn"
      size="middle"
      onClick={reset}
      icon={<ClearOutlined />}
    ></Button>
  );
};
