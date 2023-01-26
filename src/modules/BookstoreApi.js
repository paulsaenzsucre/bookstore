const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net';
const APP_ID = 'fCIrmsVCcFcHm7LBMZC9';
const BOOK_ENDPOINT = `bookstoreApi/apps/${APP_ID}/books`;
const getBooksUrl = new URL(BOOK_ENDPOINT, BASE_URL);

const getBooks = async () => {
  const books = [];
  const bookList = await fetch(getBooksUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }

      return response;
    })
    .then((response) => response.json());
  const bookIds = Object.keys(bookList);

  bookIds.forEach((key) => {
    const { 0: bookInfo } = bookList[key];
    books.push({
      id: key,
      ...bookInfo,
    });
  });
  return books;
};

export {
  getBooks as default,
};
