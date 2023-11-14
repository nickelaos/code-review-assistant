import { createEffect, createEvent, createStore } from "effector";
import { RequestPayload, Field } from "../types/main.types";
import { openaiApi } from "../api/openai";

export const setRequestPayload = createEvent<Field>();
export const resetRequestPayload = createEvent();

export const fxSubmitRequest = createEffect<RequestPayload, any>(); ///

export const $requestPayload = createStore<RequestPayload>({
  language: null,
  engine: null,
  input: null,
  additionalInfo: null
});

export const $language = $requestPayload.map(p => p.language);
export const $engine = $requestPayload.map(p => p.engine);
export const $input = $requestPayload.map(p => p.input);
export const $additionalInfo = $requestPayload.map(p => p.additionalInfo);

$requestPayload.on(setRequestPayload, (prevState, field) => {
  return {
    ...prevState,
    [field.name]: field.value
  };
});

fxSubmitRequest.use(async (payload: RequestPayload) => {
  const { language, input, additionalInfo } = payload;
  let res: string | null = "";
  try {
    res = await openaiApi.prompt(
      input || "",
      language || "",
      additionalInfo || ""
    );
    return res;
  } catch (e) {
    console.error(e);
    return res;
  }
});

$requestPayload.reset(resetRequestPayload);
