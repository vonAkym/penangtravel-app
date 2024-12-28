import "./TripStyles.css"
import TripData from "./TripData"
import Trip1 from "../components/img/event1.jpeg"
import Trip2 from "../components/img/event2.jpg"
import Trip3 from "../components/img/event3.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Events!</h1>
            <h3>Wakeup your inner explorer.</h3>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading ="PENANG HILL FESTIVAL"
                text="The Penang Hill Festival is an annual celebration of the natural beauty, historical significance, and vibrant culture of Penang Hill. Set in lush greenery, the festival offers a variety of activities, including guided nature walks, heritage tours, art exhibitions, cultural performances, and local food fairs, all highlighting the hill’s unique ecosystem and history. The event promotes environmental conservation and celebrates Penang Hill’s role as a cultural and natural treasure. With its cool climate, panoramic views, and lively atmosphere, the festival provides a memorable experience for visitors of all ages, from nature lovers to history enthusiasts."
link="https://www.penanghill.gov.my/phf/"/>
                <TripData
                image={Trip2}
                 heading ="PESTA PULAU PINANG 2024" 
                text="Pesta Pulau Pinang 2024 is the island’s highly anticipated annual event, celebrating Penang's heritage, culture, and cuisine. Held in December, the festival features amusement rides, live performances, food stalls with iconic dishes, art exhibitions, competitions, and traditional games. It also supports local businesses and artisans, fostering creativity and community spirit. With its lively atmosphere, Pesta Pulau Pinang 2024 offers an unforgettable experience that captures the heart of Penang’s festive spirit."
link="https://ecentral.my/pesta-pulau-pinang-2024/"/>
                <TripData
                image={Trip3}
                heading ="PENANG NATIONAL PARK RUN 2024"
                text="The Penang National Park Run 2024 invites runners and nature lovers to experience Malaysia’s natural beauty. Set in Penang National Park, the event offers a range of courses from beginner-friendly to challenging trails through rainforests, beaches, and coastal views. Promoting environmental conservation, the event raises awareness about preserving the park’s ecosystems. Whether you're a seasoned runner or a casual jogger, the Penang National Park Run 2024 is a celebration of health, community, and the outdoors.

Whether you’re a seasoned runner or a casual jogger, the Penang National Park Run 2024 is more than a race—it’s a celebration of health, community, and the wonders of the great outdoors."
link="https://v2.checkpointspot.asia/event/PNPR24"/>
                
            </div>
        </div>
     ) ;
    
}

export default Trip