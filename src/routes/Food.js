import Navbar from "../components/Navbar";
import Hero1 from "../components/HeroFood.js";
import Footer from "../components/Footer.js";
import TripFood from "../components/TripFood.js";

function Food (){
    return( 
        <>
        <Navbar /> 
        <Hero1 
        cName="hero1"
        title="Discover Heaven Food in Penang" 
        /> 
        <TripFood/>
        <Footer/>
        </>

    );
}

export default Food;