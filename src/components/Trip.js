import "./TripStyles.css"
import TripData from "./TripData"
import Trip1 from "../components/img/event1.jpeg"
import Trip2 from "../components/img/event2.jpg"
import Trip3 from "../components/img/event3.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Events!</h1>
            <h3>You can discover Uniques Destination</h3>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading ="PENANG HILL FESTIVAL"
                text="Penang Hill Festival is an annual event that showcases the rich natural beauty, historical significance, and vibrant culture of Penang Hill. Nestled amidst lush greenery, Penang Hill serves as an iconic destination for locals and tourists alike, and the festival amplifies its charm with a diverse range of activities and attractions. Visitors can enjoy guided nature walks, heritage tours, art exhibitions, cultural performances, and local food fairs that highlight the hill’s unique ecosystem and history.

The festival aims to promote environmental conservation while celebrating Penang Hill’s role as a natural and cultural treasure. With its cool climate, panoramic views of the island, and lively festival atmosphere, Penang Hill Festival offers a memorable experience for all ages. Whether you're a nature enthusiast, a history buff, or simply looking for a fun-filled day with friends and family, this festival promises to captivate and inspire."
link="https://www.penanghill.gov.my/phf/"/>
                <TripData
                image={Trip2}
                 heading ="PESTA PULAU PINANG 2024" 
                text="Pesta Pulau Pinang 2024 is the island's most anticipated annual event, bringing together a spectacular showcase of Penang's rich heritage, vibrant culture, and world-famous culinary delights. Taking place in December, this grand festival is a highlight for locals and tourists, offering a variety of attractions that cater to all ages and interests.

From thrilling amusement rides and live cultural performances to bustling food stalls serving Penang’s iconic dishes, Pesta Pulau Pinang is a sensory extravaganza. Visitors can explore unique art and craft exhibitions, enjoy exciting competitions, and participate in traditional games that celebrate the island’s diverse heritage.

The festival is also a platform for local businesses and artisans, making it a hub for creativity, innovation, and community spirit. With its lively atmosphere, Pesta Pulau Pinang 2024 promises an unforgettable experience, embodying the heart and soul of Penang's festive spirit."
link="https://ecentral.my/pesta-pulau-pinang-2024/"/>
                <TripData
                image={Trip3}
                heading ="PENANG NATIONAL PARK RUN 2024"
                text="The Penang National Park Run 2024 invites running enthusiasts and nature lovers to lace up their shoes and experience the beauty of Malaysia’s natural heritage. Set against the stunning backdrop of Penang National Park, this event offers a unique opportunity to connect with nature while testing your endurance on scenic trails.

Participants can choose from various categories, ranging from beginner-friendly routes to challenging courses that traverse lush rainforests, pristine beaches, and breathtaking coastal views. Beyond the race, the event promotes environmental conservation, with initiatives to raise awareness about preserving the park’s diverse ecosystems.

Whether you’re a seasoned runner or a casual jogger, the Penang National Park Run 2024 is more than a race—it’s a celebration of health, community, and the wonders of the great outdoors."
link="https://v2.checkpointspot.asia/event/PNPR24"/>
                
            </div>
        </div>
     ) ;
    
}

export default Trip