import {createContext} from "react";

//we've used default value with context here
const ThemeContext = createContext(["light", () => {}]);

export default ThemeContext;