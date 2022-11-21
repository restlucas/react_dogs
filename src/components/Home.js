import React from 'react';
import styles from './Header.module.css';
import Feed from './Feed/Feed';

const Home = () => {
    return (
        <section className="container mainContainer">
            {/* <Loading /> */}
            <Feed />
        </section>
    )
}

export default Home;