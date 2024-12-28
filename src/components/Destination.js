import image from "../components/img/padangkota1.jpg";
import image1 from "../components/img/padangkota2.jpg";
import image2 from "../components/img/pasembur.jpg";
import image3 from "../components/img/pasembur2.jpg";
import image4 from "../components/img/hotel1.jpg";
import image5 from "../components/img/hotel2.jpg";
import image6 from "../components/img/usm1.jpeg";
import image7 from "../components/img/usm2.jpeg";
import image8 from "../components/img/bridges1.jpeg";
import image9 from "../components/img/bridges2.jpeg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
    return (
        <div className="destination">
            <h1>Love at First Sight!</h1>
            <h3>Penang: Where Every Moment is a Discovery.</h3>

            <DestinationData
                className="first-des"
                heading="1. Padang Kota"
                text="Padang Kota, or Esplanade Penang, is a historic and cultural landmark in George Town, surrounded by colonial-era buildings like Fort Cornwallis, the Town Hall, and City Hall. The fort, built by Captain Francis Light in the 18th century, is Malaysia's largest. The area is known for its vibrant food scene, featuring iconic dishes like laksa and char kway teow, and its waterfront promenade offers scenic views. Padang Kota also hosts cultural festivals and local events, making it a popular spot for both locals and tourists."
                img1={image}
                img2={image1}
            />

            <DestinationData
                className="first-des"
                heading="2. Pasembur"
                text="Pasembur is a popular Malaysian dish from Penang, known for its vibrant flavors and variety of ingredients. It features shredded cucumber, turnip, bean sprouts, crispy fritters, tofu, boiled eggs, and seafood, all topped with a sweet and spicy peanut sauce. Often enjoyed at hawker stalls and food courts, Pasembur is a delicious representation of Malaysia's multicultural culinary heritage, offering a mix of textures and flavors that cater to diverse tastes."
                img1={image2}
                img2={image3} 
            />

            <DestinationData
                className="first-des"
                heading="3. Eastern and Oriental Hotel  "
                text="
The Eastern & Oriental Hotel (E&O) in Penang, established in 1885, is a historic luxury hotel blending colonial charm with modern sophistication. Located in George Town, a UNESCO World Heritage Site, it features elegant architecture, luxurious rooms with sea or city views, and renowned dining, including Sarkies restaurant. Guests enjoy modern amenities like a fitness center, pool, and spa, along with panoramic views of the Malacca Strait. Perfect for leisure or business, E&O offers timeless elegance and heritage in the heart of Penang."
                img1={image4}
                img2={image5} 
            />

            <DestinationData
                className="first-des"
                heading="4. University Sains Malaysia  "
                text="

Universiti Sains Malaysia (USM) is a leading public university in Malaysia, renowned for its excellence in education, research, and innovation. Established in 1969 and located in Penang, USM offers a wide range of undergraduate and postgraduate programs, particularly in science, technology, and the humanities. The university's lush campus features modern facilities, including research labs, libraries, and recreational areas. USM is recognized for its research excellence, ranked among the best in Asia, and focuses on addressing global challenges through collaboration and innovation. With a vibrant student life and strong industry ties, USM plays a key role in shaping Malaysia's future."
                img1={image6}
                img2={image7} 
            />

<DestinationData
                className="first-des"
                heading="5. Penang's Iconic Bridges: Connecting Land and Sea  "
                text="

Penang is home to iconic bridges, with the most famous being the Penang Bridge, completed in 1985. Spanning over 13 kilometers, it was the longest bridge in Southeast Asia at the time and connects Penang Island with the mainland. A crucial transportation route, it facilitates the movement of people and goods. In 2014, the Sultan Abdul Halim Muadzam Shah Bridge, or Second Penang Bridge, was opened to ease traffic congestion and provide an additional route. Both bridges are celebrated for their stunning design and symbolize Penang's development, offering breathtaking views, especially at night. Together, they have helped transform Penang into a bustling hub of commerce and tourism."                
                img1={image8}
                img2={image9} 
            />
        </div>
    );
};

export default Destination;
