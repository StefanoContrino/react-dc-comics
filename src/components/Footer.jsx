import style from "./Footer.module.css"

function Footer() {
    return (

        <footer className={style.footer}>

            <div className={`${style.link} ${style["container-flex"]}`}>

                <div className={`${style.contacts} ${style["container-flex"]}`}>

                    <section className={style.section}>

                        <h2>DC COMICS</h2>
                        <p>Characters</p>
                        <p>Comics</p>
                        <p>Movies</p>
                        <p>TV</p>
                        <p>Games</p>
                        <p>Videos</p>
                        <p>News</p>

                        <h2>SHOP</h2>
                        <p>Shop DC</p>
                        <p>Shop DC Collectibles</p>

                    </section>
                    <section className={style.section}>

                        <h2>DC</h2>
                        <p>Terms Of Use</p>
                        <p>Privacy policy &#40;New&#41;</p>
                        <p>Ad Choices</p>
                        <p>Asvertising</p>
                        <p>Jobs</p>
                        <p>Subscriptions</p>
                        <p>Talent Workshops</p>
                        <p>CPSC Certificates</p>
                        <p>Rating</p>
                        <p>Shop Help</p>
                        <p>Contact Us</p>

                    </section>
                    <section className={style.section}>

                        <h2>SITES</h2>
                        <p>DC</p>
                        <p>MAD Magazine</p>
                        <p>DC Kids</p>
                        <p>DC Universe</p>
                        <p>DC Power Visa</p>

                    </section>

                </div>

                <div className={`${style["bg-logo"]} ${style["container-flex"]}`}>

                    <img src="./img/dc-logo-bg.png" alt="DC Logo" />

                </div>

            </div>

            <div className={`${style["social"]} ${style["container-flex"]}`}>

                <div className={`${style["btn-section"]} ${style["container-flex"]}`}>

                    <button className={style.btn}>SIGN-UP NOW!</button>

                </div>

                <div className={`${style["social-section"]} ${style["container-flex"]}`}>

                    < h4 > FOLLOW US</h4 >
                    <img src="./img/footer-facebook.png" alt="Social Icon" />
                    <img src="./img/footer-twitter.png" alt="Social Icon" />
                    <img src="./img/footer-youtube.png" alt="Social Icon" />
                    <img src="./img/footer-pinterest.png" alt="Social Icon" />
                    <img src="./img/footer-periscope.png" alt="Social Icon" />

                </div >

            </div >

        </footer >

    )
}


export default Footer;