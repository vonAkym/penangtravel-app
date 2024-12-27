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
                text="Padang Kota, also known as Esplanade Penang, is a significant historical and cultural landmark located in George Town, Penang, Malaysia. It is surrounded by colonial-era buildings such as Fort Cornwallis, the Town Hall, and the City Hall, which reflect the area's rich colonial heritage. Fort Cornwallis, built in the late 18th century by Captain Francis Light, stands as Malaysia's largest fort and a testament to its historical past. Padang Kota is also famous for its vibrant food scene, with the Esplanade Food Court offering iconic Penang dishes like laksa, char kway teow, and pasembur. The waterfront promenade provides a scenic spot for leisurely walks and relaxation, making it a favorite destination for locals and tourists alike. Additionally, the area frequently hosts cultural festivals and local events, adding to its lively atmosphere. With its unique blend of history, culture, and recreational offerings, Padang Kota is a must-visit destination in Penang."
                img1={image}
                img2={image1}
            />

            <DestinationData
                className="first-des"
                heading="2. Pasembur"
                text="Pasembur is a Malaysian dish that originates from Penang, known for its vibrant flavors and variety of ingredients. Typically served as a salad, Pasembur includes shredded cucumber, turnip, bean sprouts, crispy fritters, tofu, boiled eggs, and seafood, all generously coated with a sweet and spicy peanut sauce. The dish is popular among locals and tourists alike, often enjoyed at hawker stalls and food courts in Penang. It's a perfect representation of Malaysia's multicultural culinary heritage, combining flavors and textures that appeal to a wide range of palates."
                img1={image2}
                img2={image3} 
            />

            <DestinationData
                className="first-des"
                heading="3. Eastern and Oriental Hotel  "
                text="
The Eastern & Oriental Hotel (E&O Hotel) in Penang is a historic luxury hotel that combines old-world charm with modern sophistication. Established in 1885, the hotel has long been a symbol of Penang’s colonial heritage, offering a glimpse into the golden age of the island’s past. Located in the heart of George Town, a UNESCO World Heritage Site, the E&O Hotel boasts stunning colonial architecture, with elegant verandas, grand columns, and antique furnishings that transport guests back in time. The hotel offers luxurious rooms and suites, many with breathtaking views of the sea or city. It also features a variety of dining options, including the renowned Sarkies restaurant, serving traditional Penang and international cuisine. While maintaining its historical charm, the hotel provides modern amenities such as a fitness center, swimming pool, and spa, ensuring a comfortable stay. Its prime seafront location offers panoramic views of the Malacca Strait, making it an ideal destination for both leisure and business travelers seeking elegance, history, and luxury."
                img1={image4}
                img2={image5} 
            />

            <DestinationData
                className="first-des"
                heading="4. University Sains Malaysia  "
                text="

Universiti Sains Malaysia (USM) is one of Malaysia’s leading public universities, known for its commitment to excellence in education, research, and innovation. Located in Penang, USM is a prestigious institution that has earned a reputation for producing top-tier graduates in various fields, particularly in science, technology, and the humanities. Established in 1969, USM offers a comprehensive range of undergraduate and postgraduate programs, fostering a dynamic academic environment. The university's campus, set amidst lush greenery, provides students with state-of-the-art facilities, including research laboratories, libraries, and recreational areas. USM is also renowned for its research excellence, consistently ranked among the best in Asia, with a focus on addressing global challenges through innovation and collaboration. Its vibrant student life, diverse cultural activities, and strong industry partnerships further contribute to the university’s position as a hub for academic and professional growth. USM continues to play a pivotal role in shaping Malaysia’s future by nurturing talents and driving social and technological advancements."
                img1={image6}
                img2={image7} 
            />

<DestinationData
                className="first-des"
                heading="5. Penang's Iconic Bridges: Connecting Land and Sea  "
                text="

Penang is home to several iconic bridges, with the most famous being the Penang Bridge, a landmark of both engineering and connectivity. Opened in 1985, the Penang Bridge spans the Penang Strait, linking the island of Penang with the mainland of Malaysia. At the time of its completion, it was the longest bridge in Southeast Asia, stretching over 13 kilometers. The bridge is a vital transportation route, facilitating the movement of people and goods, and is an essential part of Penang's infrastructure. In 2014, the Sultan Abdul Halim Muadzam Shah Bridge, also known as the Second Penang Bridge, was opened. This modern structure complements the Penang Bridge by offering an additional route between the island and the mainland, reducing traffic congestion and improving accessibility. Both bridges are celebrated for their stunning architectural design and are a symbol of Penang’s progress and development, offering panoramic views of the strait and surrounding areas, especially when illuminated at night. Together, these bridges have played a crucial role in transforming Penang into a thriving hub of commerce and tourism."                
                img1={image8}
                img2={image9} 
            />
        </div>
    );
};

export default Destination;
