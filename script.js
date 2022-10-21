let spanC = document.querySelector(".badge-c");
let yourConnections = spanC.textContent;
let spanR = document.querySelector(".badge-r");
let connectionRequestsNumber = spanR.textContent;
let accepts = document.querySelectorAll(".icon-a");
let rejects = document.querySelectorAll(".icon-r");
let editProfile = document.querySelector(".edit-profile");
let profileName = document.querySelector(".profile-name");


function changeName(){
    let newName =  window.prompt();
    profileName.innerText = newName;
}

function acceptRequest(elemento) {
    let padre = elemento.parentNode;
    let hermano = padre.previousElementSibling;
    let abuelo = padre.parentNode;
    let abuelolvl2=abuelo.parentNode;
    let abuelolvl3=abuelolvl2.parentNode;
    let tioAbuelolvl3 = abuelolvl3.nextElementSibling;
    let tioAbuelolvl2 = tioAbuelolvl3.firstElementChild;
    let tio = tioAbuelolvl2.nextElementSibling;
    let addLista = document.createElement('li')
    
    connectionRequestsNumber --;
    yourConnections ++;
    spanR.innerText = connectionRequestsNumber;
    spanC.innerText = yourConnections;
    abuelo.remove();
    tio.appendChild(addLista);
    addLista.appendChild(hermano);
}

function rejectRequest(elemento) {
    console.log(elemento);
    let padre = elemento.parentNode;
    let abuelo = padre.parentNode;
    connectionRequestsNumber --;
    spanR.innerText = connectionRequestsNumber;
    abuelo.remove();
}

editProfile.addEventListener("click", changeName);

for (let i = 0; i < accepts.length; i++){
    accepts[i].addEventListener("click", function() {
        acceptRequest(accepts[i])
    });
};

for (let i = 0; i < rejects.length; i++){
    rejects[i].addEventListener("click", function() {
        rejectRequest(rejects[i])
    });
};
