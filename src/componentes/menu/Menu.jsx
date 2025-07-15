import { useTheme } from "../../contexts/ThemeContext";
import "./style.css";

//TODO: Header, usar <Button/>

export function Menu() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="menu">
      <h1>Onde no mundo?</h1>
      <button
        className="darkModeToggle"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {darkMode ? (
          <img src="/assets/lightModeIcon.svg" alt="Ícone de modo claro" />
        ) : (
          <img src="/assets/darkModeIcon.svg" alt="Ícone de modo escuro" />
        )}

        <p>{darkMode ? "Light Mode" : "Dark Mode"}</p>
      </button>
    </div>
  );
}
