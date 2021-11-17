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
        console.log(num);
        button.textContent = images[num].author;  
        box.append(button);  
    }

}


let Question = {

    render : async () => {
        
        
        //getAnswer(request.id);
        return /*html*/` 
        <div class = "page-picture-quiz-question">
            <div class="timer"> timer </div>
            <p class = "title"> Who is the author of this picture? </p>
            <div class="question-picture"></div>
            <div class="answers-container">
                
               
            </div>
        </div>
        `
    }
    , after_render: async () => {
        let request = Utils.parseRequestURL()
        await getImage(request.id)
        let answerBox = document.querySelector('.answers-container');
        getRightAnswer(request.id, answerBox);
        getWrongAnswers(answerBox);
    }
}
 //<button class="button-answer button">Answer1</button>
   //             <button class="button-answer button">Answer1</button>
     //           <button class="button-answer button">Answer1</button>
       //         <button class="button-answer button">Answer1</button>

export default Question;