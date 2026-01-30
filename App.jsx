import comics from "./comics.js"

function App() {


  const topLinks = [
    { nome: "Character", href: "#" },
    { nome: "Comics", href: "#" },
    { nome: "Movies", href: "#" },
    { nome: "TV", href: "#" },
    { nome: "Games", href: "#" },
    { nome: "Collectibles", href: "#" },
    { nome: "Videos", href: "#" },
    { nome: "Fans", href: "#" },
    { nome: "News", href: "#" },
    { nome: "Shop", href: "#" }
  ]

  const totalProducts = [

    { nome: "Digital Comics", classe: "icon", src: "./img/buy-comics-digital-comics.png", alt: "DC Icon" },
    { nome: "DC Merchandise", classe: "icon", src: "./img/buy-comics-merchandise.png", alt: "DC Icon" },
    { nome: "Subscription", classe: "icon", src: "./img/buy-comics-subscriptions.png", alt: "DC Icon" },
    { nome: "Comic Shop Locator", classe: "icon", src: "./img/buy-comics-shop-locator.png", alt: "DC Icon" },
    { nome: "DC Power Visa", classe: "icon", src: "./img/buy-dc-power-visa.svg", alt: "DC Icon" }
  ]


  return (
    <>

      <body className="body">

        <header className="header container-flex">

          <div className="first-logo container-flex">

            <img src="./img/dc-logo.png" alt="DC Logo" />

          </div>

          <nav className="nav container-flex">

            {topLinks.map(link => {
              return <h3><a href="link.href">{link.nome}</a></h3>
            })}



          </nav>

        </header>

        <main>

          <div className="jumbotron" >

          </div>

          <div className="black-bg container-flex">

            {comics.map(comic => {

              return (
                <div className="comics-container">
                  <img className="comics" src={comic.thumb} />
                  <h4 className="card-text">{comic.title}</h4>
                </div>
              )
            })}

          </div>

          <div className="blue-bg container-flex">

            {totalProducts.map(product => {
              return (
                <>
                  <img className={product.classe} src={product.src} alt={product.alt} />,
                  <h4>{product.nome}</h4>
                </>
              )
            })}


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
