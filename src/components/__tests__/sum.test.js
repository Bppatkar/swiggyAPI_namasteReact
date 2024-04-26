import { Sum } from "../Sum";

test("sum function should calculate the sum of to numbers", () => {
  const result = Sum(3, 7);
  expect(result).toBe(10);
});
