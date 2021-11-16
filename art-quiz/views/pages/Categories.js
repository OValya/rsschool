import Utils        from '../../services/Utils.js'
import {images}         from '../../data/images.js'
import Category     from '../components/Category.js'

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

let Categories = {
    
    render : async () => {
        let questionsPicture = [];
        questionsPicture = images;
        questionsPicture.length = 120;


       // let request = Utils.parseRequestURL()
       // let post = await getPost(request.id)
        let category = '';
        let arrayOFCategory = [];
        for (let i = 0; i < questionsPicture.length/12; i++) {
            let item =  new Category(i, `https://raw.githubusercontent.com/OValya/image-data/master/img/${i * 10}.jpg`);
            arrayOFCategory.push(item);
            category += item.view + '\n'; 
        }
        let view = ` 
            <div class = "page-category">
             <div class="categories-button-container">
                <a class = "button-settings" href="/#/">
                    <img class = "category-logo" src="./assets/svg/start-page/logo_art-quiz.svg" alt="">
                </a>
                <input class="settings-icon" type="button" value="">
                <!--<a class = "button-settings" href=""></a>-->
              </div>
              <p class = "title">Picture Quiz. Let's go!</p>
              <div class = "categories">
              ${category}
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
    , after_render: async () => {
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