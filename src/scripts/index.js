import "../styles/main.scss";
import "babel-polyfill"

const modal = document.getElementById('myModal');
const closeModal = document.querySelector('.close');
const button = document.getElementById("continue");

const modalFunction = async () => {
    // create the promise. whatever you pass inside the resolve method is going to get filtered throw the next steps
    let promiseOfModal = new Promise(function (resolve) {
        window.setTimeout(function () {
            resolve(modal);
        }, 60*1000);
    });

    let modalMessage = await promiseOfModal; // promiseOfModal is modal, which we passed as an argument in the resolve method. And we store it in a new variable (modalMessage)
    modalMessage.style.display = "block";
};

// we call the function
modalFunction();

// event listener to close the modal
closeModal.addEventListener('click', () => modal.style.display = 'none');


async function popUpFunction() {
    // create a promise
    let buttonPromise = new Promise(function (resolve, reject) {
        setTimeout(() => {  
            resolve("Please subscribe"); // we pass this string
        }, 200)
    });

    button.style.backgroundColor = "blue";
    button.style.color = "white";
    let popUp = await buttonPromise;
    alert(popUp);
}

button.addEventListener("click", popUpFunction); // we call the function with a callback inside the event listener. When we click, it will run