import { Simulator } from "@w3bstream/w3bstream-http-client-simulator";

import dataGenerator from "./generator";
import config from "./config";

const { PUB_ID, PUB_TOKEN, W3BSTREAM_ENDPOINT, EVENT_TYPE, EVENT_ID } = config;

const simulator = new Simulator(
  PUB_ID,
  PUB_TOKEN,
  EVENT_TYPE,
  EVENT_ID,
  W3BSTREAM_ENDPOINT
);

simulator.init();

simulator.dataPointGenerator = dataGenerator;

async function start() {
  try {
    console.log("Starting simulator");
    simulator.powerOn(5);
  } catch (error) {
    console.log(error);
  }
}
start();
