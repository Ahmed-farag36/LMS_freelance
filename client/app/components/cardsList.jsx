import Link from "next/link";

export default function CardsList({
	list,
	cardsType = "",
	grid = "grid-cols-3",
	iconBgColor,
}) {
	return (
		<Link href="" className={`grid gap-2 ${grid}`}>
			{list.map((c, i) => (
				<div
					key={i}
					className={`card ${cardsType} bg-base-100 shadow-md rounded-md mt-4 px-4 items-center`}
				>
					{cardsType === "card-side" ? (
						<figure className="text-2xl">{c.icon}</figure>
					) : (
						<figure
							className={`text-2xl ${iconBgColor} p-2 rounded-full text-white`}
						>
							{c.icon}
						</figure>
					)}

					<div className={`card-body ${!cardsType && "items-center"}`}>
						<h3 className="card-title">
							{c.title}
							{c.isNew && (
								<div className="badge badge-secondary badge-xs">New</div>
							)}
						</h3>
						<p className="text-sm p-0">{c.sub}</p>
					</div>
				</div>
			))}
		</Link>
	);
}
