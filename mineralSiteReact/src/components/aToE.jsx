import data from "../data";

export default function AtoE() {
    return (
        <div>
            <h1 className="site-heading-upper text-primary mb-3 text-center">A - E</h1>
            <div className="row m-auto">
                {data
                    .filter(data => {
                        return data.title[0] === "A" ||
                            data.title[0] === "B" ||
                            data.title[0] === "C" ||
                            data.title[0] === "D" ||
                            data.title[0] === "E";
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