import { useContext } from "react";
import '../../css/bootstrap.css';
import { useTheme } from "../../hooks/useTheme";

export function ThemedButton() {
    const {theme} = useTheme();
    return <button className="m-5">
        {theme}
      </button>
  }

  {/* I am styled by theme context */}