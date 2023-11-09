import React from "react";
import { Button } from "antd";
import { history } from "../navigation";
import { resetRequestPayload } from "../model/request.model";
import { resetResponse } from "../model/response.model";
import { resetLoading } from "../model/loading.model";

export const BackButton = () => {
  const back = () => {
    resetRequestPayload();
    resetResponse();
    resetLoading();
    history.push("/");
  };

  return (
    <Button type="default" className="back-btn" size="large" onClick={back}>
      <i className="btn-symbol">←</i> BACK
    </Button>
  );
};
