export const sendContactForm = async (data: any) => {
	fetch("/api/mail", {
		method: "post",
		body: JSON.stringify(data, null, 2),
	}).then((res) => {
		if (!res.ok) throw new Error("Failed to send message");
		return res.json();
	});
};
