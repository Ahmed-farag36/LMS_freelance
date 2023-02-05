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
import Section from "./components/section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
      <Section
        header="Explore our popular courses"
        subHeader="View all category"
        content={<CardsList list={categories} cardsType="card-side" />}
      />
      <Section
        header="Make the world your compfort zone"
        subHeader="Speak naturally with professional online tutors form 185 country"
        content={
          <CardsList
            list={features}
            grid="grid-cols-4"
            iconBgColor="bg-blue-500"
          />
        }
      />
	  <Section header="Focus on the skills you need" subHeader="Prepare to achieve your goals with private tutors" content={<CardsList
          list={features2}
          iconBgColor="bg-purple-500"
          grid="grid-cols-2"
        />} />
      <Section header="Find the right online course for you" subHeader="You don't have to struggle alone, you have got our assistance and help" content={<Carousel title="Art & Design" noOfLessons="12" rating="4.00" ratingCount="2" tutor="Admin" price="Free" content={featuredCourses} />} />
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
  "Making music with other people",
  "Fundamentals of music theory",
  "Making music with other people",
  "Fundamentals of music theory",
  "Fundamentals of music theory",
  "Fundamentals of music theory",
  "Fundamentals of music theory",
  "Fundamentals of music theory",
];
