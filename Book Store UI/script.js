const rows = document.querySelectorAll("tbody tr");
const totalValue = document.getElementById("totalValue");

rows.forEach(function (row) {
    const checkbox = row.querySelector(".purchase");
    const quantity = row.querySelector(".quantity");
    const value = row.querySelector(".value");
    const price = Number(row.dataset.price);
    const submit = row.querySelector(".submit")

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            quantity.disabled = false;
            value.textContent =
                "₹" + (price * quantity.value).toLocaleString("en-IN");
        } else {
            quantity.disabled = true;
            quantity.value = 0;
            value.textContent = "—";
        }
        calculateTotal();
    });


    quantity.addEventListener("input", function () {
        if (quantity.value < 1) {
            quantity.value = 1;
        }
        if (quantity.value > 5) {
            quantity.value = 5;
        }
        value.textContent =
            "₹" + (price * quantity.value).toLocaleString("en-IN");
        calculateTotal();
    });

    submit.addEventListener("")
});

function calculateTotal() {
    let total = 0;
    rows.forEach(function (row) {
        const checkbox = row.querySelector(".purchase");
        const quantity = row.querySelector(".quantity");
        const price = Number(row.dataset.price);
        if (checkbox.checked) {
            total += price * quantity.value;
        }
    });
    totalValue.textContent =
        "₹" + total.toLocaleString("en-IN");
}