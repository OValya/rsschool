import Utils        from '../../services/Utils.js'
import {images}         from '../../data/images.js'
import Categories     from '../pages/Categories.js'

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
        let a = document.createElement('a');
        a.href= `/#/author/${ +id + 1}`;
        a.style.order = `${Math.floor(Math.random() * 4)}`;
        a.classList.add(`${type}`)
        let div = document.createElement('div');
        div.classList.add('answer-picture');
        div.style.backgroundImage = `url('${img.src}')`; 
       // div.appendChild(img);
        a.appendChild(div);
        box.append(a);
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
    button.classList.add('button-answer', 'button', 'right-answer');
    button.textContent=answer;
    box.append(button); 

    //console.log(answer.author);
}

let getWrongAnswers =(box) =>{
    for (let i = 0; i < 3; i++) {
        let button = document.createElement('button');
        button.classList.add('button-answer', 'button');
        let num = Math.floor(Math.random() * 240);
        //console.log(num);
        button.textContent = images[num].author;  
        box.append(button);  
    }
}


let Question = {

    render : async () => {
        if(Utils.parseRequestURL().resource==="picture"){
            return /*html*/` 
            <div class = "page-question">
                <div class="timer"> timer </div>
                <p class = "title"> Кто автор картины "${images[Utils.parseRequestURL().id].name}"? </p>
                <div class="question-picture"></div>
                <div class="answers-container">
                </div>
            </div> `
        }
        if(Utils.parseRequestURL().resource==="author"){
            return /*html*/` 
            <div class = "page-question">
                <div class="timer"> timer </div>
                <p class = "title"> Какую картину написал ${images[Utils.parseRequestURL().id].author} ? </p>
                <div class="answers-container">
                    
                
                </div>
            </div> `
        }


    }
    , after_render: async () => {let request = Utils.parseRequestURL()
        if(Utils.parseRequestURL().resource==="picture"){
            await getImage(request.id)
            let answerBox = document.querySelector('.answers-container');
            getRightAnswer(request.id, answerBox);        
            getWrongAnswers(answerBox);
        }
        if(Utils.parseRequestURL().resource==="author"){
           // await getImage(request.id)
            let answerBox = document.querySelector('.answers-container');
           await getRightImage(Utils.parseRequestURL().id,  answerBox );
           await getWrongImages(Utils.parseRequestURL().id, answerBox)
           // getRightImage(request.id, answerBox);        
            //getWrongAnswers(answerBox);
        }

    }
}
 //<button class="button-answer button">Answer1</button>
   //             <button class="button-answer button">Answer1</button>
     //           <button class="button-answer button">Answer1</button>
       //         <button class="button-answer button">Answer1</button>

export default Question;