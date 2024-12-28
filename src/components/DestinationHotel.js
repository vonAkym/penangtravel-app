import React from "react";
import image from "../components/img/hardrock.jpg";
import image1 from "../components/img/hard2.jpg";
import image2 from "../components/img/ghotel.jpg";
import image3 from "../components/img/gurney2.jpeg";
import image4 from "../components/img/macallister.jpg";
import image5 from "../components/img/macallister2.jpg";
import image6 from "../components/img/shangrila.jpg";
import image7 from "../components/img/shangri.jpg";
import image8 from "../components/img/marriot.jpeg";
import image9 from "../components/img/marriot2.jpg";
import image10 from "../components/img/seventerraces.jpg";
import image11 from "../components/img/seven.jpg";

import "./DestinationHotelStyles.css";
import DestinationDataHotel from "./DestinationDataHotel";

const DestinationHotel = () => {
    return (
        <div className="destination1">
            <h1> Where Your Perfect Stay Begins!</h1>
            <h3>Fall in Love with Penang.</h3>

            <DestinationDataHotel
                className="first-des1"
                heading="1. Hard Rock Hotel"
                text="Music is a force—a kinetic spirit that's ageless and electric. And each Hard Rock Hotel is a monument to that spirit, creating destinations where anything is possible. A weekend of poolside lounging by day and hotel club-crawls by night? Yes. Incredible outdoor recreation for the whole family and kids-only clubs that are actually cool? Yes. An all-inclusive experience you'll never forget? Yes. Indulgent spa treatments and cuisine from Michelin-star chefs? Yes. A mind-melting event experience? Yes. Whatever your destination, when you stay at Hard Rock, you have arrived."
                img1={image}
                img2={image1}
                stars={9}
            />

            <DestinationDataHotel
                className="first-des1"
                heading="2. G Hotel Gurney"
                text="G Hotel is an urban oasis, fitting for both discerning business and leisure guests. Luxuriate in the grandeur as the entrance lobby speaks volumes of the exclusivity within. Enjoy the sensation of soaring above the skyline in our exquisitely designed Executive Lounge. Nestled just beneath the clouds, look forward to a sky-high lounge experience like no other."
                img1={image2}
                img2={image3}
                stars={9}
            />

            <DestinationDataHotel
                className="first-des1"
                heading="3. Macalister Mansion"
                text="The eight opulent rooms of Macalister Mansion are where ultimate comfort and relaxation beckon. The aesthetically pleasing layouts will enchant your senses and soothe your mind. You will find gastronomic offerings galore, ranging from local and international flavours, along with a generous selection of beverages. So delightful and sensational they will keep you coming back."
                img1={image4}
                img2={image5}
                stars={9}
            />

            <DestinationDataHotel
                className="first-des1"
                heading="4. Shangri-La Rasa Sayang"
                text="Shangri-La Rasa Sayang, Penang is a charming tropical retreat where holidays come to life where a luxurious escape means barefoot bliss and lazy sun-drenched days. Whether you are a couple seeking a relaxing sanctuary or families seeking family fun together, our resort has an array of signature dining experiences, spa services that re-awaken, tranquil gardens that nurture through nature and a warm service that bring guests back again."
                img1={image6}
                img2={image7}
                stars={10}
            />

            <DestinationDataHotel
                className="first-des1"
                heading="5. Penang Marriott Hotel"
                text="Welcome to Penang Marriott Hotel, where inviting spaces and thoughtful amenities greet you from the moment you arrive. Located along Gurney Drive and Jalan Kelawai Road, our waterfront hotel offers stunning views of Gurney Wharf, an upcoming seafront park with a beach, coastal grove, water garden, and lifestyle area, set to open in 2025. Choose from luxurious city or sea-view accommodations and savor culinary delights at four dining outlets, a lounge, and a bar. Enjoy panoramic views from the outdoor pool, keep kids entertained in the playroom, and stay energized in our fitness center. Experience elevated comfort and unmatched hospitality in the heart of Penang."
                img1={image8}
                img2={image9}
                stars={10}
            />

            <DestinationDataHotel
                className="first-des1"
                heading="6. Seven Terraces"
                text="The architecture of these shophouses, with classical decorative details imported from England, was similar to the traditional urban house models common in southern China. The five-foot-way, a covered walkway that connects these shophouses on the ground floor, was another feature at Seven Terraces that is characteristic of most heritage shophouses in Penang. This unique walkway represents a colonial adaptation designed to suit the tropical climate, providing a length of covered space as a shield from the heat and rain."
                img1={image10}
                img2={image11}
                stars={9}
            />
        </div>
    );
};

export default DestinationHotel;
