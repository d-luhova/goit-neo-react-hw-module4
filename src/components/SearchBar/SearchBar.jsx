import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter text to search!");
      return;
    }

    onSubmit(query.trim());
    setQuery("");
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="query" 
          value={query}
          onChange={e => setQuery(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <button className={styles.button} type="submit">
          Search
        </button>
      </form>

      <Toaster position="top-right" />
    </header>
  );
}  
export default SearchBar