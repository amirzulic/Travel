import React, {createContext, useEffect, useState} from "react";
import '../footer/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
    const [theme, setTheme] = useState("bg-white");

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [])

    return(
        <div className={theme + " container-fluid"}>
            <hr className="border-1"/>
            <div>
                <h1 className="text-center">
                    <a href={"http://instagram.com"} target={"_blank"}>
                        <button className="btn btn-outline-warning">
                            FOLLOW US ON SOCIAL MEDIA
                        </button>
                    </a>
                </h1>
            </div>
            <br/>
            <div className="row text-center">
                <div className="col-4"></div>
                <div className="col">
                    <button className="btn btn-dark" onClick={() => {setTheme("bg-dark")}}>☽ DARK THEME</button>
                </div>
                <div className="col">
                    <button className="btn btn-light" onClick={() => {setTheme("bg-white")}}>🌞 LIGHT THEME</button>
                </div>
                <div className="col-4"></div>
            </div>
            <br/>
        </div>
    );
}

export default Footer;
