import { formatNumber } from "./utils.js";
export default class Counter {
  constructor(elementId) {
    this.countEl = document.getElementById(elementId);
    this.count = 0;
  }
  increment() {
    this.count++;
    this.updateDisplay();
  }
  decrement(){
    if(this.count > 0){
      this.count--;
    }
    this.updateDisplay();
  }
  save(saveEl) {
    saveEl.textContent += formatNumber(this.count) + " - ";
    this.reset();
  }
  reset() {
    this.count = 0;
    this.updateDisplay();
  }

  updateDisplay() {
    this.countEl.textContent = formatNumber(this.count);
    this.countEl.style.color = this.count > 0 ? "darkgreen" : "black";
  }
}
