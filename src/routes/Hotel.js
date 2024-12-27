import Navbar from "../components/Navbar";
import Hero2 from "../components/HeroHotel.js";
import Footer from "../components/Footer.js";
import Destination from "../components/Destination.js";


function Hotel (){
    return( <>
        <Navbar /> 
        <Hero2 
        cName="hero2"
        title="TOP HOTELS IN PENANG!" 
        />
        <Destination/>
        <Footer/> 
        </>

    );
}

export default Hotel;