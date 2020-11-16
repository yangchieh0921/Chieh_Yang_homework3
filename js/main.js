// import your packages here
import { fetchData } from "./modules/TheDataMiner.js";

(() => {
    // stub * just a place for non-component-specific stuff
    console.log('loaded');
    
    function popErrorBox(message) {
        alert("Something has gone horribly, horribly wrong");
    }

    function handleDataSet(data) {
        let favoriteSection = document.querySelector('.favorite-section'),
            favoriteTemplate = document.querySelector('#favorite-template').content;

        for (let favorite in data) {
            let currentFavorite = favoriteTemplate.cloneNode(true),
                currentFavoriteText = currentFavorite.querySelector('.favorite').children;

            currentFavoriteText[1].src = `images/${data[Favorite].picture}`;
            currentFavoriteText[2].textContent = data[Favorite].name;
            currentFavoriteText[3].textContent = data[Favorite].type;
            currentFavoriteText[4].textContent = data[Favorite].description;

            // add this new user to the view
        favoriteSection.appendChild(currenFavorite);
        }
    }

    function retrieveProjectInfo() {
        // test for an ID
        debugger;
        console.log(this.id);

    }

    //function renderPortfolioThumbnails(thumbs) {
        //let favoriteSection = document.querySelector('.favorite-section'),
        //favoriteTemplate = document.querySelector('#favorite-template').content;

        //for (let favorite in thumbs) {
            //let currentFavorite = userTemplate.cloneNode(true),
                //currentFavoriterText = currentUser.querySelector('.favorite').children;

            //currentFavoriteText[1].src = `images/${thumbs[favorite].picture}`;
            //currentFavoriteText[1].id = thumbs[favorite].id;
            // add this new user to the view
            //currentFavorite.addEventListener("click", retrieveProjectInfo);
            //favoriteSection.appendChild(currentFavorite);
        //}
   // }
        
   fetchData("./includes/index.php").then(data => handleDataSet(data)).catch(err => { popErrorWindow(err); });
})();