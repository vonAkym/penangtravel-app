import "./TripStyles.css";

function TripDataHotspot(props) {
    return (
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="img" />
            </div>
            {props.link ? (
                <h4>
                    <a href={props.link} target="_blank" rel="noopener noreferrer">
                        {props.heading}
                    </a>
                </h4>
            ) : (
                <h4>{props.heading}</h4>
            )}
            <p>{props.text}</p>
        </div>
    );
}

export default TripDataHotspot;
