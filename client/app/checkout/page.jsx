import Image from "next/image";
import Link from "next/link";
import { BsPaypal } from "react-icons/bs";
import pic from "../../public/pic8.jpg";

// interface Course {
//   title: string;
//   tutor: string;
//   lessons: number;
//   weekDays: string[];
//   startingDate: string;
//   hours: number;
// }

function CourseDetails(props) {
  const { course } = props;
  const { title, tutor, lessons, hours, weekDays, startingDate } = course;

  return (
    <div className="flex flex-1 flex-col">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>

      <ul className="flex flex-col gap-1">
        <li className="flex flex-row justify-between">
          <span className="text-lg font-bold">Tutor</span>
          <span className="text-lg font-bold">{tutor}</span>
        </li>

        <li className="flex flex-row justify-between">
          <span className="text-lg font-bold">No. of online lessons</span>
          <span className="text-lg font-bold">{lessons}</span>
        </li>

        <li className="flex flex-row justify-between">
          <span className="text-lg font-bold">Days of week</span>
          <span className="text-lg font-bold">{weekDays}</span>
        </li>

        <li className="flex flex-row justify-between">
          <span className="text-lg font-bold">Starting date</span>
          <span className="text-lg font-bold">{startingDate}</span>
        </li>

        <li className="flex flex-row justify-between">
          <span className="text-lg font-bold">Total hours</span>
          <span className="text-lg font-bold">{hours}</span>
        </li>
      </ul>

      <div className="flex mt-12 justify-end">
        <Image src={pic} height={240} alt="checkout" />
      </div>
    </div>
  );
}

function ReceiptDetails() {
  return (
    <div className="flex flex-1 flex-col p-5 shadow-md rounded-md">
      <h3>Receipt no.123456 {new Date().toLocaleString()}</h3>
      <h1 className="text-5xl font font-bold my-4 text-center">$ 137.00</h1>

      <div className="flex flex-1 justify-between py-5 flex-col border-t border-gray-700">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <span className="text-lg font-bold">Course Price</span>
            <span className="text-lg font-bold">130.00</span>
          </div>

          <div className="flex justify-between">
            <span className="text-lg font-bold">Taxes & fees</span>
            <span className="text-lg font-bold">15.00</span>
          </div>

          <div className="flex justify-between">
            <span className="text-lg font-bold">Discount</span>
            <span className="text-lg font-bold">5%</span>
          </div>
        </div>

        <div className="flex flex-col">
          <button className="btn btn-primary btn-wide self-center text-lg">
            Pay
          </button>

          <div className="flex flex-row self-center items-center gap-2">
            <p>Using your dafault payment method</p>
            <BsPaypal />
          </div>
        </div>
      </div>

      <Link href={""}>Refer to a friend and get 10% discount</Link>
    </div>
  );
}

function Checkout() {
  return (
    <div className="flex flex-1 flex-wrap flex-row px-32 py-8 gap-12">
      <CourseDetails course={courses[0]} />
      <ReceiptDetails />
    </div>
  );
}

const courses = [
  {
    title: "english course grade a1",
    tutor: "Mrs.Angelina",
    lessons: 7,
    weekDays: ["sat", "sun"],
    startingDate: new Date().toLocaleDateString(),
    hours: 14,
  },
];

export default Checkout;
