let ordernums = [];

document.addEventListener("DOMContentLoaded", function () {
  const addButtons = document.querySelectorAll(".add-btn");

  let itemCounter = document.getElementById("item-counter");
  addButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (button.textContent !== "Added") {
        itemCounter.textContent++;
        button.textContent = "Added";

        const ordernum = this.id;
        ordernums.push(ordernum);
        sessionStorage.setItem("ordernumsLS", JSON.stringify(ordernums));
      }
    });
  });
});
