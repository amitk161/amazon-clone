import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<img
				className="home__image"
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt="banner"
			/>
			<div className="home__row">
				<Product
					id="12389670"
					title="Atomic Habits: The life-changing million copy bestseller Paperback"
					price={360}
					rating={5}
					image="https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
				/>

				<Product
					id="94562309"
					title="Green Soul Monster Ultimate Series T Multi-Functional Ergonomic Chair "
					price={16990}
					rating={5}
					image="https://m.media-amazon.com/images/I/81dP2SZZ6cL._SX522_.jpg"
				/>
			</div>

			<div className="home__row">
				<Product
					id="45908236"
					title="iPhone 14 Pro 1TB Silver: Beauty that's built to last"
					price={179900}
					rating={4}
					image="https://m.media-amazon.com/images/I/61lKQWyMdDL._AC_SL1500_.jpg"
				/>

				<Product
					id="89340129"
					title="Apple AirPods Pro (2nd Generation) ​​​​​​​"
					price={26400}
					rating={5}
					image="https://m.media-amazon.com/images/I/61SUj2aKoEL._SL1500_.jpg"
				/>

				<Product
					id="65109837"
					title="Fossil Gen 5 Touchscreen Men's Smartwatch"
					price={14995}
					rating={4}
					image="https://m.media-amazon.com/images/I/71tc0IQKJGL._UX522_.jpg"
				/>
			</div>

			<div className="home__row">
				<Product
					id="66609340"
					title="DesiDiya® Hanging Tulip Cone Disc Ceiling Light Lamp Home Decor Items"
					price={842}
					rating={4}
					image="https://m.media-amazon.com/images/I/31Kk2yy1x5L.jpg"
				/>

				<Product
					id="30991756"
					title="Viomi SE Robotic Vacuum Cleaner and Mop with Intelligent Laser Navigation"
					price={17490}
					rating={5}
					image="https://m.media-amazon.com/images/I/51KZMgZbTgL._SX679_.jpg"
				/>

				<Product
					id="09081207"
					title="PHILIPS Digital Air Fryer HD9252/90 with Touch Panel"
					price={10999}
					rating={4}
					image="https://m.media-amazon.com/images/I/611y+GGr+tS._SX679_.jpg"
				/>
			</div>

			<div className="home__row">
				<Product
					id="76012573"
					title="LG 688 L Frost Free Smart Inverter Side-by-Side Refrigerator"
					price={92290}
					rating={3}
					image="https://m.media-amazon.com/images/I/81EtiF0kHbL._SX679_.jpg"
				/>

				<Product
					id="76450912"
					title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
					price={135990}
					rating={4}
					image="https://m.media-amazon.com/images/I/71MlcO29QOL._SX450_.jpg"
				/>
			</div>
		</div>
	);
}

export default Home;
