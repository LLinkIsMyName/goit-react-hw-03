import { useId } from "react";
import style from "./SearchBox.module.css";
const SearchBox = ({ value, onChange }) => {
  const id = useId();
  return (
    <div className={style.container}>
      <input
        id={id}
        type="text"
        placeholder="Search contacts..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;