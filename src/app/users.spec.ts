import { Users } from "./users";

describe("Users", () => {
  it("should create an instance", () => {
    expect(new Users("", "", "", 0, 0, 0, new Date())).toBeTruthy();
  });
});
