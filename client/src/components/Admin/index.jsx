import styles from "./styles.module.css";
import React from 'react';
const Admin = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("Userfirstname")
        localStorage.removeItem("Admin")
        window.location.reload();

    };



    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>Bitworld  </h1>
                <h1>Hello,Admin </h1>
                <button className={styles.white_btn} onClick={handleLogout}>
                    Logout
                </button>
            </nav>
        </div>
    );
};

export default Admin;
