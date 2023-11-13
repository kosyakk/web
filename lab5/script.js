
const articles = [...document.getElementsByClassName('news-article')];

const newsArticlesContents = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam volutpat commodo sed egestas egestas. Dignissim sodales ut eu sem integer. Justo nec ultrices dui sapien eget mi proin sed libero.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec. Venenatis tellus in metus vulputate eu scelerisque felis. Elementum nibh tellus molestie nunc non blandit massa enim.',
];

const popupScreen = {
    element: document.getElementById('popup-screen'),
    heading: document.getElementById('popup-window-heading'),
    contents: document.getElementById('popup-window-contents'),
};

function closePopup() {
    popupScreen.element.style.visibility = 'hidden';
}

function openPopup(e) {
    const heading = e.target.parentElement.getElementsByTagName('h2')[0].innerText;
    const contents = e.target.parentElement.dataset.contents;
    
    popupScreen.heading.innerText = heading;
    popupScreen.contents.innerText = heading + ': ' + contents;
    popupScreen.element.style.visibility = 'visible';
}

for (const [i, a] of articles.entries()) {
    a.getElementsByTagName('button')[0].addEventListener('click', openPopup);
    a.setAttribute('data-contents', newsArticlesContents[i]);
}

popupScreen.element.addEventListener('click', closePopup);
