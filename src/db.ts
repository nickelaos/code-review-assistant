import { $requestPayload } from "./model/request.model";

export let dbObj: IDBDatabase;

export const initDB = () => {
  return new Promise((resolve, reject) => {
    const openRequest = indexedDB.open("CodeReviewAssistantDB", 1);

    openRequest.onupgradeneeded = function (event) {
      const db = openRequest.result;
      if (!db.objectStoreNames.contains("states")) {
        db.createObjectStore("states", { keyPath: "id" });
      }
    };

    openRequest.onsuccess = function () {
      dbObj = openRequest.result;
      // @ts-ignore
      window.dbObj = dbObj;
      resolve(true);
    };

    openRequest.onerror = function (event) {
      console.error("Error opening database:", openRequest.error);
      reject(openRequest.error);
    };
  });
};

export function createLocalState(responseData: any) {
  return new Promise(resolve => {
    let transaction = dbObj.transaction("states", "readwrite");
    let states = transaction.objectStore("states");

    const id = new Date().getTime();

    let state = {
      id,
      responseData,
      requestData: $requestPayload.getState()
    };

    const request = states.add(state);
    request.onsuccess = function () {
      resolve(id);
    };
  });
}

export function getLocalState(store = "states") {
  return new Promise((resolve, reject) => {
    let transaction = dbObj.transaction(store, "readonly");
    let states = transaction.objectStore(store);
    let request = states.getAll();

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

export function getLocalStateById(id: number) {
  return new Promise((resolve: (state: any) => void) => {
    let transaction = dbObj.transaction("states", "readonly");
    let states = transaction.objectStore("states");
    const request = states.get(id);
    request.onsuccess = function () {
      resolve(request.result as any);
    };
  });
}

export function removeLocalState(id: number) {
  return new Promise(() => {
    let transaction = dbObj.transaction("states", "readwrite");
    let states = transaction.objectStore("states");
    const request = states.delete(id);
    request.onsuccess = function () {
      // resolve();
    };
  });
}

export function removeOldLocalStates() {
  const id = new Date().getTime() - 30 * 60 * 1000;
  let transaction = dbObj.transaction("states", "readwrite");
  let states = transaction.objectStore("states");
  states.delete(IDBKeyRange.upperBound(id, true));
}
