import { Log, GetDataByRID } from "@w3bstream/wasm-sdk";
export { alloc } from "@w3bstream/wasm-sdk";

import { validateMsg } from "./helpers";

export function start(rid: i32): i32 {
  Log("Hello World!");

  const deviceMessage = GetDataByRID(rid);
  Log("device message: " + deviceMessage);

  validateMsg(deviceMessage);

  return 0;
}
