class Category {
    constructor(number, cover, category, score = 0, title = 'Set'  ){
        this.numberCategory = number;
        this.urlCover =  cover; 
        this.category = category;
        this.score = score;
        this.title = title;
    }
    setScore(score) {
        this.score = score;
    } 
    getScore(){
        return this.score;
    }  

    renderCategory(type) {
        let numberQuetion;
        if(type==='picture'){numberQuetion=this.numberCategory*12}
        if(type==='author'){numberQuetion=120+this.numberCategory*12}
      
        let view = 
            `<div class = "category">
                <div class="category-discription">
                    <p class="number-category">${this.title} ${this.numberCategory}</p>
                    <span class="correct-answers">${this.score}/10</span>
                    
                </div>
                <a class = "ref-to-questions" href="/#/${this.category}/${numberQuetion}">
                  <div class="card-image-container">
                    <img class = "category-image-card" src=${this.urlCover}  alt="">
                  </div>
                </a>
            </div>`   
        return view;
        
       
    }
}


/*
let Category = {
    render: async () => {
        let numberCategory = 1;
        let urlPicture = 1;
        let view =  
        <div class = "category">
            <div class="category-discription">
                <p class="number-category">${numberCategory}</p>
                <span class="correct-answers">0</span>
                <span >/10</span>
            </div>
            <img class = "image-category-card" src="${urlPicture}" alt="">
        </div>
        `
        return view
    },
    after_render: async () => { }

}
*/
export default Category;