
let numberOfQuestion = 3; 
rightans='2'

divBtn=document.querySelector('.main_buttons')

let nextBtn1 = document.createElement('button')
nextBtn1.innerText = 'Назад'
nextBtn1.setAttribute('onclick', `location.href='../javascript_quiz_app_${numberOfQuestion-1}/index.html'`)
divBtn.appendChild(nextBtn1)

nextbtn=document.createElement('button')
nextbtn.classList.add('blocked')
nextbtn.setAttribute('disabled','true')
nextbtn.id="nextbutton"
nextbtn.innerHTML="Далее"

reloadBtn = document.createElement('button')
reloadBtn.innerHTML="Повторить"
reloadBtn.classList.add('blocked')

divBtn.appendChild(reloadBtn)
reloadBtn.addEventListener('click', function(){
    window.location.reload();
})

ansbutton=document.createElement('button')
ansbutton.id='checkAns'

ansbutton.addEventListener('click',function(event)
{
    let rightcheck = false
    //Проверка на пустые чекбоксы
    for (let elem of document.querySelectorAll(".variant")) 
    {
        if(elem.firstElementChild.checked)
        {
            rightcheck=true
            break
        }
    }
    if (!rightcheck){
        return 0;
    }
    let counter=0 // Для получения порядкового номера
    for (let elem of document.querySelectorAll(".variant")) 
    {
        elem.firstElementChild.setAttribute('disabled','true')
        if(elem.firstElementChild.checked){
            
            if (counter == rightans){
                elem.classList.add('correct')
                elem.classList.remove('incorrect')
                localStorage.setItem('answer_' + numberOfQuestion, JSON.stringify({questionPlace: true}));
                let nxt = document.getElementById('nextbutton')
                nxt.removeAttribute('disabled')
                nxt.classList.remove('blocked')
                nxt.setAttribute('onclick',`location.href='../javascript_quiz_app_${numberOfQuestion+1}/index.html'`)
                event.target.setAttribute('disabled',true)
                event.target.classList.add('blocked')
                break
            }
            else
            {
                localStorage.setItem('answer_' + numberOfQuestion, JSON.stringify({questionPlace: false}));
                elem.classList.add('incorrect')
                rightcheck=false
                localStorage.setItem('answer_' + numberOfQuestion, JSON.stringify({questionPlace: false}));
                event.target.innerHTML="Повторить"
                event.target.setAttribute('onclick', "reloadPage()")
                event.target.setAttribute('disabled',true)
                event.target.classList.add('blocked')
                let nxt = document.getElementById('nextbutton')
                nxt.removeAttribute('disabled')
                nxt.classList.remove('blocked')
                reloadBtn.classList.remove('blocked')
                nxt.setAttribute('onclick',`location.href='../javascript_quiz_app_${numberOfQuestion+1}/index.html'`)

            }
        }
        else{  
            //Выделение правильных ответов, если они не выбраны
            if (counter == rightans){
                localStorage.setItem('answer_' + numberOfQuestion, JSON.stringify({questionPlace: false}));
                elem.classList.add('correct')
            }
        }
        event.target.innerHTML="Повторить"
        event.target.setAttribute('onclick', "reloadPage()")
        counter++
    }
})

function reloadPage(){
    window.location.reload();
}

ansbutton.innerHTML="Ответить";
divBtn.appendChild(ansbutton);
divBtn.appendChild(nextbtn);

