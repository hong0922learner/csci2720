import styles from "./styles.module.css";
import React from 'react';
const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("Userfirstname")
		localStorage.removeItem("Admin")
		window.location.reload();

	};
	const Username = localStorage.getItem("Userfirstname")


	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Hello,{Username} </h1>
				<a href="/checkweather">Check Weather</a>


				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>

			<label for="Location">location :</label>
			<input type="text" placeholder="Location Name"
				name="location"
				required></input>
		</div>
	);
};

export default Main;
