import DictionarySearch from "./components/DictionarySearch";
import { FontFamProvider } from "./context/FontFamContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <FontFamProvider>
        <DictionarySearch />
      </FontFamProvider>
    </ThemeProvider>
  );
}

export default App;
