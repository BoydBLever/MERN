import React, { useState } from "react";
import { useNavigate } from "react-router";

const Form = (props) => {

    const [type, setType] = useState("people");
    const [id, setId] = useState(1);
    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();
        navigate(`/${type}/${id}`);
    }

    return (
        <form onSubmit={search}>
            <label>Search for </label>
            <select onChange={e => setType(e.target.value)} value={type}>
                <option>people</option>
                <option>planets</option>
            </select>
            <label> id: </label>
            <input type="number" min={1} onChange={e => setId(e.target.value)} value={id} />
            <input type="submit" value="Search" />
        </form>
    );
}

export default Form;