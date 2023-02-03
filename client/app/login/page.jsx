import Link from "next/link";
import Image from "next/image";
import loginImg from "../../public/pexels-1858406.jpg";
import { BsGoogle, BsFacebook } from "react-icons/bs";

export default function Login() {
	return (
		<main className="flex justify-between">
			<div className="form-control w-full max-w-xs mx-auto py-32 self-center">
				<h1 className="text-3xl font-extrabold mb-14">Login</h1>
				<label className="label">
					<span className="label-text">Email</span>
				</label>
				<input
					type="email"
					name="email"
					className="input input-bordered w-full max-w-xs"
				/>
				<label className="label">
					<span className="label-text">Password</span>
				</label>
				<input
					type="password"
					name="password"
					className="input input-bordered w-full max-w-xs"
				/>
				<Link href="/register">
					<label className="label cursor-pointer ">
						<span className="label-text text-xs">don't have account?</span>
					</label>
				</Link>
				<button type="submit" className="btn btn-primary w-40 self-center mt-5">
					Login
				</button>
				<Link href="">
					<label className="label cursor-pointer justify-center">
						<span className="label-text text-xs">forget your password?</span>
					</label>
				</Link>
				<div className="flex justify-center gap-2">
					<BsGoogle />
					<BsFacebook />
				</div>
			</div>
			<div className="col-span-2 w-1/3 relative">
				<Image src={loginImg} fill alt="decoration image" />
			</div>
		</main>
	);
}
