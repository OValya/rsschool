class Category {
    constructor(number, cover, score = 0, title = 'Set'  ){
        this.numberCategory = number;
        this.urlCover =  cover;
        this.score = score;
        this.title = title;
        this.view = 
        `<div class = "category">
            <div class="category-discription">
                <p class="number-category">${this.title} ${this.numberCategory}</p>
                <span class="correct-answers">${this.score}/10</span>
                
            </div>
            <div class="card-image">
                <img  src=${this.urlCover}  alt="">
            </div>
        </div>`
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