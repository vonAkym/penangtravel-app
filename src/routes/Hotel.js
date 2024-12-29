import Navbar from "../components/Navbar";
import Footer from "../components/Footer.js";
import DestinationHotel from "../components/DestinationHotel.js";
import Hero2 from "../components/HeroHotel.js";


function Hotel (){
    return( <>
        <Navbar /> 
        <Hero2
        cName="hero1"
        title="Top Hotels in Penang: Where Comfort Meets Luxury!" 
        />


        <DestinationHotel/>
        
        <Footer/> 
        </>

    );
}

export default Hotel;