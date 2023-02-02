import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Hero from "./components/hero";
import Link from "next/link";
import CardsList from "./components/cardsList";
import { BsJournals, BsPersonCircle, BsFillStarFill } from "react-icons/bs";
import cardPic from "../public/pic8.jpg";

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
          <Link href="">View all category</Link>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-3 gap-2">
          {categories.map((c, i) => (
            <div
              key={i}
              className="card card-side bg-base-100 shadow-md rounded-md h-24 items-center mt-4"
            >
              <figure>
                <img
                  src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body pr-2">
                <h3 className="card-title">
                  {c.title}
                  {c.isNew && <div className="badge badge-secondary">New</div>}
                </h3>
                <p className="text-sm p-0">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="px-[100px] pt-[100px] text-center">
        <h2 className="text-2xl font-bold">
          Make the world your compfort zone
        </h2>
        <small className="mb-1">
          Speak naturally with professional online tutors form 185 country
        </small>
        {/* Cards */}
        <div className="grid grid-cols-4 gap-2">
          {features.map((f, i) => (
            <div
              key={i}
              className="card basis-1/5 mr-2 bg-base-100 shadow-md rounded-md mt-5"
            >
              <figure>
                <img
                  src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title self-center">{f.title}</h3>
                <p className="text-sm p-0">{f.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="px-[100px] pt-[100px] text-center">
        <h2 className="text-2xl font-bold">Focus on the skills you need</h2>
        <small className="mb-1">
          Prepare to achieve your goals with private tutors
        </small>
        {/* Cards */}
        <div className="grid grid-cols-2 gap-2">
          {features2.map((f, i) => (
            <div
              key={i}
              className="card basis-1/5 mr-2 bg-base-100 shadow-md rounded-md mt-5"
            >
              <figure>
                <img
                  src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title self-center">{f.title}</h3>
                <p className="text-sm p-0">{f.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
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
              className="card mr-2 bg-base-100 shadow-md rounded-md mt-5  relative"
            >
              <figure>
                <Image src={cardPic} alt="learning" />
                <small className="badge absolute top-4 left-4 text-xs rounded-1">
                  Art & Design
                </small>
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <small className="flex">
                    <BsJournals />
                    12 lessons
                  </small>
                  <small className="flex">
                    <BsFillStarFill color="orange" />
                    {"  "}4.00 (2)
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
                <Link href="" className="">
                  Know details
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
  { title: "Data Science", sub: "Data is everything", isNew: true },
  { title: "Business", sub: "Improve you business", isNew: false },
  {
    title: "Art & Design",
    sub: "Fun & challenging",
    isNew: false,
  },
  { title: "Life Style", sub: "New skills, new you", isNew: false },
  { title: "Marketing", sub: "Improve your business", isNew: false },
  { title: "Finance", sub: "fun & challenging", isNew: false },
  { title: "Health & Fitness", sub: "Invest in your body", isNew: false },
  { title: "Music", sub: "Major or minor", isNew: false },
  { title: "Academics", sub: "MHigh education level", isNew: false },
];

const features = [
  { title: "Expert tutors", sub: "Find native speakers and certified tutors" },
  {
    title: "Verified profiles",
    sub: "We carefully check and confirm each tutor's profile",
  },
  { title: "Expert tutors", sub: "Find native speakers and certified tutors" },
  {
    title: "Affordable prices",
    sub: "Choose an expert tutor that fit your budget",
  },
];

const features2 = [
  {
    title: "Immerse yourself in a new culture",
    sub: "connect with language experts from around the world",
  },
  {
    title: "Succeed in your career",
    sub: "Develop your vocabulary and communicate clearly",
  },
  {
    title: "Get expert help when you need it",
    sub: "Learn to solve any problem in any language",
  },
  {
    title: "Speak naturally, always",
    sub: "Make a good imperssion and build trust in any language",
  },
];

const featuredCourses = [
  "Making music with other people",
  "Fundamentals of music theory",
];
