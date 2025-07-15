import "./style.css";

//TODO: append prepend

export function Button({ text, srcIcon, alt }) {
  return (
    <div className="button">
      {srcIcon && <img src={srcIcon} alt={alt} />}
      {text && <p>{text}</p>}
    </div>
  );
}
