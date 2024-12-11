import { useEffect, useState } from "react";
import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch?";
const API_KEY = "5721f321a03a439b93b2e02373b2fcc0";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("");
  // Syntax of the useEffect hook
  useEffect(() => {
    async function fetchfood() {
      const res = await fetch(`${URL}?query =${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchfood();
  }, [query]);
  return (
    <div className= {styles.searchContainer}>
      <input
      className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
