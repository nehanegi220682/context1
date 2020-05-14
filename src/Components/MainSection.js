import React, {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const MainSection = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme]

    return(
        <div
         style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            textAlign: "center"
        }}>
            <h1>Context API theme toggler</h1>
            <p>React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p>
            <button
            style = {{
                backgroundColor: "#26ae60",
                padding: "10px 150px",
                fontSize: "20px",
                color:"#FFF",
                border: `${currentTheme.border}`

            }}
            >Click</button>
        </div>
    )
}

export default MainSection;