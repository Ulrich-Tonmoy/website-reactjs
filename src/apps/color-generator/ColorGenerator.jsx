import { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";
import "./colorGenerator.css";

function ColorGenerator() {
    const [color, setColor] = useState("");
    const [detail, setDetail] = useState(10);
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values("#25f162").all(detail));

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setError(false);
            let colors = new Values(color).all(detail);
            setList(colors);
        } catch (error) {
            setError(true);
        }
    };

    return (
        <>
            <div className="color-container">
                <section className="content">
                    <h3 className="color-h3">color generator</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={color}
                            onChange={(e) => {
                                setColor(e.target.value);
                            }}
                            placeholder="#25f162"
                            className={`${error ? "input error" : "input"}`}
                        />
                        <input
                            type="number"
                            // value={detail}
                            onChange={(e) => {
                                setDetail(e.target.value);
                            }}
                            placeholder="working on this"
                            className="input"
                        />
                        <button className="submenu-btn" type="submit">
                            Submit
                        </button>
                    </form>
                </section>
                <section className="colors">
                    {list.map((color, index) => {
                        return <SingleColor key={index} {...color} hexColor={color.hex} />;
                    })}
                </section>
            </div>
        </>
    );
}

export default ColorGenerator;
