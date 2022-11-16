import data from "../data";

export default function Recent() {
    return (
        <div className="row m-auto">

            {data.map(info => {
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
    )
}