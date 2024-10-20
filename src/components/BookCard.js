export const createBookCard = (book) => {
  const card = document.createElement("div");
  card.className = "book-card";

  const coverImage = book.formats["image/jpeg"];

  const genres = book.subjects.length > 0 ? book.subjects.join(", ") : "N/A";

  card.innerHTML = `
        ${
          coverImage
            ? `<img src="${coverImage}" alt="${book.title}" class="book-cover" />`
            : `<div class="no-cover">Image not available</div>`
        }
        <div class="book-details">
        <p class="book-id"># ${book.id}</p>
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">Author: ${book.authors
              .map((author) => author.name)
              .join(", ")}</p>
            <p class="book-genre">Genre: ${genres}</p>
            
        </div>
    `;

  return card;
};
