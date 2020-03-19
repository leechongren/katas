const capitalize = require("./capitalize");

describe("capitalize", () => {
  it("should return ['A','a'] when a is inputted", () => {
    expect(capitalize("a")).toEqual(["A", "a"]);
  });
  it("should return ['Ab','aB'] when ab is inputted", () => {
    expect(capitalize("ab")).toEqual(["Ab", "aB"]);
  });
  it("should return ['AbC','aBc'] when abc is inputted", () => {
    expect(capitalize("abc")).toEqual(["AbC", "aBc"]);
  });
  it("should return ['AbCdEf', 'aBcDeF'] when abcdef is inputted", () => {
    expect(capitalize("abcdef")).toEqual(["AbCdEf", "aBcDeF"]);
  });
  it("should return ['CoDeWaRs', 'cOdEwArS'] when codewars is inputted", () => {
    expect(capitalize("codewars")).toEqual(["CoDeWaRs", "cOdEwArS"]);
  });
});
