import React, { useState } from "react";
import Todo from "./Deletebtn";
import "./Todo.css";

const Todos = () => {
    const [a, b] = useState();
    const [c, d] = useState([]);

    const Abc = (event) => {
        b(event.target.value);
    };
    const Submit = () => {
        d((xyz) => {
            return [...xyz, a];
        });
        b("");
    };

    const Del = (id) => {
        d((xyz) => {
            return xyz.filter((arr, index) => {
                return index !== id;
            });
        });
    };

    return (
        <>
            <div className="main">
                <div className="center_div">
                    <h1 className="he">ToDo List</h1>
                    <input
                        className="inp"
                        type="text"
                        placeholder="Add items"
                        value={a}
                        onChange={Abc}
                    />
                    <button onClick={Submit}>+</button>
                    <ol>
                        {c.map((xyz, index) => {
                            return <Todo key={index} id={index} abc={xyz} Delete={Del} />;
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
};

export default Todos;
