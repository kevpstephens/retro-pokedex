
# 🛠️ React Mini App Template – Dictionary App Example

Use this as a boilerplate for any small React app you want to build.

---

## 1. Setup Instructions

```bash
# In your terminal:
npm create vite@latest
# > Choose React, JavaScript

cd your-app-name
npm install
npm run dev
```

---

## 2. Clean Up Default Vite Files

```js
// 🔹 App.jsx:
// - Delete logo imports and sample counter state.
// - Remove all demo JSX (logos, button, "edit src/App.jsx").
// - Keep: function structure and import './App.css'.

// 🔹 index.html:
// - Keep everything. (Optionally update the <title>.)

// 🔹 main.jsx:
// - Leave as-is unless you rename App.jsx or index.css.

// 🔹 /src/assets/:
// - Safe to delete. Used for demo logos only.
```

---

## 3. File Structure

```
src/
├── components/
│   ├── SearchForm.jsx
│   └── DisplayWord.jsx
├── data/
│   └── dictionary.json
├── App.css
├── App.jsx
├── index.css
├── main.jsx
```

---

## 4. App.jsx

```jsx
import { useState } from "react";
import "./App.css";
import dictionary from "./data/dictionary.json";
import SearchForm from "./components/SearchForm";
import DisplayWord from "./components/DisplayWord";

function App() {
  const [currentWord, setCurrentWord] = useState("");
  const [currentDefinition, setCurrentDefinition] = useState("");
  const [searchInput, setSearchInput] = useState("");

  function handleSearch() {
    const word = searchInput.toUpperCase();
    const definition = dictionary[word];
    setCurrentWord(word);
    setCurrentDefinition(definition || `❌Word not found ❌`);
  }

  return (
    <div className="app-container">
      <h1>Example - Dictionary App Template</h1>
      <SearchForm
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
      />
      <DisplayWord word={currentWord} definition={currentDefinition} />
    </div>
  );
}

export default App;
```

---

## 5. SearchForm.jsx

```jsx
function SearchForm({ searchInput, setSearchInput, handleSearch }) {
  function handleSubmit(event) {
    event.preventDefault();
    handleSearch();
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>Search: </label>
        <input
          id="search-input"
          name="search"
          type="text"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default SearchForm;
```

---

## 6. DisplayWord.jsx

```jsx
function DisplayWord({ word, definition }) {
  if (!word) return null;

  return (
    <section>
      <h2>{word}:</h2>
      <p>{definition}</p>
    </section>
  );
}

export default DisplayWord;
```

---

## 7. index.css (Root Styling)

```css
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

🧠 `:root` is the `<html>` element — useful for setting global styles.

🧠 `#root` is the React mount point — great for layout centering and width control.

---

## 8. App.css (Main Styling)

```css
/* ============================================================
   RESET + BASE STYLES
============================================================ */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: sans-serif;
  background-color: #f9f9f9;
  color: #333;
  line-height: 1.6;
  padding: 2rem;
}

/* ============================================================
   LAYOUT CONTAINERS
============================================================ */
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.app-container {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* ============================================================
   TYPOGRAPHY
============================================================ */
h1,
h2,
h3 {
  margin-bottom: 0rem;
}

/* ============================================================
   STRUCTURAL ELEMENTS
============================================================ */
section,
div,
article,
form {
  background-color: rgb(153, 159, 201);
  padding: 1rem;
  border-radius: 25px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

/* ============================================================
   FORMS + INPUTS
============================================================ */
input,
textarea,
select,
button {
  font: inherit;
  padding: 0.5rem;
  margin-top: 0rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
}

form input {
  width: 40%;
  font-size: 1rem;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  width: 5rem;
}

button:hover {
  background-color: #0056b3;
}

#search-and-submit {
  margin-top: 0rem;
  padding: 0rem;
}
