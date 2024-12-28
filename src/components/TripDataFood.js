import "./TripFoodStyles.css";

function TripDataFood(props) {
    return (
        <div className="t-card1">
            <div className="t-image1">
                <img src={props.image} alt="img" />
            </div>
            
                <h4>{props.heading}</h4>
        
            <p>{props.text}</p>
        </div>
    );
}

export default TripDataFood
