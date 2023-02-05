import Image from "next/image";
import Link from "next/link";
import {
  BsFillStarFill,
  BsJournals,
  BsPersonCircle,
  BsArrowRight,
} from "react-icons/bs";
import cardPic from "../../public/pic8.jpg";

export default function Carousel({
  title,
  noOfLessons,
  rating,
  ratingCount,
  tutor,
  price,
  content,
}) {
  return (
    <div className="flex gap-4 carousel">
      {content.map((f, i) => (
        <div
          key={i}
          className="carousel-item card card-compact bg-base-100 shadow-md rounded-md relative lg:w-[22.5%]"
        >
          <figure>
            <Image
              className="object-cover w-full rounded-lg"
              src={cardPic}
              alt=""
            />
            <small className="badge absolute top-4 left-4 text-xs rounded-1">
              {title}
            </small>
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <small className="flex items-center gap-1">
                <BsJournals />
                {noOfLessons} lessons
              </small>
              <small className="flex items-center gap-1">
                <BsFillStarFill color="orange" />
                {rating} ({ratingCount})
              </small>
            </div>
            <h3 className="card-title text-md">{f}</h3>
            <div className="avatar items-center">
              <div className="w-4 ring-grey rounded-full ring ring-offest-2">
                <BsPersonCircle />
              </div>
              <h4 className="ml-5">{tutor}</h4>
            </div>
          </div>
          <div className="divider"></div>
          <div className="card-actions justify-between align-center px-2 pb-5">
            <h5 className="text-primary">{price}</h5>
            <Link href="" className="flex items-center gap-2">
              Know details
              <BsArrowRight />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
