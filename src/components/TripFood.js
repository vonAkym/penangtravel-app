import "./TripStyles.css";
import TripDataFood from "./TripDataFood";
import Food1 from "../components/img/nasi kandar.png";
import Food2 from "../components/img/laksa penang.png";
import Food3 from "../components/img/cendol.png";

function TripFood() {
    return (
        <div className="trip1">
            <h1>Favourite Foods!</h1>
            <h3>Embark on a Journey to Flavorful Discoveries!</h3>
            <div className="tripcard1">
                <TripDataFood
                    image={Food1}
                    heading="Nasi Kandar"
                    text={
                        <>
                            <p>
                            Discover the legendary tastes of Penang with Nasi Kandar, a historically significant culinary icon! 🍛✨ This popular dish from northern Malaysia, which originated with Tamil Muslim traders, consists of fluffy steamed rice accompanied by a colorful mix of flavorful curries, each bursting with its own spices. Every meal will be enhanced by the captivating blended gravies when paired with your preferred tender meats, fresh seafood, or aromatic veggies. It's something you'll enjoy repeatedly, not just a meal! 🌶️🥩🦐
                            </p>
                            <ol>
                                <li><strong>Nasi Kandar Merlin</strong> – A favorite for locals and tourists, known for its perfect balance of spices and wide variety of meats and side dishes.</li>
                                <li><strong>Nasi Kandar Beratur</strong> – Famous for its long queues, this stall serves hearty portions of flavorful Nasi Kandar that keeps people coming back.</li>
                                <li><strong>Nasi Kandar Sulaiman</strong> – A traditional spot loved for its aromatic curries and classic Nasi Kandar offerings, consistently satisfying hungry diners.</li>
                                <li><strong>Hameediyah Restaurant</strong> – One of the oldest in Penang, offering a rich heritage of taste and a must-try for anyone seeking authentic Nasi Kandar.</li>
                                <li><strong>Nasi Kandar Deen Maju</strong> – A popular choice for its affordable prices and delicious combinations of curry and meat.</li>
                                <li><strong>Nasi Kandar Deen Mutiara</strong> – Known for its warm service and wide selection of side dishes that complement its famous rice and curry.</li>
                            </ol>

                            <p>
                                These establishments draw both locals and visitors who are eager to indulge in the quintessential Penang experience. Whether enjoyed in a bustling street-side stall or a cozy restaurant, Nasi Kandar offers a taste of Penang’s culinary magic that leaves diners coming back for more.
                            </p>
                        </>
                    }
                    link="https://www.penanghill.gov.my/phf/"
                />

                <TripDataFood
                    image={Food2}
                    heading="Cendol"
                    text={
                        <>
                        <p>
    Taste cendol, the ultimate tropical treat! 🍃✨ A delightful dessert masterpiece with a thick drizzle of palm sugar syrup, creamy coconut milk, and smooth green rice jelly with a pandan flavor. Every spoonful delivers an overwhelming feeling of sweetness and taste, and it's perfectly chilled. Enjoy this enticing Malaysian favorite to beat the heat! 🥥🍧
</p>
<ol>
    <li><strong>Ais Tingkap, George Town</strong> – Known for its refreshing and chilled cendol served with a perfect balance of sweetness and creaminess, this spot is a must-visit for cendol lovers.</li>
    <li><strong>Best Said Cendol, Seberang Jaya</strong> – Famous for its generous servings and rich flavors, offering a cool escape with every spoonful of delicious cendol.</li>
    <li><strong>BM Best Cendol, Bukit Mertajam</strong> – A local favorite that has perfected the art of serving the best cendol with a satisfying blend of ingredients and taste.</li>
    <li><strong>Kings Dessert Penang, Transfer Road</strong> – A dessert haven where you can enjoy cendol and other sweet treats, all prepared with the finest ingredients for an authentic taste.</li>
    <li><strong>Cendol Kamal, Pekan Kepala Batas</strong> – Known for its creamy and silky cendol, this place serves a delicious version that’s perfect for any occasion.</li>
    <li><strong>Teochew Cendol, Padang Brown</strong> – Offering a unique twist on the classic, this spot serves a flavorful cendol with a distinct Teochew touch that’s sure to leave you wanting more.</li>
</ol>

<p>
    These establishments offer the best cendol in Penang, each providing a refreshing and unique experience for cendol lovers. Whether you’re cooling off in the heat or enjoying a treat with friends and family, these spots will give you the ultimate cendol experience!
</p>
</>
                    }
                    link="https://ecentral.my/cendol-penang"
                />

                <TripDataFood
                    image={Food3}
                    heading="Rojak"
                    text={<>
                    <p>
    Experience Laksa Penang's signature flavor—a bowl of authentic Malaysian street food delight! 🍜✨ The flavors of this delicious noodle soup—sweet, savory, umami, and spicy—are all expertly blended. Each spoonful is bursting with freshness thanks to the combination of spicy chili peppers, lemongrass, acidic tamarind, and delicate poached mackerel or sardines. Warming your spirit and leaving your taste buds wanting more, this is a true Penang staple! 🌶️🐟🌿
</p>
<ol>
    <li><strong>Penang Road Laksa, George Town</strong> – Known for its iconic taste and generous portion, this Laksa stall is a must-try for anyone seeking an authentic Penang Laksa experience.</li>
    <li><strong>Laksa Janggus Kak Timah, Balik Pulau</strong> – A beloved local spot, famous for its rich and aromatic Laksa served with a hearty mix of spices and poached fish.</li>
    <li><strong>Laksa Juru Aunty Ruby, Juru/Bandar Perda</strong> – Known for its perfectly balanced Laksa, this stall is a hidden gem offering an unforgettable taste of Penang's street food culture.</li>
    <li><strong>Laksa Ikan Sekoq, Balik Pulau</strong> – Offering a distinct flavor of Laksa, it features fresh ingredients and is celebrated for its robust and tangy soup base.</li>
    <li><strong>Laksa Tempurung Ombak Damai, Teluk Kumbar</strong> – A unique twist on traditional Laksa, served in a coconut shell, adding an extra layer of flavor and texture to the already amazing dish.</li>
    <li><strong>Mamu Famous, Sungai Pinang</strong> – A popular spot for Laksa lovers, known for its quick service and consistently tasty bowl of Laksa that satisfies every time.</li>
</ol>

<p>
    These establishments offer the finest Laksa in Penang, each contributing its own unique flavor to the ever-popular dish. Whether you enjoy it spicy, tangy, or savory, these Laksa spots will surely deliver a bowl of comfort and satisfaction!
</p>

                    </>}
                    link="https://v2.checkpointspot.asia/event/rojak-penang"
                />
            </div>
        </div>
    );
}

export default TripFood;
