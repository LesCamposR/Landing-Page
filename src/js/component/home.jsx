import React from "react";



//include images into your bundle
import Honey from "../../img/Honey.png";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";


//create your first component
const Home = () => {
	let cardContent = [
		{
			titulo: "Costa Rica",
			noticia: "100% Raw Honey is being Exported by local producers",
		},
		{
			titulo: "Surfing",
			noticia: "Helps people dealing with stress",
		},
		{
			titulo: "Fishing",
			noticia: "Fishermen are happy",
		},
		{
			titulo: "Photography",
			noticia: "Gallery exposition tomorrow",
		},
	];
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="album py-3">
				<div className="container">
					<div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
						{cardContent.map((item, index) => {
							return (
								<Card
									titulo={item.titulo}
									descripcion={item.noticia}
									key={index}

								/>
							);
						})}
					</div>
				</div>
			</div>
			<Footer />
		</>)

};

export default Home;
