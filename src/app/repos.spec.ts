import { Repos } from "./repos";
import { Users } from "./users";

describe("Repos", () => {
  it("should create an instance", () => {
    expect(new Repos("")).toBeTruthy();
  });
});
