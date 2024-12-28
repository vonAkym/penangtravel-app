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
        title="Uncover Penang's Hidden Gems" 
        text="Discover Unique Spots Worth Exploring"

        /> 
        <Destination />
        <Trip />
        <Footer/>
        </>

    );
}

export default Home;