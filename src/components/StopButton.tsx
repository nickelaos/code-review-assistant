import React from "react";
import { Button } from "antd";
import { history } from "../navigation";
import { resetResponse } from "../model/response.model";
import {resetLoading, setLoading} from "../model/loading.model";

export const StopButton = () => {
  const stop = () => {
    resetResponse();
    resetLoading();
    history.push("/");
  };

  return (
    <Button type="default" className="stop-btn" size="large" onClick={stop}>
      <i className="btn-symbol">■</i>︎ STOP
    </Button>
  );
};
