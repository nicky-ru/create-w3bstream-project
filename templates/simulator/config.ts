import dotenv from "dotenv";
dotenv.config();

export default {
  PUB_ID: process.env.PUB_ID || "",
  PUB_TOKEN: process.env.PUB_TOKEN || "",
  EVENT_TYPE: process.env.EVENT_TYPE || "DEFAULT",
  EVENT_ID: process.env.EVENT_ID || "DEFAULT",
  W3BSTREAM_ENDPOINT: `http://104.198.23.192:8889/srv-applet-mgr/v0/event/${process.env.PROJECT_NAME}`,
};
