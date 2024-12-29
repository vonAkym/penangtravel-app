import "./TripHotspotStyles.css"
import TripDataHotspot from "./TripDataHotspot"
import HotSpot1 from "../components/img/3d.jpg"
import HotSpot2 from "../components/img/batuferingi.jpg"
import HotSpot3 from "../components/img/botanical.jpg"
import HotSpot4 from "../components/img/chewjetty.jpg"
import HotSpot5 from "../components/img/escapethemepark.jpg"
import HotSpot6 from "../components/img/gurney.jpg"
import HotSpot7 from "../components/img/images.jpg"
import HotSpot8 from "../components/img/kampung.jpg"
import HotSpot9 from "../components/img/komtar.jpg"
import HotSpot10 from "../components/img/snake.jpg"
import HotSpot11 from "../components/img/streetart.jpg"
import HotSpot12 from "../components/img/entopia.jpg"

function TripHotspot(){
    return(
        <div className="trip">
            <h1>Recent Events!</h1>
            <h3>Wakeup your inner explorer.</h3>
            <div className="tripcard">
                <TripDataHotspot
                image={HotSpot2}
                heading ="Batu Ferringhi Beach"
                text="Batu Ferringhi Beach offers a blend of relaxation, adventure, and culture. While there are drawbacks, as with any popular tourist spot, the positives have outweighed the negatives for us. With mindful planning and an awareness of the potential cons, a visit to Batu Ferringhi can be a great experience."
link="https://maps.app.goo.gl/pWJPwtGJAySFGP3J9"/>
                <TripDataHotspot
                image={HotSpot12}
                 heading ="Entopia By Penang Butterfly Farm" 
                text="Batu Ferringhi Beach offers a blend of relaxation, adventure, and culture. While there are drawbacks, as with any popular tourist spot, the positives have outweighed the negatives for us. With mindful planning and an awareness of the potential cons, a visit to Batu Ferringhi can be a great experience."
link="https://maps.app.goo.gl/51oRAvL1FUucGvu56"/>
                <TripDataHotspot
                image={HotSpot9}
                heading ="The Top Komtar"
                text="The TOP is a project by OWG, the leading theme park builder with a proven track record of delivering exciting leisure attractions. A center stage of people coming together for an exhilarating lifestyle experience, creating lifelong food memories. The TOP is set to be a must-visit attraction in Penang."
link="https://maps.app.goo.gl/w8vrJtdHSKtXFzAw8"/>
 <TripDataHotspot
                image={HotSpot1}
                heading ="Penang 3D Art Museum"
                text="While most museums don't allow their visitors to take pictures, it's a different story at the Penang 3D Trick Art Museum. Visitors are encouraged to interact and have fun with the art pieces, and take as many photos as they want. Not like other museums, this art museum is an interactive attraction that embraces the old and the new by mixing art that features traditional Malaysian settings and what is considered to be present-day hip culture"
link="https://maps.app.goo.gl/CQWp5ZYUJPhUnuX79"/>
 <TripDataHotspot
                image={HotSpot3}
                heading ="Penang Botanical Garden"
                text="It is famous for its flora and fauna namely the long-tailed macaque monkeys that roam freely in the gardens. A popular spot for joggers and those who enjoy brisk walking, its manicured lawns and pockets of nurseries boast hundreds of species of flora"
link="https://maps.app.goo.gl/N54Ag6JHusT9FgMC7"/>
 <TripDataHotspot
                image={HotSpot4}
                heading ="Chew Jetty"
                text="Chew Jetty is the biggest and most visited water village amongst the Clan Jetties. The closed-knit Chew community played an important role in settling the Chew clan immigrants from the same hometown in the old days and it has largely been spared from the ravages of war and grew undisrupted over the years."
link="https://maps.app.goo.gl/X8Qbw52gsWnXr31p9"/>
 <TripDataHotspot
                image={HotSpot5}
                heading ="Escape Theme Park"
                text="The TOP is a project by OWG, the leading theme park builder with a proven track record of delivering exciting leisure attractions. A center stage of people coming together for an exhilarating lifestyle experience, creating lifelong food memories. The TOP is set to be a must-visit attraction in Penang."
link="https://maps.app.goo.gl/hC8DE7kcxiUJw54TA"/>
 <TripDataHotspot
                image={HotSpot6}
                heading ="Gurney bay"
                text="Gurney Bay, formerly known as Gurney Wharf, is a seafront park within George Town in the Malaysian state of Penang. It was newly opened to public in Feb 2024. It's definitely a nice place for couples, family outing and jogging. Skate park and children playground are the most visited area apart from seafront promenade."
link="https://maps.app.goo.gl/m59CRsuUAm15jZBN9"/>
 <TripDataHotspot
                image={HotSpot7}
                heading ="Penang Hill"
                text="Penang Hill is a hilly, forested area that stands out from the lowlands of Malaysia due to its elevation and greenery. The area was used as a retreat during the British colonial period and is now a popular tourist destination because of its history and heritage."
link="https://maps.app.goo.gl/6N1wS5tuN8GA7Y3H7"/>
 <TripDataHotspot
                image={HotSpot8}
                heading ="Kampung Agong"
                text="The TOP is a project by OWG, the leading theme park builder with a proven track record of delivering exciting leisure attractions. A center stage of people coming together for an exhilarating lifestyle experience, creating lifelong food memories. The TOP is set to be a must-visit attraction in Penang."
link="https://kampungagong.com/"/>
 <TripDataHotspot
                image={HotSpot10}
                heading ="Penang Snake Temple"
                text="The Penang Snake Temple is one of the most peculiar temples in the world. It is home to various resident snakes that started treating the temple as their home after Chor Soo Kong, a Buddhist priest and healer, gave shelter to the snakes while the temple was still under construction. Despite the fact that the temple was completed after the priest’s death, more snakes actually moved into the temple on their own"
link="https://maps.app.goo.gl/oZgvbGSP6PRZ4U8J7"/>
 <TripDataHotspot
                image={HotSpot11}
                heading ="Penang street art"
                text="George Town in Penang has literally hundreds of wall murals and other forms of street art scattered across the city. The street art movement in Penang started in 2012. Before 2012 there hardly any graffiti on"
link="https://maps.app.goo.gl/AMr2h6VcUE5ABzGf9"/>

        
                
            </div>
        </div>
     ) ;
    
}

export default TripHotspot