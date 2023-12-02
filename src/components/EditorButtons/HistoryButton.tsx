import React, { startTransition } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { HistoryOutlined } from "@ant-design/icons";

export const HistoryButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    startTransition(() => {
      navigate("/history");
    });
  };

  return (
    <Button
      type="default"
      className="history-btn"
      size="middle"
      onClick={handleClick}
      icon={<HistoryOutlined />}
    ></Button>
  );
};
