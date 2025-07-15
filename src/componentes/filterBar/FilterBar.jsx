import Select from "react-select";
import { useTheme } from "../../contexts/ThemeContext";

//TODO: Dropdown
export function FilterBar({ region, onChangeRegion, options, className }) {
  const { darkMode } = useTheme();

  const customStyles = {
    control: (base) => ({
      ...base,
      border: "none",
      boxShadow: darkMode
        ? "0 2px 4px rgba(0, 0, 0, 0.3)"
        : "0 2px 8px rgba(0, 0, 0, 0.05)",
      backgroundColor: darkMode ? "hsl(209, 23%, 22%)" : "#fff",
      borderRadius: 4,
      color: darkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: darkMode ? "hsl(209, 23%, 22%)" : "#fff",
      color: darkMode ? "#fff" : "#000",
      boxShadow: darkMode
        ? "0 2px 4px rgba(0, 0, 0, 0.3)"
        : "0 2px 8px rgba(0, 0, 0, 0.05)",
      borderRadius: 4,
      marginTop: 4,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused
        ? darkMode
          ? "hsl(207, 26%, 17%)"
          : "#ddd"
        : darkMode
        ? "hsl(209, 23%, 22%)"
        : "#fff",
      color: darkMode ? "#fff" : "#000",
      cursor: "pointer",
    }),
    placeholder: (base) => ({
      ...base,
      color: darkMode ? "hsl(0, 0%, 70%)" : "hsl(0, 0%, 50%)",
    }),
    singleValue: (base) => ({
      ...base,
      color: darkMode ? "#fff" : "#000",
    }),
  };

  return (
    <Select
      options={options}
      value={options.find((opt) => opt.value === region)}
      onChange={(selected) => onChangeRegion(selected.value)}
      placeholder="Filtre por região"
      styles={customStyles}
      className={className}
    />
  );
}
