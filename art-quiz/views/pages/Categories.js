import Utils        from '../../services/Utils.js'
import {images}         from '../../data/images.js'
import Category     from '../components/Category.js'
import  {pictureCategory}  from '../../js/getAllSetsOfCategory.js';
import  {authorCategory}  from '../../js/getAllSetsOfCategory.js';

/*let getPost = async (id) => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`https://5bb634f6695f8d001496c082.mockapi.io/api/posts/` + id, options)
       const json = await response.json();
       // console.log(json)
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}
*/
/*
let getQuestions = (type) => {
       
       //  = 
        if(type==='picture'){ 
            let pictureQuestions = images.slice(0,120);
            console.log(pictureQuestions);
            return pictureQuestions;
        } else if(type==='author'){let authorQuestions = images.slice(120, 240);console.log(authorQuestions);return authorQuestions}
        else(console.log('ошибка!!!'))
      
}*/

let getAllSetsOfCategory = (type) => {
    
    let startImage;
    let arrayOFCategory = [];
    if(type==='picture'){startImage = 0; }
    if(type==='author') {startImage = 120 }  
    for (let i = 0; i < 12; i++) {
        let item =  new Category(i, `https://raw.githubusercontent.com/OValya/image-data/master/img/${i *10 + startImage}.jpg`, type);
        arrayOFCategory.push(item);
        
       // category += item.renderCategory(type) + '\n'; 
    }
    return arrayOFCategory;
}


let Categories = {
    render : async () => {   
        let allSets =[];
        let typeCategory = Utils.parseRequestURL().resource; //author || picture
        if(typeCategory==='picture'){
             allSets = pictureCategory;
             console.log(allSets);

        } else allSets = authorCategory;
        
        let allSetsView = allSets.reduce((view, current) => view + current.renderCategory(typeCategory) + '\n', '');
        
       /* let category = '';
        let arrayOFCategory = [];
        let typeCategory = Utils.parseRequestURL().resource;
        let startImage;
        if(typeCategory==='picture'){startImage = 0; }
        if(typeCategory==='author') {startImage = 120 }  
        for (let i = 0; i < 12; i++) {
            
            let item =  new Category(i, `https://raw.githubusercontent.com/OValya/image-data/master/img/${i *10 + startImage}.jpg`, typeCategory);
            arrayOFCategory.push(item);
            console.log(item);
            category += item.renderCategory(typeCategory) + '\n'; 
        }*/
        

        let view = ` 
            <div class = "page-category">
             <div class="categories-button-container">
                <a class = "button-settings" href="/#/">
                    <img class = "category-logo" src="./assets/svg/start-page/logo_art-quiz.svg" alt="">
                </a>
               <!-- <a href ="#" ><h2 class = "score-icon">Score</h2></a>-->
                <input class="score-icon" type="button" value="Score">
                <input class="settings-icon" type="button" value="">

                <!--<a class = "button-settings" href=""></a>-->
              </div>
              <p class = "title">${typeCategory.toUpperCase()} QUIZ. Let's go!</p>
              <div class = "categories">
              ${allSetsView}
              </div>
            </div>
            `
        return view
            
           /* <section class="section">
                <h1> Post Id : ${post.id}</h1>
                <p> Post Title : ${post.title} </p>
                <p> Post Content : ${post.content} </p>
                <p> Post Author : ${post.name} </p>
            </section>
        `*/
    }
    , afterRender: async () => {
        
       /* let container = document.querySelector('.categories');
        container.addEventListener('click', (e)=>{
            if(e.target === 'img'){
                console.log()
            }
        }
        )*/

    }
}

export default Categories;