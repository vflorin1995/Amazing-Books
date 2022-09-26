/* eslint-disable max-classes-per-file */
const bookList = document.querySelector('.bookList');
const submit = document.querySelector('.submit');
const title = document.querySelector('.title');
const author = document.querySelector('.author');

class StandardBook {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class StandardBooks {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    const p = new StandardBook(title, author);
    this.books.push(p);
    return p;
  }

  get allBooks() {
    return this.books;
  }

  removeBook(index) {
    this.books.splice(index, 1);
  }
}

const initialBook = new StandardBooks();
initialBook.addBook('title1', 'author1');
initialBook.addBook('title2', 'author2');
initialBook.addBook('title3', 'author3');

function getData() {
  const localdata = localStorage.getItem('localdata');
  const dataStored = JSON.parse(localdata);
  if (dataStored) {
    initialBook.books = dataStored;
  }
}

getData();

function updateLocalStorage() {
  const localdata = JSON.stringify(initialBook.books);
  localStorage.setItem('localdata', localdata);
}

function displayBook() {
  bookList.innerText = '';
  initialBook.allBooks.forEach((standBook) => {
    const containerTAB = document.createElement('div');
    containerTAB.classList = 'flex space-btw align-center';

    const containerTitleAuthor = document.createElement('div');
    containerTitleAuthor.classList = 'flex align-center';

    const title = document.createElement('h3');
    title.innerText = standBook.title;

    const by = document.createElement('h3');
    by.innerText = 'by';

    const author = document.createElement('h3');
    author.innerText = standBook.author;

    containerTitleAuthor.append(title, by, author);

    const removeBtn = document.createElement('button');
    removeBtn.className = 'removebtn';
    removeBtn.innerText = 'Remove';

    containerTAB.append(containerTitleAuthor, removeBtn);

    const horizontalLine = document.createElement('hr');

    bookList.append(containerTAB, horizontalLine);
  });
  const removebtn = Array.from(document.querySelectorAll('.removebtn'));
  removebtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const btnIndex = removebtn.indexOf(btn);
      initialBook.removeBook(btnIndex);
      displayBook();
    });
  });
  updateLocalStorage();
}
displayBook();

submit.addEventListener('click', () => {
  const title1 = title.value;
  const author2 = author.value;
  initialBook.addBook(title1, author2);
  title.value = '';
  author.value = '';
  displayBook();
});

// adding stuff

const listBtn = document.querySelector('.listBtn');
const addBtn = document.querySelector('.addBtn');
const contactBtn = document.querySelector('.contactBtn');

const addBookSection = document.querySelector('.add-book');
const contactMeSection = document.querySelector('.contact-me');
const bookListSection = document.querySelector('.books');

addBtn.addEventListener('click', () => {
  addBookSection.classList.remove('displayNone');
  contactMeSection.classList.add('displayNone');
  bookListSection.classList.add('displayNone');
});

contactBtn.addEventListener('click', () => {
  addBookSection.classList.add('displayNone');
  contactMeSection.classList.remove('displayNone');
  bookListSection.classList.add('displayNone');
});

listBtn.addEventListener('click', () => {
  bookListSection.classList.remove('displayNone');
  contactMeSection.classList.add('displayNone');
  addBookSection.classList.add('displayNone');
});