import Image from "next/image";

export default function Carousel({ images }) {
	return (
		<div className="carousel rounded-box">
			<div className="carousel-item">
				<Image src={images} alt="Burger" />
			</div>
			<div className="carousel-item">
				<Image src={images} alt="Burger" />
			</div>
			<div className="carousel-item">
				<Image src={images} alt="Burger" />
			</div>
			<div className="carousel-item">
				<Image src={images} alt="Burger" />
			</div>
		</div>
	);
}
