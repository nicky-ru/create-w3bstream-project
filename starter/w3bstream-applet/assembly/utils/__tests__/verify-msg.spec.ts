import { verifyMessage } from "../verify-msg";
import { DEVICE_MESSAGE } from "./fixtures/msg";

test("Message verification", () => {
  it("should not throw if message is not valid", () => {
    const message = verifyMessage(DEVICE_MESSAGE);
    log(message);
  });
});
