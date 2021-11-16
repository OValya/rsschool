import Utils        from '../../services/Utils.js'
import {images}         from '../../data/images.js'

let getImage = async (id) => {

    const img = new Image();
    img.src = `https://raw.githubusercontent.com/OValya/image-data/master/img/${id}.jpg`;
    img.onload = ()=>{
        let image = document.querySelector('.question-picture');
        image.style.backgroundImage = `url('${img.src}')`;
    }
  
}

let Question = {

    render : async () => {
        let request = Utils.parseRequestURL()
        let post = await getImage(request.id)
        
        return /*html*/` 
        <div class = "page-picture-quiz-question">
            <div class="timer"> timer </div>
            <p class = "title"> Who is the author of this picture? </p>
            <div class="question-picture"></div>
            <div class="answers-container">
                <button class="button-answer button">Answer1</button>
                <button class="button-answer button">Answer1</button>
                <button class="button-answer button">Answer1</button>
                <button class="button-answer button">Answer1</button>
            </div>
        </div>
        `
    }
    , after_render: async () => {
    }
}


export default Question;