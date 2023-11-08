import { createEvent, createStore } from "effector";
import { Field } from "../types/main.types";

export const setLoading = createEvent();
export const setRequest = createEvent<Field>();
export const resetRequest = createEvent();
export const setResponse = createEvent();

export const $loading = createStore(false);
$loading.on(setLoading, (prevState, payload) => payload);

export const $request = createStore({
  language: null,
  engine: null,
  input: null,
  additionalInfo: null
});

$request.on(setRequest, (prevState, field) => {
  return {
    ...prevState,
    [field.name]: field.value
  };
});

export const $response = createStore({});
$response.on(setResponse, (prevState, payload) => payload);

$request.reset(resetRequest);
