let plan=['Ознакомьтесь с правилами техники безопасности.','Познакомьтесь с операционной системой MS-DOS.','Укажите, какие операционные системы были разработаны на основе MS-DOS.','Познакомьтесь с операционной системой Windows.','Укажите, какие возможности дает пользователю использование операционной системы Windows:','Познакомьтесь с операционной системой PLATO.','Укажите, какая инновация была внедрена в систему PLATO и стала основой для разработки других компьютерных систем.','Отметьте, каким образом использовалась система PLATO на компьютере ILLIAC I.','Познакомьтесь с операционной системой Linux.','Укажите, что относится к дистрибутивам Linux.','Познакомьтесь с операционной системой KolibriOS.','Укажите, что означает то, что KolibriOS имеет открытый исходный код.','Познакомьтесь с операционной системой UNIX.','Укажите, что такое «Unix-подобные» операционные системы.']

let numberOfQuestionSum = 14;

//Добавление заголовка вопроса
let h=document.querySelector('.questions')

h.innerHTML="<div><p><span>"+ numberOfQuestion + ".</span> " + plan[numberOfQuestion-1] + "</p></div>"




let stepMarkerPlace = document.querySelector('.step_marker');
console.log("stepMarkerPlace")
for (let i = 0; i < numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button_blue.svg";
    stepMarkerPlace.appendChild(markers);
}

for (let i = 0; i < numberOfQuestionSum-numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button.svg";
    stepMarkerPlace.appendChild(markers);
}

let stepPlaceDescription = document.querySelector('.number_description');
stepPlaceDescription.innerHTML = numberOfQuestion + '/' + numberOfQuestionSum;


let img1 = document.createElement('img');
img1.src = './content/correct.svg'
let img2 = document.createElement('img');
img2.src = './content/incorrect.svg'




let openPopUpButton = document.querySelector('#open_popup_button')
let closePopUpButton = document.querySelector('#close_popup_button_1')
let popUpWindow = document.querySelector('#popup1')


openPopUpButton.addEventListener('click', function(){
    popUpWindow.classList.remove('close')
})

closePopUpButton.addEventListener('click', function(){
    popUpWindow.classList.add('close')
})

let openPopUpButton3 = document.querySelector('#open_popup_button_2')
if (openPopUpButton3 != null){
    openPopUpButton3.addEventListener('click', function(){
        popUpWindow3.classList.remove('close')
    })
}


//Добавление Описания в popUp
let planPopUp=document.querySelector('.popup_text')
i=1
for(let elem of plan){
   text=document.createElement('h3')
   text.innerHTML="<p><span>"+ i + ".</span> " + elem + "</p>"
   planPopUp.appendChild(text)
   i++
}
