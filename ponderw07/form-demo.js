const payment_input = document.getElementById('paymentMethod');
const credit_input = document.getElementById('creditCard');
const paypal_input = document.getElementById('paypal');

credit_input.classList.add("hide");
paypal_input.classList.add("hide");

payment_input.addEventListener("change", () => {
    switch (payment_input.value){
        case"creditCard":
            credit_input.classList.remove("hide");
            paypal_input.classList.add("hide");
            break;
        case "paypal":
            credit_input.classList.add("hide");
            paypal_input.classList.remove("hide");
            break;
        default:
            credit_input.classList.add("hide");
            paypal_input.classList.add("hide");
            break;
    }
});
