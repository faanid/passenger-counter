/**
 * @jest-environment jsdom
 */
import Counter from "../components/Counter.js";
import { formatNumber } from "../components/utils/utils.js";

document.body.innerHTML = `
  <div id="counter">0</div>
  <div id="saveEl"></div>
`;

beforeEach(() => {
  countEl = document.getElementById("counter");
  saveEl = document.getElementById("saveEl");
  counter = new Counter("counter");
});

test("should have an initial value of 0", () => {
  expect(counter.count).toBe(0);
  expect(countEl.textContent).toBe(formatNumber(0));
});

test("increments the count", () => {
  counter.increment();
  expect(counter.count).toBe(1);
  expect(countEl.textContent).toBe(formatNumber(1));
});

test("decrements the count", () => {
  counter.increment();
  counter.decrement();
  expect(counter.count).toBe(0);
});

test("saves the count", () => {
  counter.increment();
  counter.save(saveEl);
  expect(saveEl.textContent).toContain(formatNumber(1) + " - ");
});

test("resets the counter", () => {
  counter.increment();
  counter.reset();
  expect(counter.count).toBe(0);
  expect(countEl.textContent).toBe(formatNumber(0));
});

test("changes text color based on count", () => {
  counter.increment();
  expect(countEl.style.color).toBe("darkgreen");

  counter.reset();
  expect(countEl.style.color).toBe("black");
});
