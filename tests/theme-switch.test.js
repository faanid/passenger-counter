/**
 * @jest-environment jsdom
 */
import "../components/theme-switch.js";

const setCheckboxState = (checked) => {
  const checkbox = document.querySelector(".theme-switch__checkbox");
  checkbox.checked = checked;
  checkbox.dispatchEvent(new Event("change"));
};

describe("Theme Switch", () => {
  let themeToggle;

  beforeEach(() => {
    document.body.innerHTML = `
      <label class="theme-switch">
        <input type="checkbox" class="theme-switch__checkbox" />
      </label>
    `;

    themeToggle = document.querySelector(".theme-switch__checkbox");
    localStorage.clear();
  });

  it("should set theme to dark if localStorage is 'dark'", () => {
    localStorage.setItem("theme", "dark");

    document.documentElement.innerHTML = "";
    require("../components/theme-switch.js");

    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    expect(themeToggle.checked).toBe(true);
  });

  it("should set theme to light if localStorage is 'light'", () => {
    localStorage.setItem("theme", "light");

    document.documentElement.innerHTML = "";
    require("../components/theme-switch.js");

    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    expect(themeToggle.checked).toBe(false);
  });

  it("should switch to dark mode when checkbox is checked", () => {
    setCheckboxState(true);

    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("should switch to light mode when checkbox is unchecked", () => {
    setCheckboxState(false);

    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
  });
});
