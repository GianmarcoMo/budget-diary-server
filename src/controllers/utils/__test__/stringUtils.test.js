const { isEmpty } = require("../stringUtils");

describe("isEmpty", () => {
  describe("the variable contains a string value", () => {
    it("should return false", () => {
      const stringMock = "prova";
      const isStringEmpty = isEmpty(stringMock);

      expect(isStringEmpty).toBeFalsy();
    });
  });
  describe("the variable is empty", () => {
    it("should return true", () => {
      const stringMock = "";
      const isStringEmpty = isEmpty(stringMock);

      expect(isStringEmpty).toBeTruthy();
    });
  });
  describe("the variable is udefined", () => {
    it("should return true", () => {
      const stringMock = undefined;
      const isStringEmpty = isEmpty(stringMock);

      expect(isStringEmpty).toBeFalsy();
    });
  });
});
