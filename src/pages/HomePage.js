import { fetchBooks } from "../utils/api.js";
import { createBookCard } from "../components/BookCard.js";

const HomePage = () => {
  const bookListContainer = document.querySelector(".book-list");

  const loadBooks = async () => {
    const { results } = await fetchBooks();
    bookListContainer.innerHTML = "";
    console.log({ results });

    if (results.length === 0) {
      bookListContainer.innerHTML = "<p>No books found.</p>";
      return;
    }

    results.forEach((book) => {
      const bookCard = createBookCard(book);
      bookListContainer.appendChild(bookCard);
    });
  };

  loadBooks();
};

export default HomePage;
