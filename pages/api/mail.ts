// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {mailOptions, transporter} from "../../config/nodemailer";

interface contactMessageFields {
	firstName: string;
	lastName: string;
	email: string;
	subject: string;
	message: string;
}

interface generateEmailContent {
	text: string;
	html: string;
}

const contactMessageFields: contactMessageFields | any = {
	firstName: "First Name",
	lastName: "Last Name",
	email: "Email",
	subject: "Subject",
	message: "Message",
};

const generateEmailContent = (data: any): generateEmailContent => {
	/* Collects all input data 
	and returns as a long string */
	const stringData: string = Object.entries(data).reduce(
		(str, [key, val]) =>
			(str += `${contactMessageFields[key]}: \n${val} \n \n`),
		""
	);

	/* Collects all input data and 
	returns as a html rendered string */
	const htmlData: string = Object.entries(data).reduce(
		(str, [key, val]) =>
			(str += `<h class="form-heading" align="left">${contactMessageFields[key]}</h> <p class="form-answer" align="left">${val}</p>`),
		""
	);

	// Email Header Notification HTML Template
	const html: string = `
		<!DOCTYPE html>
		<html>
			<head>
				<title></title>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<style type="text/css">
					* {
						box-sizing: border-box;
						font-family: "Inter", Arial, "Helvetica Neue", Helvetica, sans-serif;
					}
					body,
					table,
					td,
					a {
						-webkit-text-size-adjust: 100%;
						-ms-text-size-adjust: 100%;
					}
					table {
						border-collapse: collapse !important;
					}
					body {
						height: 100% !important;
						margin: 0 !important;
						padding: 0 !important;
						width: 100% !important;
					}
					@media screen and (max-width: 525px) {
						.wrapper {
							width: 100% !important;
							max-width: 100% !important;
						}
						.responsive-table {
							width: 100% !important;
						}
						.padding {
							padding: 10px 5% 15px 5% !important;
						}
						.section-padding {
							padding: 0 15px 50px 15px !important;
						}
					}
					.form-container {
						margin-bottom: 24px;
						padding: 20px;
						border: 1px dashed #ccc;
					}
					.form-heading {
						color: #09275e;
						font-weight: 400;
						text-align: left;
						line-height: 20px;
						font-size: 18px;
						margin: 0 0 8px;
						padding: 0;
					}
					.form-answer {
						color: #09275e;
						font-weight: 300;
						text-align: left;
						line-height: 20px;
						font-size: 16px;
						margin: 0 0 24px;
						padding: 0;
					}
					div[style*="margin: 16px 0;"] {
						margin: 0 !important;
					}
				</style>
			</head>
			<body
				style="margin: 0 !important; padding: 0 !important; background: #001640"
			>
				<div
					style="
						display: none;
						font-size: 1px;
						color: #fefefe;
						line-height: 1px;
						max-height: 0px;
						max-width: 0px;
						opacity: 0;
						overflow: hidden;
					"
				></div>
				<table border="0" cellpadding="0" cellspacing="0" width="100%">
					<tr>
						<td
							bgcolor="#ffffff"
							align="center"
							style="padding: 10px 15px 30px 15px"
							class="section-padding"
						>
							<table
								border="0"
								cellpadding="0"
								cellspacing="0"
								width="100%"
								style="max-width: 500px"
								class="responsive-table"
							>
								<tr>
									<td>
										<table width="100%" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td>
													<table
														width="100%"
														border="0"
														cellspacing="0"
														cellpadding="0"
													>
														<tr>
															<td
																style="
																	padding: 0 0 0 0;
																	font-size: 16px;
																	line-height: 25px;
																	color: #09275e;
																	font-family: Inter, Arial, Helvetica Neue,
																		Helvetica, sans-serif;
																"
																class="padding message-content"
															>
																<h2>New Contact Message</h2>
																<div class="form-container">${htmlData}</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</body>
		</html>
	`;
	return {
		text: stringData,
		html: html,
	};
};

export default async function handler(req: any, res: any) {
	if (req.method === "POST") {
		const body: any = JSON.parse(req.body);
		// Contact Form HTML Template
		const html: string = `
			<!DOCTYPE html>

			<html
				lang="en"
				xmlns:o="urn:schemas-microsoft-com:office:office"
				xmlns:v="urn:schemas-microsoft-com:vml"
			>
				<head>
					<title></title>
					<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
					<meta content="width=device-width, initial-scale=1.0" name="viewport" />
					<!--[if mso
						]><xml
							><o:OfficeDocumentSettings
								><o:PixelsPerInch>96</o:PixelsPerInch
								><o:AllowPNG /></o:OfficeDocumentSettings></xml
					><![endif]-->
					<!--[if !mso]><!-->
					<link
						href="https://fonts.googleapis.com/css?family=Inter"
						rel="stylesheet"
						type="text/css"
					/>
					<!--<![endif]-->
					<style>
						* {
							box-sizing: border-box;
							font-family: "Inter", Arial, "Helvetica Neue", Helvetica, sans-serif;
						}

						body {
							margin: 0;
							padding: 0;
						}

						a[x-apple-data-detectors] {
							color: inherit !important;
							text-decoration: inherit !important;
						}

						#MessageViewBody a {
							color: inherit;
							text-decoration: none;
						}

						p {
							line-height: inherit;
						}

						.desktop_hide,
						.desktop_hide table {
							mso-hide: all;
							display: none;
							max-height: 0px;
							overflow: hidden;
						}

						.image_block img + div {
							display: none;
						}

						.menu_block.desktop_hide .menu-links span {
							mso-hide: all;
						}

						@media (max-width: 520px) {
							.desktop_hide table.icons-inner,
							.social_block.desktop_hide .social-table {
								display: inline-block !important;
							}

							.icons-inner {
								text-align: center;
							}

							.icons-inner td {
								margin: 0 auto;
							}

							.image_block img.big,
							.row-content {
								width: 100% !important;
							}

							.mobile_hide {
								display: none;
							}

							.stack .column {
								width: 100%;
								display: block;
							}

							.mobile_hide {
								min-height: 0;
								max-height: 0;
								max-width: 0;
								overflow: hidden;
								font-size: 0px;
							}

							.desktop_hide,
							.desktop_hide table {
								display: table !important;
								max-height: none !important;
							}

							.reverse {
								display: table;
								width: 100%;
							}

							.reverse .column.first {
								display: table-footer-group !important;
							}

							.reverse .column.last {
								display: table-header-group !important;
							}

							.row-4 td.column.first .border,
							.row-4 td.column.last .border {
								padding: 0 20px;
								border-top: 0;
								border-right: 0px;
								border-bottom: 0;
								border-left: 0;
							}
						}
					</style>
				</head>
				<body
					style="
						background-color: #001640;
						margin: 0;
						padding: 0;
						-webkit-text-size-adjust: none;
						text-size-adjust: none;
					"
				>
					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						class="nl-container"
						role="presentation"
						style="
							mso-table-lspace: 0pt;
							mso-table-rspace: 0pt;
							background-color: #001640;
						"
						width="100%"
					>
						<tbody>
							<tr>
								<td>
									<table
										align="center"
										border="0"
										cellpadding="0"
										cellspacing="0"
										class="row row-1"
										role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
										width="100%"
									>
										<tbody>
											<tr>
												<td>
													<table
														align="center"
														border="0"
														cellpadding="0"
														cellspacing="0"
														class="row-content stack"
														role="presentation"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															background-color: #001640;
															color: #001640;
															width: 500px;
														"
														width="500"
													>
														<tbody>
															<tr>
																<td
																	class="column column-1"
																	style="
																		mso-table-lspace: 0pt;
																		mso-table-rspace: 0pt;
																		font-weight: 900;
																		text-align: left;
																		padding-bottom: 40px;
																		padding-left: 20px;
																		padding-right: 20px;
																		padding-top: 40px;
																		vertical-align: top;
																		border-top: 0px;
																		border-right: 0px;
																		border-bottom: 0px;
																		border-left: 0px;
																	"
																	width="100%"
																>
																	<table
																		border="0"
																		cellpadding="0"
																		cellspacing="0"
																		class="image_block block-1"
																		role="presentation"
																		style="
																			mso-table-lspace: 0pt;
																			mso-table-rspace: 0pt;
																		"
																		width="100%"
																	>
																		<tr>
																			<td
																				class="pad"
																				style="
																					padding-bottom: 30px;
																					width: 100%;
																					padding-right: 0px;
																					padding-left: 0px;
																				"
																			>
																				<div
																					align="center"
																					class="alignment"
																					style="line-height: 10px"
																				>
																					<a
																						href="http://www.example.com/"
																						style="outline: none"
																						tabindex="-1"
																						target="_blank"
																						><img
																							alt="BlueInventory Logo"
																							src="https://cmsblueinventory.com/wp-content/uploads/2022/11/cropped-BlueInventory-favicon-Two.png"
																							style="
																								border: 0;
																								width: 75px;
																								height: 75px;
																								display: block;
																								object-fit: contain;
																								object-position: center;
																							"
																							title="Logo"
																							width="175"
																					/></a>
																				</div>
																			</td>
																		</tr>
																	</table>
																	<table
																		border="0"
																		cellpadding="0"
																		cellspacing="0"
																		class="menu_block block-2"
																		role="presentation"
																		style="
																			mso-table-lspace: 0pt;
																			mso-table-rspace: 0pt;
																		"
																		width="100%"
																	>
																		<tr>
																			<td
																				class="pad"
																				style="
																					color: #ffffff;
																					font-family: inherit;
																					font-size: 16px;
																					text-align: center;
																				"
																			>
																				<table
																					border="0"
																					cellpadding="0"
																					cellspacing="0"
																					role="presentation"
																					style="
																						mso-table-lspace: 0pt;
																						mso-table-rspace: 0pt;
																					"
																					width="100%"
																				>
																					<tr>
																						<td
																							class="alignment"
																							style="
																								text-align: center;
																								font-size: 0px;
																							"
																						>
																							<div class="menu-links">
																								<!--[if mso]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style=""><tr style="text-align:center;"><!
																								[endif]-->[endif]--><!--[if mso]><td style="padding-top:0px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]-->
																								<a
																									href="https://blueinventory.vercel.app/"
																									style="
																										mso-hide: false;
																										padding-top: 0px;
																										padding-bottom: 5px;
																										padding-left: 15px;
																										padding-right: 15px;
																										display: inline-block;
																										color: #ffffff;
																										font-size: 16px;
																										text-decoration: none;
																										letter-spacing: 0.05rem;
																										text-transform: uppercase;
																									"
																									target="_self"
																								>
																									Home
																								</a>
																								><!--[if mso]></td><!
																								[endif]-->[endif]--><!--[if mso]><td style="padding-top:0px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]-->
																								<a
																									href="https://cmsblueinventory.com/wp-admin/"
																									style="
																										mso-hide: false;
																										padding-top: 0px;
																										padding-bottom: 5px;
																										padding-left: 15px;
																										padding-right: 15px;
																										display: inline-block;
																										color: #ffffff;
																										font-size: 16px;
																										text-decoration: none;
																										letter-spacing: 0.05rem;
																										text-transform: uppercase;
																									"
																									target="_self"
																								>
																									Login
																								</a>
																								><!--[if mso]></td><!
																								[endif]-->[endif]--><!--[if mso]><td style="padding-top:0px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]-->
																								<a
																									href="https://blueinventory.vercel.app/contact"
																									style="
																										mso-hide: false;
																										padding-top: 0px;
																										padding-bottom: 5px;
																										padding-left: 15px;
																										padding-right: 15px;
																										display: inline-block;
																										color: #ffffff;
																										font-size: 16px;
																										text-decoration: none;
																										letter-spacing: 0.05rem;
																										text-transform: uppercase;
																									"
																									target="_self"
																								>
																									Contact
																								</a>
																								><!--[if mso]></td><!
																								[endif]-->[endif]--><!--[if mso]></tr></table><![endif]-->
																							</div>
																						</td>
																					</tr>
																				</table>
																			</td>
																		</tr>
																	</table>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
									<table
										align="center"
										border="0"
										cellpadding="0"
										cellspacing="0"
										class="row row-2"
										role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
										width="100%"
									>
										<tbody>
											<tr>
												<td>
													<table
														align="center"
														border="0"
														cellpadding="0"
														cellspacing="0"
														class="row-content stack"
														role="presentation"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															background-color: #2563eb;
															color: #001640;
															width: 100%;
															max-width: 500px;
														"
														width="500"
													>
														<tbody>
															<tr>
																<td
																	class="column column-1"
																	style="
																		mso-table-lspace: 0pt;
																		mso-table-rspace: 0pt;
																		font-weight: 400;
																		text-align: left;
																		padding-bottom: 10px;
																		padding-left: 20px;
																		padding-right: 20px;
																		padding-top: 10px;
																		vertical-align: top;
																		border-top: 0px;
																		border-right: 0px;
																		border-bottom: 0px;
																		border-left: 0px;
																	"
																	width="100%"
																>
																	<table
																		border="0"
																		cellpadding="0"
																		cellspacing="0"
																		class="heading_block block-1"
																		role="presentation"
																		style="
																			mso-table-lspace: 0pt;
																			mso-table-rspace: 0pt;
																		"
																		width="100%"
																	>
																		<tr>
																			<td
																				class="pad"
																				style="text-align: center; width: 100%"
																			>
																				<h1
																					style="
																						margin: 0;
																						color: #ffffff;
																						direction: ltr;
																						font-size: 16px;
																						font-weight: 400;
																						letter-spacing: 2px;
																						line-height: 120%;
																						text-align: center;
																						width: 100%;
																						margin: 0 auto;
																						max-width: 450px;
																					"
																				>
																					BlueInventory is your powerful
																					non-E-commerce inventory management
																					solution.
																				</h1>
																			</td>
																		</tr>
																	</table>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
									<table
										align="center"
										border="0"
										cellpadding="0"
										cellspacing="0"
										class="row row-3"
										role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
										width="100%"
									>
										<tbody>
											<tr>
												<td>
													<table
														align="center"
														border="0"
														cellpadding="0"
														cellspacing="0"
														class="row-content stack"
														role="presentation"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															background-color: #001640;
															color: #001640;
															width: 500px;
														"
														width="500"
													>
														<tbody>
															<tr>
																<td
																	class="column column-1"
																	style="
																		mso-table-lspace: 0pt;
																		mso-table-rspace: 0pt;
																		font-weight: 400;
																		text-align: left;
																		vertical-align: top;
																		border-top: 0px;
																		border-right: 0px;
																		border-bottom: 0px;
																		border-left: 0px;
																	"
																	width="100%"
																>
																	<div
																		class="spacer_block block-1"
																		style="
																			height: 50px;
																			line-height: 50px;
																			font-size: 1px;
																		"
																	>
																		 
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
									<table
										align="center"
										border="0"
										cellpadding="0"
										cellspacing="0"
										class="row row-4"
										role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
										width="100%"
									>
										<tbody>
											<tr>
												<td>
													<table
														align="center"
														border="0"
														cellpadding="0"
														cellspacing="0"
														class="row-content stack"
														role="presentation"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															background-color: #001640;
															color: #001640;
															width: 500px;
														"
														width="500"
													>
														<tbody>
															<tr class="reverse">
																<td
																	class="column column-1 first"
																	style="
																		mso-table-lspace: 0pt;
																		mso-table-rspace: 0pt;
																		font-weight: 400;
																		text-align: left;
																		background-color: #001640;
																		padding-left: 20px;
																		padding-right: 20px;
																		vertical-align: top;
																		border-top: 0px;
																		border-right: 0px;
																		border-bottom: 0px;
																		border-left: 0px;
																	"
																	width="58.333333333333336%"
																>
																	<div class="border">
																		<table
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			class="heading_block block-1"
																			role="presentation"
																			style="
																				mso-table-lspace: 0pt;
																				mso-table-rspace: 0pt;
																			"
																			width="100%"
																		>
																			<tr>
																				<td
																					class="pad"
																					style="text-align: center; width: 100%"
																				>
																					<h2
																						style="
																							margin: 0;
																							color: #e8b042;
																							direction: ltr;
																							font-size: 30px;
																							font-weight: 700;
																							letter-spacing: 1px;
																							line-height: 120%;
																							text-align: left;
																							margin-top: 0;
																							margin-bottom: 0;
																							text-transform: uppercase;
																						"
																					>
																						Customer Enquiry
																					</h2>
																				</td>
																			</tr>
																		</table>
																	</div>
																</td>
																<td
																	class="column column-2 last"
																	style="
																		mso-table-lspace: 0pt;
																		mso-table-rspace: 0pt;
																		font-weight: 400;
																		text-align: left;
																		padding-left: 20px;
																		padding-right: 20px;
																		vertical-align: top;
																		border-top: 0px;
																		border-right: 0px;
																		border-bottom: 0px;
																		border-left: 0px;
																	"
																	width="41.666666666666664%"
																>
																	<div class="border">
																		<table
																			border="0"
																			cellpadding="0"
																			cellspacing="0"
																			class="divider_block block-1"
																			role="presentation"
																			style="
																				mso-table-lspace: 0pt;
																				mso-table-rspace: 0pt;
																			"
																			width="100%"
																		>
																			<tr>
																				<td
																					class="pad"
																					style="
																						padding-bottom: 20px;
																						padding-top: 20px;
																					"
																				>
																					<div align="center" class="alignment">
																						<table
																							border="0"
																							cellpadding="0"
																							cellspacing="0"
																							role="presentation"
																							style="
																								mso-table-lspace: 0pt;
																								mso-table-rspace: 0pt;
																							"
																							width="100%"
																						>
																							<tr>
																								<td
																									class="divider_inner"
																									style="
																										font-size: 1px;
																										line-height: 1px;
																										border-top: 1px solid #e8b042;
																									"
																								>
																									<span></span>
																								</td>
																							</tr>
																						</table>
																					</div>
																				</td>
																			</tr>
																		</table>
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
									<table
										align="center"
										border="0"
										cellpadding="0"
										cellspacing="0"
										class="row row-5"
										role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
										width="100%"
									>
										<tbody>
											<tr>
												<td>
													<table
														align="center"
														border="0"
														cellpadding="0"
														cellspacing="0"
														class="row-content stack"
														role="presentation"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															background-color: #001640;
															color: #001640;
															width: 500px;
														"
														width="500"
													>
														<tbody>
															<tr>
																<td
																	class="column column-1"
																	style="
																		mso-table-lspace: 0pt;
																		mso-table-rspace: 0pt;
																		font-weight: 400;
																		text-align: left;
																		padding-bottom: 60px;
																		padding-left: 20px;
																		padding-right: 20px;
																		padding-top: 30px;
																		vertical-align: top;
																		border-top: 0px;
																		border-right: 0px;
																		border-bottom: 0px;
																		border-left: 0px;
																	"
																	width="100%"
																>
																	<table
																		border="0"
																		cellpadding="0"
																		cellspacing="0"
																		class="text_block block-1"
																		role="presentation"
																		style="
																			mso-table-lspace: 0pt;
																			mso-table-rspace: 0pt;
																			word-break: break-word;
																		"
																		width="100%"
																	>
																		<tr>
																			<td class="pad" style="padding-top: 30px">
																				<div style="font-family: sans-serif">
																					<div
																						class=""
																						style="
																							font-size: 14px;

																							mso-line-height-alt: 16.8px;
																							color: #ffffff;
																							line-height: 1.2;
																						"
																					>
																						<h3 style="font-size: 18px">Name:</h3>
																						<p
																							style="
																								margin: 0;
																								font-size: 16px;
																								mso-line-height-alt: 19.2px;
																							"
																						>
																							<span style="font-size: 16px">
																								${
																									(body.firstName,
																									body.lastName)
																										? `${body.firstName} ${body.lastName}`
																										: `${body.fullName}`
																								}
																							</span>
																						</p>
																						<h3 style="font-size: 18px">Email:</h3>
																						<p
																							style="
																								margin: 0;
																								font-size: 16px;
																								mso-line-height-alt: 19.2px;
																							"
																						>
																							<span>
																								<a
																									href="mailto:${body.email}"
																									style="
																										font-size: 16px;
																										color: #e8b042;
																									"
																								>
																									${body.email}
																								</a>
																							</span>
																						</p>
																						<h3 style="font-size: 18px">Subject:</h3>
																						<p
																							style="
																								margin: 0;
																								font-size: 16px;
																								mso-line-height-alt: 19.2px;
																							"
																						>
																							<span style="font-size: 16px">
																								${body.subject}
																							</span>
																						</p>
																						<h3 style="font-size: 18px">Message:</h3>
																						<p
																							style="
																								margin: 0;
																								font-size: 16px;
																								mso-line-height-alt: 19.2px;
																							"
																						>
																							<span
																								style="font-size: 16px; width: auto"
																							>
																								${body.message}
																							</span>
																						</p>
																					</div>
																				</div>
																			</td>
																		</tr>
																	</table>
																	<table
																		border="0"
																		cellpadding="0"
																		cellspacing="0"
																		class="button_block block-2"
																		role="presentation"
																		style="
																			mso-table-lspace: 0pt;
																			mso-table-rspace: 0pt;
																		"
																		width="100%"
																	>
																		<tr>
																			<td
																				class="pad"
																				style="padding-top: 30px; text-align: center"
																			>
																				<div align="center" class="alignment">
																					<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com/" style="height:42px;width:215px;v-text-anchor:middle;" arcsize="0%" stroke="false" fillcolor="#2563eb"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#001640; font-family:Arial, sans-serif; font-size:16px"><!
																					[endif]--><a
																						href="http://www.example.com/"
																						style="
																							text-decoration: none;
																							display: inline-block;
																							color: #001640;
																							background-color: #2563eb;
																							border-radius: 0px;
																							width: auto;
																							border-top: 0px solid #2563eb;
																							font-weight: 700;
																							border-right: 0px solid #2563eb;
																							border-bottom: 0px solid #2563eb;
																							border-left: 0px solid #2563eb;
																							padding-top: 5px;
																							padding-bottom: 5px;
																							font-size: 16px;
																							text-align: center;
																							mso-border-alt: none;
																							word-break: keep-all;
																						"
																						target="_blank"
																						><span
																							style="
																								padding-left: 20px;
																								padding-right: 20px;
																								font-size: 16px;
																								display: inline-block;
																								letter-spacing: 1px;
																							"
																						>
																							<span
																								dir="ltr"
																								style="
																									word-break: break-word;
																									line-height: 32px;
																								"
																							>
																								<strong
																									style="
																										word-break: break-word;
																										line-height: 32px;
																										font-weight: 700;
																										text-transform: uppercase;
																									"
																								>
																									Wordpress Login
																								</strong>
																							</span>
																						</span>
																					</a>
																				</div>
																			</td>
																		</tr>
																	</table>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
									<table
										align="center"
										border="0"
										cellpadding="0"
										cellspacing="0"
										class="row row-6"
										role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
										width="100%"
									>
										<tbody>
											<tr>
												<td>
													<table
														align="center"
														border="0"
														cellpadding="0"
														cellspacing="0"
														class="row-content stack"
														role="presentation"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															background-color: #001640;
															color: #001640;
															width: 500px;
														"
														width="500"
													>
														<tbody>
															<tr>
																<td
																	class="column column-1"
																	style="
																		mso-table-lspace: 0pt;
																		mso-table-rspace: 0pt;
																		font-weight: 400;
																		text-align: left;
																		padding-bottom: 50px;
																		padding-left: 20px;
																		padding-right: 20px;
																		padding-top: 30px;
																		vertical-align: top;
																		border-top: 0px;
																		border-right: 0px;
																		border-bottom: 0px;
																		border-left: 0px;
																	"
																	width="100%"
																>
																	<table
																		border="0"
																		cellpadding="0"
																		cellspacing="0"
																		class="image_block block-1"
																		role="presentation"
																		style="
																			mso-table-lspace: 0pt;
																			mso-table-rspace: 0pt;
																		"
																		width="100%"
																	>
																		<tr>
																			<td
																				class="pad"
																				style="
																					padding-top: 30px;
																					width: 100%;
																					padding-right: 0px;
																					padding-left: 0px;
																				"
																			>
																				<div
																					align="center"
																					class="alignment"
																					style="line-height: 10px"
																				>
																					<img
																						alt="Artist"
																						class="big"
																						src="https://cmsblueinventory.com/wp-content/uploads/2023/04/pexels-mikhail-nilov-8297478-scaled.jpg"
																						style="
																							border: 0;
																							width: 100%;
																							height: 250px;
																							display: block;
																							margin: 0 auto;
																							max-width: 550px;
																							object-fit: cover;
																							object-position: center;
																						"
																						title="Artist"
																					/>
																				</div>
																			</td>
																		</tr>
																	</table>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
									<table
										align="center"
										border="0"
										cellpadding="0"
										cellspacing="0"
										class="row row-7"
										role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
										width="100%"
									>
										<tbody>
											<tr>
												<td>
													<table
														align="center"
														border="0"
														cellpadding="0"
														cellspacing="0"
														class="row-content stack"
														role="presentation"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															background-color: #001640;
															color: #001640;
															width: 500px;
														"
														width="500"
													>
														<tbody>
															<tr>
																<td
																	class="column column-1"
																	style="
																		mso-table-lspace: 0pt;
																		mso-table-rspace: 0pt;
																		font-weight: 400;
																		text-align: left;
																		padding-bottom: 15px;
																		padding-left: 20px;
																		padding-right: 20px;
																		padding-top: 10px;
																		vertical-align: top;
																		border-top: 0px;
																		border-right: 0px;
																		border-bottom: 0px;
																		border-left: 0px;
																	"
																	width="100%"
																>
																	<table
																		border="0"
																		cellpadding="0"
																		cellspacing="0"
																		class="image_block block-1"
																		role="presentation"
																		style="
																			mso-table-lspace: 0pt;
																			mso-table-rspace: 0pt;
																			margin-bottom: 10px;
																		"
																		width="100%"
																	>
																		<tr>
																			<td
																				class="pad"
																				style="
																					padding-bottom: 15px;
																					width: 100%;
																					padding-right: 0px;
																					padding-left: 0px;
																				"
																			>
																				<div
																					align="center"
																					class="alignment"
																					style="line-height: 10px"
																				>
																					<a
																						href="http://www.example.com/"
																						style="outline: none"
																						tabindex="-1"
																						target="_blank"
																					>
																						<img
																							alt="BlueInventory Logo"
																							src="https://cmsblueinventory.com/wp-content/uploads/2022/11/cropped-BlueInventory-favicon-Two.png"
																							style="
																								border: 0;
																								width: 75px;
																								height: 75px;
																								display: block;
																								object-fit: contain;
																								object-position: center;
																							"
																							title="Logo"
																							width="175"
																					/></a>
																				</div>
																			</td>
																		</tr>
																	</table>
																	<table
																		border="0"
																		cellpadding="0"
																		cellspacing="0"
																		class="social_block block-2"
																		role="presentation"
																		style="
																			mso-table-lspace: 0pt;
																			mso-table-rspace: 0pt;
																		"
																		width="100%"
																	>
																		<tr>
																			<td
																				class="pad"
																				style="
																					padding-bottom: 10px;
																					padding-top: 10px;
																					text-align: center;
																					padding-right: 0px;
																					padding-left: 0px;
																				"
																			>
																				<div align="center" class="alignment">
																					<table
																						border="0"
																						cellpadding="0"
																						cellspacing="0"
																						class="social-table"
																						role="presentation"
																						style="
																							mso-table-lspace: 0pt;
																							mso-table-rspace: 0pt;
																							display: inline-block;
																						"
																						width="184px"
																					>
																						<tr
																							style="
																								display: flex;
																								flex-direction: row;
																								grid-gap: 2rem;
																							"
																						>
																							<td style="padding: 0 7px 0 7px">
																								<a
																									href="https://www.facebook.com/"
																									target="_blank"
																								>
																									<svg
																										height="100%"
																										version="1.1"
																										title="Facebook Link"
																										viewBox="0 0 512 512"
																										width="20"
																										height="20"
																										style="
																											display: block;
																											height: auto;
																											border: 0;
																										"
																									>
																										<path
																											fill="#e8b042"
																											d="M512,257.555c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
																										/>
																									</svg>
																								</a>
																							</td>
																							<td style="padding: 0 7px 0 7px">
																								<a
																									href="https://www.linkedin.com/"
																									target="_blank"
																								>
																									<svg
																										height="100%"
																										version="1.1"
																										title="LinkedIn Link"
																										viewBox="0 0 512 512"
																										width="20"
																										height="20"
																										style="
																											display: block;
																											height: auto;
																											border: 0;
																										"
																									>
																										<path
																											fill="#e8b042"
																											d="M473.305,-1.353c20.88,0 37.885,16.533 37.885,36.926l0,438.251c0,20.393 -17.005,36.954 -37.885,36.954l-436.459,0c-20.839,0 -37.773,-16.561 -37.773,-36.954l0,-438.251c0,-20.393 16.934,-36.926 37.773,-36.926l436.459,0Zm-37.829,436.389l0,-134.034c0,-65.822 -14.212,-116.427 -91.12,-116.427c-36.955,0 -61.739,20.263 -71.867,39.476l-1.04,0l0,-33.411l-72.811,0l0,244.396l75.866,0l0,-120.878c0,-31.883 6.031,-62.773 45.554,-62.773c38.981,0 39.468,36.461 39.468,64.802l0,118.849l75.95,0Zm-284.489,-244.396l-76.034,0l0,244.396l76.034,0l0,-244.396Zm-37.997,-121.489c-24.395,0 -44.066,19.735 -44.066,44.047c0,24.318 19.671,44.052 44.066,44.052c24.299,0 44.026,-19.734 44.026,-44.052c0,-24.312 -19.727,-44.047 -44.026,-44.047Z"
																										/>
																									</svg>
																								</a>
																							</td>
																							<td style="padding: 0 7px 0 7px">
																								<a
																									href="https://twitter.com/"
																									target="_blank"
																								>
																									<svg
																										height="100%"
																										version="1.1"
																										title="Twitter Link"
																										viewBox="0 0 512 512"
																										width="20"
																										height="20"
																										style="
																											display: block;
																											height: auto;
																											border: 0;
																										"
																									>
																										<path
																											fill="#e8b042"
																											d="M161.014,464.013c193.208,0 298.885,-160.071 298.885,-298.885c0,-4.546 0,-9.072 -0.307,-13.578c20.558,-14.871 38.305,-33.282 52.408,-54.374c-19.171,8.495 -39.51,14.065 -60.334,16.527c21.924,-13.124 38.343,-33.782 46.182,-58.102c-20.619,12.235 -43.18,20.859 -66.703,25.498c-19.862,-21.121 -47.602,-33.112 -76.593,-33.112c-57.682,0 -105.145,47.464 -105.145,105.144c0,8.002 0.914,15.979 2.722,23.773c-84.418,-4.231 -163.18,-44.161 -216.494,-109.752c-27.724,47.726 -13.379,109.576 32.522,140.226c-16.715,-0.495 -33.071,-5.005 -47.677,-13.148l0,1.331c0.014,49.814 35.447,93.111 84.275,102.974c-15.464,4.217 -31.693,4.833 -47.431,1.802c13.727,42.685 53.311,72.108 98.14,72.95c-37.19,29.227 -83.157,45.103 -130.458,45.056c-8.358,-0.016 -16.708,-0.522 -25.006,-1.516c48.034,30.825 103.94,47.18 161.014,47.104"
																										/>
																									</svg>
																								</a>
																							</td>
																						</tr>
																					</table>
																				</div>
																			</td>
																		</tr>
																	</table>
																	<table
																		border="0"
																		cellpadding="0"
																		cellspacing="0"
																		class="text_block block-3"
																		role="presentation"
																		style="
																			mso-table-lspace: 0pt;
																			mso-table-rspace: 0pt;
																			word-break: break-word;
																		"
																		width="100%"
																	>
																		<tr>
																			<td
																				class="pad"
																				style="
																					padding-bottom: 10px;
																					padding-top: 10px;
																				"
																			>
																				<div>
																					<div
																						class=""
																						style="
																							font-size: 14px;
																							letter-spacing: 0.05rem;
																							mso-line-height-alt: 14.399999999999999px;
																							color: #ffffff;
																							line-height: 1.2;
																						"
																					>
																						<p
																							style="
																								width: 100%;
																								margin: 0 auto;
																								max-width: 350px;
																								text-align: center;
																								mso-line-height-alt: 14.399999999999999px;
																							"
																						>
																							© 2023 BlueInventory. All rights
																							reserved.
																						</p>
																					</div>
																				</div>
																			</td>
																		</tr>
																	</table>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<!-- End -->
				</body>
			</html>
		`;

		try {
			await transporter.sendMail({
				...mailOptions,
				...generateEmailContent(body),
				bcc: "toddowenmpeli@rocketmail.com",
				replyTo: body.email,
				subject: `${
					body.subject ? `New enquiry for ${body.subject}` : "Feedback Form"
				}`,
				text: "This is a test string",
				html: html,
			});

			return res.status(200).json({
				status: "success",
				message:
					"Thanks for your message! We'll endeavour to get back in touch with you as soon as possible.",
			});
		} catch (err) {
			console.log(err);

			return res.status(400).json({
				status: "error",
				message: "Something went wrong sending your enquiry. Please try again.",
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
