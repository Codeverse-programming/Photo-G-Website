document.addEventListener("DOMContentLoaded", () => {
    const shippingDetails = document.querySelector("#shipping-section")
    const orderSummary = document.querySelector("#order-summary-section")
    const confirmDetails = document.querySelector("#confirm-details")
    const paymentDetails = document.querySelector("#payment-details-section")
    
    document.querySelector("#linkShipping").addEventListener("click", e => {
        e.preventDefault();
        shippingDetails.classList.remove("form--hidden")
        orderSummary.classList.add("form--hidden")
        confirmDetails.classList.add("form--hidden")
        paymentDetails.classList.add("form--hidden")
    });
    
    document.querySelector("#linkSummary").addEventListener("click", e => {
        e.preventDefault();
        shippingDetails.classList.add("form--hidden")
        orderSummary.classList.remove("form--hidden")
        paymentDetails.classList.add("form--hidden")
    });
    
    document.querySelector("#linkConfirm").addEventListener("click", e => {
        e.preventDefault();
        shippingDetails.classList.add("form--hidden")
        orderSummary.classList.add("form--hidden")
        confirmDetails.classList.remove("form--hidden")
        paymentDetails.classList.add("form--hidden")
    });
    
    document.querySelector("#linkPayment").addEventListener("click", e => {
        e.preventDefault();
        shippingDetails.classList.add("form--hidden")
        orderSummary.classList.add("form--hidden")
        confirmDetails.classList.add("form--hidden")
        paymentDetails.classList.remove("form--hidden")
    });

    document.querySelector("#btn").addEventListener("click", e => {
        e.preventDefault();
        document.querySelector("#cardImage").style.border = "10px solid brown"
        document.querySelector("#cardImage").style.borderRadius = "25px"
        // document.querySelector(".text").textContent = "Unselect Photo"
    });
    
    document.querySelector(".text").addEventListener("click", e => {
        e.preventDefault();
        document.querySelector("#cardImage").style.border = "none"
        document.querySelector("#cardImage").style.borderRadius = "0"
    });
    
    document.querySelector("#button").addEventListener("click", e => {
        e.preventDefault();
        document.querySelector("#cardImages").style.border = "10px solid brown"
        document.querySelector("#cardImages").style.borderRadius = "25px"
        // document.querySelector(".text").textContent = "Unselect Photo"
    });
    
    document.querySelector("#button1").addEventListener("click", e => {
        e.preventDefault();
        document.querySelector("#cardImage1").style.border = "10px solid brown"
        document.querySelector("#cardImage1").style.borderRadius = "25px"
        // document.querySelector(".texted").textContent = "Unselect Photo"
    });
    
    document.querySelector("#button2").addEventListener("click", e => {
        e.preventDefault();
        document.querySelector("#cardImage2").style.border = "10px solid brown"
        document.querySelector("#cardImage2").style.borderRadius = "25px"
        // document.querySelector(".text2").textContent = "Unselect Photo"
    });
});

// document.addEventListener("DOMContentLoaded", () => {
// });

document.addEventListener("DOMContentLoaded", () => {
    const package1 = document.querySelector("#package1")
    const package2 = document.querySelector("#package2")

    document.querySelector("#linkPackage2").addEventListener("click", e => {
        e.preventDefault();
        package1.classList.add("form--hidden");
        package2.classList.remove("form--hidden");
    });

    document.querySelector("#linkPackage1").addEventListener("click", e => {
        e.preventDefault();
        package1.classList.remove("form--hidden");
        package2.classList.add("form--hidden");
    });
});