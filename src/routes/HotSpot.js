import Navbar from "../components/Navbar";
import Hero3 from "../components/HeroHotSpot.js";
import Footer from "../components/Footer.js";

function HotSpot (){
    return( 
        <>
        <Navbar /> 
        <Hero3 
        cName="hero3"
        title="Discover Heaven Food in Penan" 
        /> 
        <Footer/>
        </>

    );
}

export default HotSpot;