import { Users } from "./users";

describe("Users", () => {
  it("should create an instance", () => {
    expect(new Users("", "", "", 0)).toBeTruthy();
  });
});
