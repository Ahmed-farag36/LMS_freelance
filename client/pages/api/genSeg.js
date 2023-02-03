// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const KJUR = require("jsrsasign");

export default function handler(req, res) {
	const { meetingNumber, role } = req.body;
	const iat = Math.round((new Date().getTime() - 30000) / 1000);
	const exp = iat + 60 * 60 * 2;
	const oHeader = { alg: "HS256", typ: "JWT" };

	const oPayload = {
		sdkKey: process.env.SDK_KEY,
		mn: meetingNumber,
		role: role,
		iat: iat,
		exp: exp,
		appKey: process.env.SDK_KEY,
		tokenExp: iat + 60 * 60 * 2,
	};

	const sHeader = JSON.stringify(oHeader);
	const sPayload = JSON.stringify(oPayload);
	const sdkJWT = KJUR.jws.JWS.sign(
		"HS256",
		sHeader,
		sPayload,
		process.env.SDK_SECRET
	);
	res.json({ signature: sdkJWT });
}
