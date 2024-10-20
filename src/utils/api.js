const API_URL = "https://gutendex.com/books";

export const fetchBooks = async (page = 1, titleFilter = "") => {
  try {
    const response = await fetch(
      `${API_URL}?page=${page}&search=${titleFilter}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch books:", error);
    return { results: [], total_pages: 0 };
  }
};
