export interface IMailOptions {
	from: string;
	to: string;
}

export interface IContactMessageFields {
	firstName: string;
	lastName: string;
	email: string;
	subject: string;
	message: string;
}

export interface IGenerateEmailContent {
	text: string;
	html: string;
}
