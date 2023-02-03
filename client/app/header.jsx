import Link from "next/link";
import { BsPencil, BsGrid3X3GapFill } from "react-icons/bs";

export default function Header() {
	return (
		<header className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<Link href="/">Tutors</Link>
						</li>
						<li tabIndex={0}>
							<Link href="/" className="justify-between">
								Languages
								<svg
									className="fill-current"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
								</svg>
							</Link>
							<ul className="p-2">
								<li>
									<Link href="/">Tutors</Link>
								</li>
								<li>
									<Link href="/">Languages</Link>
								</li>
								<li>
									<Link href="/">Contacts</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link href="/">Contacts</Link>
						</li>
					</ul>
				</div>
				<Link href="/" className="btn btn-ghost normal-case text-xl">
					<BsPencil color="purple" />
					elearning
				</Link>
				<Link href="" className="hidden lg:inline">
					<h6 className="flex items-center gap-2">
						<BsGrid3X3GapFill />
						Course
					</h6>
				</Link>
			</div>

			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href="">Tutors</Link>
					</li>
					<li tabIndex={0}>
						<Link href="">
							Languages
							<svg
								className="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
							>
								<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
							</svg>
						</Link>
						<ul className="p-2">
							<li>
								<Link href="/">Tutors</Link>
							</li>
							<li>
								<Link href="/">Languages</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link href="/">Contacts</Link>
					</li>
				</ul>
			</div>

			<div className="navbar-end">
				<div className="form-control flex flex-row border mr-10 rounded">
					<button className="btn btn-ghost btn-circle">
						{/* search icon */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</button>
					<input
						type="text"
						placeholder="Search"
						className="input hidden lg:block focus:outline-none"
					/>
					<button className="btn btn-ghost btn-circle">
						{/* cart icon */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M2.83179 4.38657H3.34341C4.20256 4.38657 4.96125 4.94691 5.21392 5.76808L8.27786 15.7259C8.53053 16.547 9.28921 17.1074 10.1484 17.1074H17.1114C17.9373 17.1074 18.6743 16.5889 18.9534 15.8116L20.9925 10.1312C21.679 8.21867 20.2616 6.20383 18.2295 6.20383H10.66"
								stroke="#1C1C1C"
								stroke-width="1.7"
								stroke-linecap="round"
							/>
							<circle cx="10.1707" cy="20.5322" r="1.46779" fill="#1C1C1C" />
							<circle cx="17.0204" cy="20.5322" r="1.46779" fill="#1C1C1C" />
						</svg>
					</button>
				</div>
				<Link className="btn btn-primary" href="">
					Try for free
				</Link>
			</div>
		</header>
	);
}
