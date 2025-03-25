import Counter from "./components/Counter";

const counter = new Counter("count-el");
const saveEl = document.getElementById("save-el");
document.getElementById("increment-btn").addEventListener("click", () => counter.increment());
document.getElementById("decrement-btn").addEventListener("click", () => counter.decrement());
document.getElementById("save-btn").addEventListener("click", () => counter.save(saveEl));
document.getElementById("reset-btn").addEventListener("click", () => counter.reset());


