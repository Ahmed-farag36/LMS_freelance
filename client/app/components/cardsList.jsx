import { BsBrush } from "react-icons";

export default function CardsList({ list }) {
	return (
		<div className="grid grid-cols-3 gap-2">
			{list.map((c, i) => (
				<div
					key={i}
					className="card card-side bg-base-100 shadow-md rounded-md h-24 items-center mt-4"
				>
					{/* <figure>
						<img
							src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
							alt="Shoes"
						/>
					</figure> */}
					<list.Icon />
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
	);
}
