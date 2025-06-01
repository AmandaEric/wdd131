// blog.js (or script.js)

const articles = [
    {
        id: 1,
        title: "Septimus Heap Book One: Magyk",
        date: "July 5, 2022",
        description: "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
        imgAlt: "Book cover for Septimus Heap 1",
        ages: "10-14",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐"
    },
    {
        id: 2,
        title: "Magnus Chase Book One: Sword of Summer",
        date: "December 12, 2021",
        description: "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
        imgSrc: "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
        imgAlt: "Book cover for Magnus Chase 1",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐"
    },
    {
        id: 3,
        title: "Belgariad Book One: Pawn of Prophecy",
        date: "Feb 12, 2022",
        description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
        imgAlt: "Book cover for Pawn of Prophecy",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    }, // Don't forget this comma!
    {
        id: 4,
        title: "The Hobbit",
        date: "September 21, 1937",
        description: "Bilbo Baggins, a hobbit, is swept into an epic quest to reclaim a stolen treasure from the dragon Smaug.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_F_J_Catherine_Barnes.jpg",
        imgAlt: "Book cover for The Hobbit",
        ages: "9+",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    }
];


function createArticleElement(articleData) {
    const newArticle = document.createElement('section');
    newArticle.classList.add('book'); 

    const articleContent = `
        <div class="book-info">
            <div class="date">${articleData.date}</div>
            <div>${articleData.ages}</div>
            <div>${articleData.genre}</div>
            <div>${articleData.stars}</div>
        </div>

        <div class="book-main">
            <h2>${articleData.title}</h2>
            <img src="${articleData.imgSrc}" alt="${articleData.imgAlt}" />
            <p>${articleData.description} <a href="#">Read More...</a></p>
        </div>
    `;

    newArticle.innerHTML = articleContent;
    return newArticle;
}


function displayArticles(articlesList, outputElement) {
    articlesList.forEach(item => {
        const articleElement = createArticleElement(item);
        outputElement.append(articleElement);
    });
}


const contentContainer = document.querySelector('.content');

document.addEventListener('DOMContentLoaded', () => {
    displayArticles(articles, contentContainer);
});