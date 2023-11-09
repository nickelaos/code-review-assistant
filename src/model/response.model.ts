import { createEvent, createStore } from "effector";

export const setResponse = createEvent<string>();
export const resetResponse = createEvent();

export const $response = createStore("");
$response.on(setResponse, (prevState, payload) => payload);

$response.reset(resetResponse);
