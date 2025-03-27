import { formatNumber } from "../components/utils/utils.js";

test("formats a number correctly", () => {
  expect(formatNumber(1000)).toBe("1,000");
  expect(formatNumber(0)).toBe("0");
});
