const count_order = document.querySelector(".count");
const order_sum = document.querySelector(".sum");
const minus = document.querySelector("#minus_order");
const plus = document.querySelector("#plus_order");

console.dir(count_order);

minus.addEventListener("click", (e) => {
  count_order.innerHTML = count_order.innerHTML - 1;
});

plus.addEventListener("click", (e) => {
  count_order.innerHTML = count_order.innerHTML + 1;
});

order_sum.innerHTML = order_sum.innerHTML * count_order.innerHTML;
