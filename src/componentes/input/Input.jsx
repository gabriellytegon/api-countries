import "./style.css";

//TODO: append prepend
// Alem do input criar novo componente que consome ele para
// a barra de pesquisa SearchBar

export function Input({ type, value, placeholder, ariaLabel, onChange }) {
  return (
    <input
      className="input"
      type={type}
      value={value}
      placeholder={placeholder}
      aria-label={ariaLabel}
      onChange={onChange}
    />
  );
}
