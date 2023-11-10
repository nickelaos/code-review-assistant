import React, { startTransition } from "react";
import { Button } from "antd";
import { resetRequestPayload } from "../../model/request.model";
import { resetResponse } from "../../model/response.model";
import { resetLoading } from "../../model/loading.model";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  const back = () => {
    resetRequestPayload();
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
