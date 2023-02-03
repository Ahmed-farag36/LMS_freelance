"use client";
import dynamic from "next/dynamic";
import { createRef } from "react";

export default function Webinar() {
	const zoomWindowRef = createRef();
	const zoomChatRef = createRef();

	async function handleJoin() {
		const ZoomMtgEmbedded = (await import("@zoomus/websdk/embedded")).default;
		const client = ZoomMtgEmbedded.createClient();
		client.init({
			zoomAppRoot: zoomWindowRef.current,
			language: "en-US",
			customize: {
				video: {
					isResizable: false,
					viewSizes: {
						default: {
							// width: "50vw",
							// height: "50vh",
						},
						ribbon: {
							width: 300,
							height: 700,
						},
					},
					popper: {
						disableDraggable: true,
					},
				},
				// chat: {
				// 	popper: {
				// 		disableDraggable: true,
				// 		anchorElement: zoomChatRef,
				// 		placement: "top",
				// 	},
				// },
			},
		});
		fetch("/api/genSeg", {
			method: "POST",
			headers: {
				"Content-Type": "Application/json",
			},
			body: JSON.stringify({
				role: 0,
				meetingNumber: "9215297956",
			}),
		})
			.then((res) => res.json())
			.then((data) =>
				client.join({
					sdkKey: "rzf7KvB1KsT9Xdcu6IajcI1YfPANbOKDmv6A",
					signature: data.signature,
					meetingNumber: "9215297956",
					password: "jM5HJS",
					userName: "react",
				})
			)
			.catch((err) => console.log(err));
	}

	return (
		<main className="">
			<div ref={zoomWindowRef} className="w-[50vw] h-[50vh] bg-black"></div>
			<div ref={zoomChatRef} className=""></div>
			<button onClick={handleJoin} className="btn btn-primary">
				Join
			</button>
		</main>
	);
}
