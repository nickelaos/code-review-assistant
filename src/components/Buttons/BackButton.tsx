import React, { startTransition } from "react";
import { Button } from "antd";
import { resetResponse } from "../../model/response.model";
import { resetLoading } from "../../model/loading.model";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  const back = () => {
    resetResponse();
    resetLoading();
    startTransition(() => {
      navigate("/");
    });
  };

  return (
    <Button type="default" className="back-btn" size="large" onClick={back}>
      <i className="btn-symbol">←</i> BACK
    </Button>
  );
};
