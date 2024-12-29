import Navbar from "../components/Navbar";
import Hero3 from "../components/HeroHotSpot.js";
import Footer from "../components/Footer.js";
import TripHotspot from "../components/TripHotspot.js";

function HotSpot (){
    return( 
        <>
        <Navbar /> 
        <Hero3 
        cName="hero1"
        title="Penang's Hidden Gems: Where Flavor Meets Adventure!" 
        /> 
        <TripHotspot/>
        <Footer/>
        </>

    );
}

export default HotSpot;