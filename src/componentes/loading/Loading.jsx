import "./style.css";
import { ClipLoader } from "react-spinners";
import { useTheme } from "../../contexts/ThemeContext";

//TODO: Loader

export function Loading({ text = "Carregando..." }) {
  const { darkMode } = useTheme();

  const spinnerColor = darkMode ? "hsl(0, 100%, 100%)" : "hsl(200, 15%, 8%)";

  return (
    <div className="spinnerLoading">
      <ClipLoader color={spinnerColor} size={60} />
      <p className="textLoading">{text}</p>
    </div>
  );
}
