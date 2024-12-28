import Navbar from "../components/Navbar";
import Hero3 from "../components/HeroHotSpot.js";
import Footer from "../components/Footer.js";
import Destination from "../components/Destination.js";
import Trip from "../components/Trip.js";

function HotSpot (){
    return( 
        <>
        <Navbar /> 
        <Hero3 
        cName="hero1"
        title="Discover Heaven Food in Penan" 
        /> 
        <Trip/>
        <Destination></Destination>
        <Footer/>
        </>

    );
}

export default HotSpot;