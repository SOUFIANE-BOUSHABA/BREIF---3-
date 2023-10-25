const desc = document.getElementById("description2");
const info = document.getElementById("additional-info");
const rev = document.getElementById("reviews");


const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', function () {
        for (let j = 0; j < answers.length; j++) 
        if(answers[j]!=answers[i])
        answers[j].style.display = 'none';

        if (answers[i].style.display === 'block') {
            answers[i].style.display = 'none';
        } else {
            answers[i].style.display = 'block';
        }
    });
}




const header = document.querySelector(".header-link");

function affiche(){
    if (header.className== "header-link") {
        header.classList.add("test-headr-link");
    } else if(header.className== "header-link test-headr-link"){
        header.classList.remove("test-headr-link");
        
    }
}

const slid = document.querySelector(".hero-container-slide");
var images = ["heroimg1.png", "heroimg2.png"];
var index = 0;

function slide() {
    index++;
    if (index === images.length) {
        index = 0;
    }
    slid.style.backgroundImage = "url(images/" + images[index] + ")";
}

setInterval(slide, 1000);


// page panier 





// page details



function description(){
    desc.style.display = "block";
    info.style.display = "none";
    rev.style.display = "none";
    
}
function informat(){
    info.style.display = "flex";
    rev.style.display = "none";
    desc.style.display = "none";
}
function review(){
    rev.style.display = "flex";
    info.style.display = "none";
    desc.style.display = "none";
}


// page panier







//  addd  cart in details

function addToCart() {
    const pName = document.querySelector(".pname").textContent;
    const pPrice = document.querySelector(".pprice").textContent;
    const pquantity = parseInt(document.getElementById("quantity").value, 10);

    const product = {
        name: pName,
        price: pPrice,
        quantity: pquantity
    };

    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(product);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));



    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
        })

        Toast.fire({
        icon: 'success',
        title: 'product aded to the cart successfully'
        })

        
        TotalPanier();
}

//  remove from  cart in details
function removeProduct(i) {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.splice(i, 1);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));


            const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
            })

            Toast.fire({
            icon: 'success',
            title: 'product deleted successfully'
            })
    afichage();
    TotalPanier();
    updateTotal();
}

//  toltal in header
function TotalPanier() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartCountElement = document.getElementById("cart-counttt"); 

    if (cartCountElement) {
        const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        cartCountElement.textContent = itemCount.toString();
        console.log(itemCount);
    }
}
TotalPanier();





// regex

function validateForm() {
    var name = document.getElementById("name").value;
    var cardNumber = document.getElementById("cardNumber").value;
    var cvv = document.getElementById("cvv").value;
    var expirationYear = document.getElementById("expirationYear").value;
    var expirationDay = document.getElementById("expirationDay").value;

    if (!/^[a-zA-Z ]+$/.test(name)) {
        alert(" enter a valid name ");
        return;
    }
    if (!/^\d{16}$/.test(cardNumber)) {
        alert(" enter a valid  card number");
        return;
    }
    if (!/^\d{3,4}$/.test(cvv)) {
        alert(" enter a valid CVV ");
        return;
    }
    if (!/^\d{4}$/.test(expirationYear)) {
        alert(" enter a valid expiration year");
        return;
    }
    if (!/^(0?[1-9]|[12][0-9]|3[01])$/.test(expirationDay)) {
        alert(" enter a valid expiration day (1-31)");
        return;
    }
    alert("Checkout successful!");
}
document.getElementById("checkoutLink").addEventListener("click", function() {
    validateForm();
  });








//   faq
