import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Hero from "./components/hero";
import Link from "next/link";
import CardsList from "./components/cardsList";
import {
	BsJournals,
	BsPersonCircle,
	BsFillStarFill,
	BsTablet,
	BsCalculator,
	BsBrush,
	BsChatRight,
	BsPieChart,
	BsBarChart,
	BsMusicNoteList,
	BsHeart,
	BsPen,
	BsArrowRight,
	BsStar,
	BsCheck2Circle,
	BsTrophy,
	BsRecordCircle,
	BsBookmark,
	BsChevronDoubleUp,
	BsStopwatch,
	BsGeoAlt,
} from "react-icons/bs";
import cardPic from "../public/pic8.jpg";
import Carousel from "./components/carousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main>
			<Hero />;
			<section className="px-[100px] pt-[100px]">
				<div className="flex justify-between items-center text-sm">
					<h2 className="text-2xl font-bold">
						Explore
						<br />
						our popular courses
					</h2>
					<Link href="" className="flex items-center gap-2">
						View all category
						<BsArrowRight />
					</Link>
				</div>
				<CardsList list={categories} cardsType="card-side" />
			</section>
			<section className="px-[100px] pt-[100px] text-center">
				<h2 className="text-2xl font-bold">
					Make the world your compfort zone
				</h2>
				<small className="mb-1">
					Speak naturally with professional online tutors form 185 country
				</small>
				<CardsList
					list={features}
					grid="grid-cols-4"
					iconBgColor="bg-blue-500"
				/>
			</section>
			<section className="px-[100px] pt-[100px] text-center">
				<h2 className="text-2xl font-bold">Focus on the skills you need</h2>
				<small className="mb-1">
					Prepare to achieve your goals with private tutors
				</small>
				<CardsList
					list={features2}
					iconBgColor="bg-purple-500"
					grid="grid-cols-2"
				/>
			</section>
			{/* <Carousel images={cardPic} /> */}
			<section className="px-[100px] pt-[100px]">
				<h2 className="text-2xl font-bold">
					Find the right online course for you
				</h2>
				<small className="mb-1">
					You don't have to struggle alone, you have got our assistance and help
				</small>
				{/* Cards */}
				<div className="grid grid-cols-3 gap-2">
					{featuredCourses.map((f, i) => (
						<div
							key={i}
							className="card card-compact bg-base-100 shadow-md rounded-md relative"
						>
							<figure>
								<Image src={cardPic} alt="learning" />
								<small className="badge absolute top-4 left-4 text-xs rounded-1">
									Art & Design
								</small>
							</figure>
							<div className="card-body">
								<div className="flex justify-between">
									<small className="flex items-center gap-1">
										<BsJournals />
										12 lessons
									</small>
									<small className="flex items-center gap-1">
										<BsFillStarFill color="orange" />
										4.00 (2)
									</small>
								</div>
								<h3 className="card-title text-md">{f}</h3>
								<div className="avatar items-center">
									<div className="w-4 ring-grey rounded-full ring ring-offest-2">
										<BsPersonCircle />
									</div>
									<h4 className="ml-5">Admin</h4>
								</div>
							</div>
							<div className="divider"></div>
							<div className="card-actions justify-between align-center px-2 pb-5">
								<h5 className="text-primary">Free</h5>
								<Link href="" className="flex items-center gap-2">
									Know details
									<BsArrowRight />
								</Link>
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}

const categories = [
	{
		title: "Data Science",
		sub: "Data is everything",
		isNew: true,
		icon: <BsTablet />,
	},
	{
		title: "Business",
		sub: "Improve you business",
		isNew: false,
		icon: <BsCalculator />,
	},
	{
		title: "Art & Design",
		sub: "Fun & challenging",
		isNew: false,
		icon: <BsBrush />,
	},
	{
		title: "Life Style",
		sub: "New skills, new you",
		isNew: false,
		icon: <BsChatRight />,
	},
	{
		title: "Marketing",
		sub: "Improve your business",
		isNew: false,
		icon: <BsPieChart />,
	},
	{
		title: "Finance",
		sub: "fun & challenging",
		isNew: false,
		icon: <BsBarChart />,
	},
	{
		title: "Health & Fitness",
		sub: "Invest in your body",
		isNew: false,
		icon: <BsHeart />,
	},
	{
		title: "Music",
		sub: "Major or minor",
		isNew: false,
		icon: <BsMusicNoteList />,
	},
	{
		title: "Academics",
		sub: "MHigh education level",
		isNew: false,
		icon: <BsPen />,
	},
];

const features = [
	{
		title: "Expert tutors",
		sub: "Find native speakers and certified tutors",
		icon: <BsStar />,
	},
	{
		title: "Verified profiles",
		sub: "We carefully check and confirm each tutor's profile",
		icon: <BsCheck2Circle />,
	},
	{
		title: "Expert tutors",
		sub: "Find native speakers and certified tutors",
		icon: <BsTrophy />,
	},
	{
		title: "Affordable prices",
		sub: "Choose an expert tutor that fit your budget",
		icon: <BsRecordCircle />,
	},
];

const features2 = [
	{
		title: "Immerse yourself in a new culture",
		sub: "connect with language experts from around the world",
		icon: <BsBookmark />,
	},
	{
		title: "Succeed in your career",
		sub: "Develop your vocabulary and communicate clearly",
		icon: <BsChevronDoubleUp />,
	},
	{
		title: "Get expert help when you need it",
		sub: "Learn to solve any problem in any language",
		icon: <BsStopwatch />,
	},
	{
		title: "Speak naturally, always",
		sub: "Make a good imperssion and build trust in any language",
		icon: <BsGeoAlt />,
	},
];

const featuredCourses = [
	"Making music with other people",
	"Fundamentals of music theory",
];
