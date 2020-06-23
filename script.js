var QuestionAnswer = [
    ["¿Cuál es la capital de Colombia?","Cali","Bogotá","Medellin","Manizales","Bogotá"],
    ["¿Cuántas regiones conforman la geografía colombiana?","5","4","6","2","6"],
    ["¿A qué ciudad se le conoce como 'La ciudad de la eterna primavera'?","Cali","San Andrés","Santa Marta", "Barranquilla","Barranquilla"],
    ["¿Cuál es la moneda colombiana?", "sol","sucre","bolivar","peso","peso"],
    ["¿Cuál cordillera atraviesa a Colombia","Alpes","Andes","Apalaches","Himalaya","Andes"]
]

var numberQ = 0;
var puntos = 0;
const start = document.getElementsByClassName("start")[0];
const next= document.getElementsByClassName("next")[0];
const info = document.getElementsByClassName("info")[0];
const question = document.getElementsByClassName("question")[0];
const answers = document.getElementsByClassName("answers")[0];
const questionQ = document.getElementsByClassName("questionQ")[0];
var buttonClicked ;



window.onload = function (){
    init();
}

function init () {
    start.addEventListener("click", quiz);  
}

function quiz (){
    
    if(numberQ >= QuestionAnswer.length){
        final();
        return;
    }

    if (numberQ === 0){
        start.classList.add("hide");
        info.classList.add("hide");
        answers.classList.remove("hide");
        question.classList.remove("hide");       
    }
    next.classList.add("hide");
    answers.innerHTML = "";
    questionQ.textContent = QuestionAnswer[numberQ][0];
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    let btn3 = document.createElement("button");
    let btn4 = document.createElement("button");
    let listBtn = [btn1,btn2,btn3,btn4];
    for (let i = 0; i < listBtn.length ; i++){
        listBtn[i].classList.add("answer");
        listBtn[i].textContent = QuestionAnswer[numberQ][i+1];
        answers.appendChild(listBtn[i]);
        listBtn[i].addEventListener("click",showNext);
    }

}   


function showNext (e){
    buttonClicked = e.target;
    next.classList.remove("hide");
    next.addEventListener("click", check); 
      
}

function check () {
    if(buttonClicked.textContent === QuestionAnswer[numberQ][5]){
        puntos += 1; 
    }
    numberQ += 1;
    quiz();
}

function final (){ 
    answers.innerHTML = "";
    question.classList.add("hide");
    info.classList.remove("hide"); 
    next.classList.add("hide");
    info.firstElementChild.textContent = `Obtuviste un total de ${puntos.toString()} entre 5 posibles puntos`;
    return;
}