import { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, hexColor }) => {
    const [alert, setAlert] = useState(false);
    const bgc = rgb.join(",");
    const hex = rgbToHex(...rgb);
    const hexValue = `#${hexColor}`;
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 3000);
        return () => clearTimeout(timeout);
    }, [alert]);

    return (
        <article
            className="color"
            style={{ backgroundColor: `rgb(${bgc})` }}
            onClick={() => {
                setAlert(true);
                navigator.clipboard.writeText(hex);
            }}
        >
            <p className="color-p percent-value">{weight}%</p>
            <p className="color-p color-value">{hexValue}</p>
            {alert && <p className="alert">copied to clipboard</p>}
        </article>
    );
};

export default SingleColor;
