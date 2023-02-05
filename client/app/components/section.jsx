import Link from "next/link";
import {BsArrowRight} from "react-icons/bs"

export default function ({header, subHeader, content}) {
    return (
    <section className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center text-sm">
          <h2 className="text-2xl font-bold">
            {header}
          </h2>
          <Link href="" className="flex items-center gap-2">
            {subHeader}
            <BsArrowRight />
          </Link>
        </div>
        {content}
      </section>
    )
}