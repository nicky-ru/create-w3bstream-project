import { Log, GetDataByRID, JSON } from "@w3bstream/wasm-sdk";
import { getField, getPayloadValue } from "./utils/payload-parser";
import { validateField } from "./utils/message-validation";

export { alloc } from "@w3bstream/wasm-sdk";

// W3bstream handler
export function start(rid: i32): i32 {
  Log("Hello World!");

  const deviceMessage = GetDataByRID(rid);
  logDeviceMessage(deviceMessage);
  valdateMessage(deviceMessage);

  return 0;
}

function logDeviceMessage(message: string) {
  Log("device message: " + message);
}

function valdateMessage(message: string) {
  const payload = getPayloadValue(message);
  validateField<JSON.Str>(payload, "public_key");
  validateField<JSON.Str>(payload, "signature");

  const data = getField<JSON.Obj>(payload, "data");
  validateField<JSON.Integer>(data!, "timestamp");
  validateField<JSON.Float>(data!, "sensor_reading");
}
