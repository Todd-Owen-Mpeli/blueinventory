// Imports
import nodemailer from "nodemailer";
import {IMailOptions} from "@/types/mail/index";

const email: string | undefined = process.env.EMAIL_USER;
const pass: string | undefined = process.env.EMAIL_PASS;

export const transporter: any = nodemailer.createTransport({
	host: "gmail",
	service: "gmail",
	port: 587,
	secure: false,
	auth: {
		user: email,
		pass: pass,
	},
	tls: {rejectUnauthorized: false},
	logger: true,
	debug: true,
});

export const mailOptions: IMailOptions = {
	from: "info@blueinventory.com",
	to: `${email}`,
};
