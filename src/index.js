import Counter from "./components/Counter";

const counter = new Counter("count-el");
const saveEl = document.getElementById("save-el");
document.getElementById("increment-btn").addEventListener("click", () => counter.increment());
document.getElementById("custom-btn").addEventListener("click", ()=> counter.customIncrement());
document.getElementById("save-btn").addEventListener("click", () => counter.save(saveEl));
document.getElementById("reset-btn").addEventListener("click", () => counter.reset());


