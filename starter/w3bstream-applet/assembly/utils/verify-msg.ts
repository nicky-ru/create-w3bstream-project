import { JSON } from "@w3bstream/wasm-sdk";

import { getPayloadValue, getField } from "./payload-parser";

export function verifyMessage(message: string): string {
  const msgToVerify = extractMsgToVerify(message);

  const msgHash = msgToHash(msgToVerify);
  return msgHash.toString();
}

function extractMsgToVerify(message: string): string {
  const payload = getPayloadValue(message);
  const data = getField<JSON.Obj>(payload, "data");

  if (data === null) {
    throw new Error("Invalid message");
  }

  return data.toString();
}

const msgToHash = (message: string): ArrayBuffer => {
  return String.UTF8.encode(message);
};
