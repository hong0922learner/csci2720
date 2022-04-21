import styles from "./styles.module.css";
import React from "react";
import { Link } from "react-router-dom";


const Home = () => {


    return (
        <div>
            <nav className={styles.navbar}>
                <h1> Hello, welcome to Weathering With Me</h1>
                <Link to="/signup">
                    <button type="button" className={styles.white_btn}>
                        Sign Up
                    </button>
                </Link>
            </nav>
            <main>


            </main>

        </div>
    )


}




export default Home;