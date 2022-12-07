import data from "../data";

export default function UtoZ() {
    return (
        <div><h1 className="site-heading-upper text-primary mb-3 text-center">Q - Z</h1>
            <div className="row m-auto">
                {data
                    .filter(data => {
                        return data.title[0] === "U" ||
                            data.title[0] === "V" ||
                            data.title[0] === "W" ||
                            data.title[0] === "X" ||
                            data.title[0] === "Y" ||
                            data.title[0] === "Z";
                    })
                    .sort((a, b) => a.title > b.title ? 1 : -1)
                    .map(info => {
                        const card = (
                            <div className=" col-md-4 col-6 img-container" key={info.id}>
                                <div className="thumbnail image">
                                    <a href={info.fullImg}>
                                        <img className="rounded w-100" src={info.img} alt="rocks" />
                                    </a>
                                    <div className="caption">
                                        <p className="span rounded p-2 lh-sm">
                                            <span>{info.title}</span>
                                            <br />
                                            {info.description}
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