import { useState, useEffect } from 'react';
import Axios from 'axios'

export default function KtoO() {

    const [info, setInfo] = useState([{
        id: "",
        imageURL: "",
        mineralTitle: "",
        mineralDescription: ""
    }])

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
            setInfo(response.data)
        })
    }, [])

    return (
        <div><h1 className="site-heading-upper text-primary mb-3 text-center">K - O</h1>
            <div className="row m-auto">
                {info
                    .filter(val => {
                        return val.mineralTitle[0] === "K" ||
                            val.mineralTitle[0] === "L" ||
                            val.mineralTitle[0] === "M" ||
                            val.mineralTitle[0] === "N" ||
                            val.mineralTitle[0] === "O";
                    })
                    .sort((a, b) => a.mineralTitle > b.mineralTitle ? 1 : -1)
                    .map(val => {
                        const card = (
                            <div className=" col-md-4 col-6 img-container" key={val.id}>
                                <div className="thumbnail image">
                                    <img className="rounded w-100" src={val.imageURL} alt="rocks" />
                                    <div className="caption">
                                        <p className="span rounded p-2 lh-sm">
                                            <span>{val.mineralTitle}</span>
                                            <br />
                                            {val.mineralDescription}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                        return card;
                    })}
            </div>
        </div>
    )
}