import Head from "next/head";
import Image from "next/image";
import {motion} from "framer-motion";
import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>BlueInventory</title>
				<meta name="description" content="Generated by create next app" />
				{/* <!-- Website Icon --> */}
				<link rel="icon" href="/img/mainImages/B.png" />
				{/* <!-- Bootstrap CSS --> */}
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
					crossOrigin="anonymous"
				/>
				{/* <!-- Bootstrap Icon Link --> */}
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
				/>
			</Head>

			<main className={styles.main}>
				<div className="container">
					<div className={styles.login}>
						<div className={styles.content}>
							<div className={styles.InputSection}>
								<div className={styles.content}>
									<h2 className={styles.title}>Blue Inventory</h2>
									<h2>Get Started</h2>
									<h5>
										Already have an account? <span>Sign in</span>
									</h5>
									<form action="" className={styles.inputBox}>
										<h5>UserID</h5>
										<input
											type="text"
											id="userID"
											name="username"
											value="usernameID"
										></input>
										<br></br>
										{/* Submit Button */}
										<h5>Password</h5>
										<input
											type="text"
											id="userID"
											name="password"
											value="password"
										></input>
										<br></br>
										{/* Submit Button */}
										<h5>Role</h5>
										<select name="accountRoles" id="cars">
											<option value="admin">Admin</option>
											<option value="employee">Employee</option>
										</select>
										{/* Submit Button */}
										<input
											type="submit"
											value="Submit"
											className={styles.submitButton}
										></input>
									</form>
									<h5 className={styles.termsAgreement}>
										By signing up, I agree to the <span>Terms of Service </span>
										and <span>Privacy Policy</span>
									</h5>
								</div>
							</div>
							<div className={styles.ImageSection}>
								{/* <Image
									src="/otherImages/nike-just-do-it.jpg"
									alt="Picture of the author"
									width="100%"
									height="45%"
									layout="responsive"
									objectFit="contain"
								></Image> */}
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
