import { Component } from "react";
import { FaStar } from "react-icons/fa"; // Import the star icon from react-icons

class DestinationDataHotel extends Component {
    render() {
        // Generate the star rating based on a `stars` prop (default 5 if not provided)
        const stars = Array(this.props.stars || 5).fill(<FaStar color="gold" />);

        return (
            <div className={this.props.className}>
                <div className="des-text1">
                    <h2>{this.props.heading}</h2>
                    <p>
                        {this.props.text}
                        
                    </p>
                    <h4> <span className="star-rating">{stars}</span> </h4>
                </div>

                <div className="image2">
                    <img alt="img1" src={this.props.img1} />
                    <img alt="img2" src={this.props.img2} />
                </div>
            </div>
        );
    }
}

export default DestinationDataHotel;
