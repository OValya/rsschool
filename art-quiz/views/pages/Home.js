
let Home = {
    render : async () => {
       // let posts = await getPostsList()
        let view =  /*html*/`
        <div class="start-page">
        <div class="settings-button-container">
            <input class="settings-icon" type="button" value="">
           <!--<a class = "button-settings" href=""></a>-->
        </div>
            <img class = "logo" src="./assets/svg/start-page/logo_art-quiz.svg" alt="">
            <div class="button-container">
                <button class="category-artist-btn button">Artists quiz</button>
                <button class="category-pictures-btn button">Pictures quiz</button>
            </div>
        </div>
        `
        return view
    }
    , afterRender: async () => {
        let iconSettings = document.querySelector('.settings-icon');
        let categoryPictureQuiz = document.querySelector('.category-pictures-btn');
        let categoryArtistsQuiz = document.querySelector('.category-artist-btn');
        iconSettings.addEventListener('click', (e) => {
            window.location.href = "/#/settings";             
         });

        categoryPictureQuiz.addEventListener('click', (e) => {
            window.location.href = "/#/picture";
        });
        categoryArtistsQuiz.addEventListener('click', (e) => {
            window.location.href = "/#/author";
        });


    }

}

export default Home;