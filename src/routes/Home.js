import Navbar from "../components/Navbar";
import Hero from "../components/HeroHome.js";
import Destination from "../components/Destination.js";
import Trip from "../components/Trip.js";
import Footer from "../components/Footer.js";

function Home (){
    return( 
        <>
        <Navbar /> 
        <Hero 
        cName="hero"
        title="Explore Favourite Places In Penang" 
        text="Choose Interesting Places"
        buttonText="Travel Plan"
        url ="/looking"
        btnClass="show"
        /> 
        <Destination />
        <Trip />
        <Footer/>
        </>

    );
}

export default Home;