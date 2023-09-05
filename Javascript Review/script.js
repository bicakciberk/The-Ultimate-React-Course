const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBook() {
  return book;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*

//destrcucturing
const book = getBook(3);
const { title, author, genres, reviews, translations } = book;

//rest operator
const [primaryGenres, secondaryGenres, ...other] = genres;
primaryGenres;
secondaryGenres;

//spread operator
const newGenres = ["eklenen data", ...genres];
newGenres;

const updatedBooks = {
  ...book,
  //adding new property
  addedProperty: "added",

  //overwriting a property
  pages: 17,
};

updatedBooks;

// &&, || and ??
console.log(5 > 4 ? "correct answer" : "false answer"); // if else statament
console.log(5 > 4 && "correct answer"); // (working on true)
console.log(5 < 4 || "false answer"); // (working on false)

// ?? is nullish coalescing operator (null or undefined) example;
const userName = null;
const defaultUserName = "Mehmet";

console.log(userName ?? defaultUserName);

// Optional Chaining
function getTotalReviewCount() {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;

  return goodreads + librarything;
}
getTotalReviewCount();

console.log(getTotalReviewCount());

*/

// map()

// const newArr = [1, 2, 3, 4];
// const deneme = newArr.forEach((number) => {
//   console.log(number * 2)
// });

const newArr = [1, 2, 3, 4];
const deneme = newArr.map((number) => {
  console.log(number * 2);
});

// filter method

// filter method like map method. because filter method is creating new array
// but forEach isnt creating new array

const longBooks = data.filter((data) => {
  return data.pages > 500;
});

const hasMovieAdaptationLongBooks = longBooks.filter((book) => {
  return book.hasMovieAdaptation === true;
});

const adventureBooks = data.filter((data) => {
  return (data.genres = "adventure");
});

const adventureBooksTitle = adventureBooks.map((book) => {
  return book.title;
});

adventureBooksTitle;

// reduce method

const pagesAllBooks = data.reduce((acc, book) => {
  return acc + book.pages;
}, 0);
pagesAllBooks;

// sort method

const arr = [1, 2, 3, 4, 5];

const sortedArr = arr.sort().reverse();
sortedArr;

const titles = data.map((data) => {
  return data.title;
});

titles;

const sortTitles = titles.sort();
sortTitles;

// working with immutable arrays
// 1) adding book

const newBook = {
  id: 6,
  title: "beyaz zambaklar ülkesinde",
  author: "grigory petrov",
};

const booksAfterAdd = [...data, newBook];
booksAfterAdd;

// 2) deleting book
// i should use filter method in here
const booksAfterDeleted = booksAfterAdd.filter((book) => {
  return book.id !== 5;
});

booksAfterDeleted;

// 3) updating array
// i should use map method because i will procressing

const booksAfterUpdate = booksAfterDeleted.map((book) => {
  return book.id === 1
    ? {
        ...book,
        // changing or adding data
        pages: 1,
      }
    : book;
});
booksAfterUpdate;
