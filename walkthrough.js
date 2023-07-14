const pages = document.querySelectorAll('.page');
const button = document.querySelector('.btn');
let pageNum = 0;

button.onclick = () => {
    setInterval(displayPage, 500);
}

const displayPage = () => {
    pageNum = pageNum + 1;
    pages.forEach(page => {
        page.classList.add('hide');
    });
    pages[pageNum].classList.remove('hide');
    if (pageNum > 3) {
        clearInterval(1);
    }
}