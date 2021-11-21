import Utils        from '../../services/Utils.js'
import {images}         from '../../data/images.js'
import Categories     from '../pages/Categories.js'
import  {pictureCategory}  from '../../js/getAllSetsOfCategory.js';
import  {authorCategory}  from '../../js/getAllSetsOfCategory.js';

let getImage = async (id) => {
    let image = document.querySelector('.question-picture');
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/OValya/image-data/master/img/${id}.jpg`;
    img.onload = ()=>{
        image.style.backgroundImage = `url('${img.src}')`;
    }
}

let getPicture = (id, wrong, type, box) =>{
    let img= new Image(); 
    let src = `https://raw.githubusercontent.com/OValya/image-data/master/img/${wrong}.jpg`;
    img.src = src;
    img.onload = ()=>{
       // let a = document.createElement('a');
       // a.href= `/#/author/${id}-${type}`;
       // 
       // a.classList.add(`${type}`)
        let div = document.createElement('div');
        div.style.order = `${Math.floor(Math.random() * 4)}`;
        div.classList.add('answer-picture', `${type}`, 'answer');
        div.style.backgroundImage = `url('${img.src}')`; 
       // div.appendChild(img);
      //  a.appendChild(div);
        box.append(div);
        //let image = document.createElement('img');
        //image.classList.add('image-card');
        //image.src = src;
    }
    
    
    //
    
   
    /*let view = `
                <a class = "ref " href="/#/author/${ +id + 1}" order = ${Math.floor(Math.random() * 4)}>
                  <div class="answer-picture">
                    <img class = "image-card" src=${src}  alt="">
                  </div>
                </a> ` */

    //console.log(view)
    //return view;
}
let getRightImage = async (id, box) => {
    getPicture(id, id, 'correct', box);
}

let getWrongImages = async (id, box) =>{
    let check = [];
    while(check.length<3){
        let num = Math.floor(Math.random() * 240);
        if (check.includes(num)!=true && images[num].author != images[id].author) {   
            getPicture(id, num, 'wrong', box);
            check.push(num);
        }
    }    
}

let getRightAnswer = (id, box) =>{
    let answer = images[id].author;
    let button = document.createElement('button');
    button.classList.add('button-answer', 'button', 'correct', 'answer');
    button.textContent=answer;
    box.append(button); 

    //console.log(answer.author);
}

let getWrongAnswers =(box) =>{
    for (let i = 0; i < 3; i++) {
        let button = document.createElement('button');
        button.classList.add('button-answer', 'button', 'wrong', 'answer');
        let num = Math.floor(Math.random() * 240);
        //console.log(num);
        button.textContent = images[num].author;  
        box.append(button);  
    }
}

function clickNext() {
    if(request.resource = 'picture') {
        let numberCategory = Math.ceil(request.id/12);

    }

};

let Question = {

    render : async () => {
        if(Utils.parseRequestURL().resource==="picture"){/*
            let fragment = new DocumentFragment();
            let entry = document.createElement('div');
            entry.classList.add('container', 'pageEntry');
            entry.id = "page_container"; 
         //   <div id="page_container" class="container pageEntry"></div>
            let page = document.createElement('div');
            page.classList.add('page-question');
            let timerBox = document.createElement('div');
            timerBox.classList.add('timer-container');
            let timer = document.createElement('span');
            timer.classList.add('timer');
            timerBox.appendChild(timer);
            page.innerHTML = `
                <p class = "title"> Кто автор картины "${images[Utils.parseRequestURL().id].name}"? </p>
                <div class="question-picture"></div>
                <div class="answers-container"></div>`
           // let title = document.querySelector('.title');
            page.insertAdjacentElement('beforebegin', timerBox);
            entry.appendChild(page);
            fragment.append(page);

            return fragment;*/



        return `
            <div class = "page-question">
                <div class = "header-page-question">
                    <input class="cancel-icon" type="button" value="X">
                    <div class="timer-box"> 
                        <span id="timer">Время: </span>
                    </div>
                </div>
                <p class = "title"> Кто автор картины "${images[Utils.parseRequestURL().id].name}"? </p>
                <div class="question-picture"></div>
                <div class="answers-container"></div>
            </div> 
            <div class = "page-answer"></div>`
        }
        if(Utils.parseRequestURL().resource==="author"){
            return /*html*/` 
            <div class = "page-question">
                <div class="timer-box"> 
                    <span id="timer"> Время: </span>
                </div>
                <p class = "title"> Какую картину написал ${images[Utils.parseRequestURL().id].author} ? </p>
                <div class="answers-container">
                </div>
            </div>
            <div class = "page-answer"></div>
             `
        }


    }
    , afterRender: async () => {
        //----------окно ответа------------//
        let form = document.querySelector('.page-answer');
        //form.style.display = 'none';
        form.style.opacity = '0';
        form.style.zIndex = '-3';
        let request = Utils.parseRequestURL();
        let answerBox = document.querySelector('.answers-container');
        form.innerHTML = `
        <div class ="page-content">
            <div class="answer-image">
                <img class = "image-card" src = 'https://raw.githubusercontent.com/OValya/image-data/master/img/${request.id}.jpg' >
                <img class = "image-icon">
            </div>
            <h2>${images[request.id].name}</h2>
            <p>${images[request.id].author}, ${images[request.id].year}</p>
            <button class ="next-button button" > Next </button>
        </div>`
        //---------Timer-----//
        let timerView = document.getElementById('timer');

        //!!! сделать проверку на localstorage!!
        let end =  Date.now() + localStorage.getItem('time') * 1000;
        let timer = setInterval( function() {
          let start = Date.now();
          let diff = end - start;
          if (diff >= 0) {
           let secs = Math.ceil((diff % (1000 * 60)) / 1000)+1;
           if(secs <= 5) {timerView.style.color = 'red'; timerView.style.fontSize = '24px';}
           timerView.innerHTML = `Время: ${("0"+secs).slice(-2)} секунд`;
          } else {
              timerView.style.color = 'red'; 
              timerView.style.fontSize = '24px';
              timerView.innerHTML = "Упс...Время вышло!";
              clearInterval(timer);
              showWrongAnswerPage();
             }
         
        }, 1000);

        
        if(request.resource==="picture"){
            await getImage(request.id)
            getRightAnswer(request.id, answerBox);        
            getWrongAnswers(answerBox);
        }
        if(request.resource==="author"){
           // await getImage(request.id) 
           await getWrongImages(request.id, answerBox);
           await getRightImage(request.id,  answerBox );
        }

        function showWrongAnswerPage(){
            let img = document.querySelector('.image-icon');
            img.src = '../../assets/svg/answer-page/wrong.svg'
            form.style.zIndex = '1';
            form.style.opacity = '1';

        }

        function showCorrectAnswerPage(){
            let img = document.querySelector('.image-icon');
            img.src = '../../assets/svg/answer-page/correct.svg'
            form.style.zIndex = '1';
            form.style.opacity = '1';
        }

        function changeScore(){
            if(request.resource === 'picture') {
                let numberCategory = Math.floor(request.id/10);
                let score = pictureCategory[numberCategory].getScore();
                pictureCategory[numberCategory].setScore(++score);
                console.log(pictureCategory[numberCategory].end())
            }

            if(request.resource === 'author') {
                let numberCategory = Math.floor((request.id-120)/10);
                let score = authorCategory[numberCategory].getScore();
                authorCategory[numberCategory].setScore(++score);
            }

        }

        answerBox.addEventListener('click', (e)=>{
               
                if((e.target.nodeName === 'BUTTON'|| e.target.nodeName === 'DIV') && e.target.classList.contains('answer')){
                    clearTimeout(timer);
                    if(e.target.classList.contains('correct')) { 
                        showCorrectAnswerPage(); changeScore();  
                    }else {
                        showWrongAnswerPage(); 
                    }
                }
        })


        let next = document.querySelector('.next-button');
        next.addEventListener('click', (e) => 
         {  
            if(request.resource === 'picture') {
                let numberCategory = Math.floor(request.id/10);
                let endCategory = pictureCategory[numberCategory].end();
                if(+request.id < endCategory ){
                  window.location.href = `/#/picture/${+request.id + 1}`;
                } else console.log('ваш результат:' +  pictureCategory[numberCategory].getScore() );
                
            }

            if(request.resource === 'author') {
                let numberCategory = Math.floor((request.id-120)/10);
                let endCategory = authorCategory[numberCategory].end();
                if(+request.id < endCategory ){
                  window.location.href = `/#/author/${+request.id + 1}`;
                } else console.log('ваш результат:' +  authorCategory[numberCategory].getScore() );
            }



        });



        
     //   let answer = document



    }
}
 //<button class="button-answer button">Answer1</button>
   //             <button class="button-answer button">Answer1</button>
     //           <button class="button-answer button">Answer1</button>
       //         <button class="button-answer button">Answer1</button>

export default Question;