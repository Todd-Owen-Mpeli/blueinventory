export default async function handler(req: any, res: any) {
	const amount = req?.body?.amount;
	const body = req?.body;
	if (req?.method === "POST") {
		try {
			res.status(200).json({
				status: "Ok",
				message: `Request Successful`,
				Amount: amount * 7,
				body: body,
			});
			console.log(body);
		} catch (err) {
			console.log(err);

			return res.status(400).json({
				status: "error",
				message: `Something went wrong sending your details. Please try again.`,
				data: err,
			});
		}
	} else {
		return res.status(400).json({
			status: "error",
			message: "Bad request. Please try again.",
		});
	}
}
