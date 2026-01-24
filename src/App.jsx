function App() {

  return (
    <>

      <body className="body">

        <header className="header container-flex">

          <div className="first-logo container-flex">

            <img src="./img/dc-logo.png" alt="DC Logo" />

          </div>

          <nav className="nav container-flex">

            <h3><a href="#">Characters</a></h3>
            <h3><a href="#">Comics</a></h3>
            <h3><a href="#">Movies</a></h3>
            <h3><a href="#">TV</a></h3>
            <h3><a href="#">Games</a></h3>
            <h3><a href="#">Collectibles</a></h3>
            <h3><a href="#">Videos</a></h3>
            <h3><a href="#">Fans</a></h3>
            <h3><a href="#">News</a></h3>
            <h3><a href="#">Shop</a></h3>
          </nav>



        </header>

        <main>

          <div className="black-bg container-flex">

            <h2 className="white-text">&#8594; Content goes here &#8592;</h2>

          </div>

          <div className="blue-bg container-flex">

            <img className="icon" src="./img/buy-comics-digital-comics.png" alt="DC Icon" />
            <h4>Digital Comics</h4>

            <img className="icon" src="./img/buy-comics-merchandise.png" alt="DC Icon" />
            <h4>DC Merchandise</h4>

            <img className="icon" src="./img/buy-comics-subscriptions.png" alt="DC Icon" />
            <h4>Subscription</h4>

            <img className="icon" src="./img/buy-comics-shop-locator.png" alt="DC Icon" />
            <h4>Comic Shop Locator</h4>

            <img className="icon" src="./img/buy-dc-power-visa.svg" alt="DC Icon" />
            <h4>DC Power Visa</h4>

          </div>

        </main>

        <footer className="footer">

          <div className="link container-flex">

            <div className="contacts container-flex">

              <section className="section">

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
              <section className="section">

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
              <section className="section">

                <h2>SITES</h2>
                <p>DC</p>
                <p>MAD Magazine</p>
                <p>DC Kids</p>
                <p>DC Universe</p>
                <p>DC Power Visa</p>

              </section>

            </div>

            <div className="bg-logo container-flex">

              <img src="./img/dc-logo-bg.png" alt="DC Logo" />

            </div>

          </div>

          <div className="social container-flex">

            <div className="btn-section container-flex">

              <button className="btn">SIGN-UP NOW!</button>

            </div>

            <div className="social-section container-flex">

              <h4>FOLLOW US</h4>
              <img src="./img/footer-facebook.png" alt="Social Icon" />
              <img src="./img/footer-twitter.png" alt="Social Icon" />
              <img src="./img/footer-youtube.png" alt="Social Icon" />
              <img src="./img/footer-pinterest.png" alt="Social Icon" />
              <img src="./img/footer-periscope.png" alt="Social Icon" />

            </div>

          </div>

        </footer>

      </body>

    </>

  )
}

export default App
