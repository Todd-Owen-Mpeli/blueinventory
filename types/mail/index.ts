export type IMailOptions = {
	from: string;
	to: string;
};
export type IContactMessageFields = {
	firstName: string;
	lastName: string;
	email: string;
	subject: string;
	message: string;
};
export type IGenerateEmailContent = {
	text: string;
	html: string;
};
