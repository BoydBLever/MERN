import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const PlanetComponent = (props) => {

    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}/?format=json`)
            .then(res => {
                console.log(res);
                setData(res.data);
            })
            .catch(err => {
                console.error(err);
                setData({ error: "These are not the droids you are looking for" })
            });
    }, [id]);

    return (
        data.error ?
            <h1>{data.error}</h1> :
            <div>
                <h1>{data.name}</h1>
                <p>
                    Terrain: {data.terrain}<br />
                    Climate: {data.climate}<br />
                    Surface Water: {data.surface_water ? "true" : "false"}<br />
                    Population: {data.population}
                </p>
            </div>
    );

}

export default PlanetComponent;