import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';



const Getproducts = () => {

  // Intialize hooks to help you manage state fo your application
  const[products, setProducts] = useState([]);
  const[loading,setLoading] = useState(false);
  const[error,setError] = useState("");

  // declare the navigate hook
  const navigate = useNavigate()

  // Below we specify the image base URL 
  const img_url = "https://chanyamungai.alwaysdata.net/static/images/"

  // Create a function to help you fetch your products from the API
  const fetchProducts = async() =>{
    try{
      // update the loading hook
      setLoading(true)

      //Interact with your endpoint for fetching the products
      const response = await axios.get("https://chanyamungai.alwaysdata.net/api/get_products")

      // update the products hook with the rsponse given from the API
      setProducts(response.data)

      // set loading hook back to default
      setLoading(false)
    }
    catch(error){
      // if there is an error
      // set the loadig hook back to default 
      setLoading(false)

      // update the error hook with a message
      setError(error.message)

    }
  }
  // we shall use the useeffect hook .This hook enables us to automatically rerender new features incase of any changes
  useEffect(() => {
    fetchProducts()
  },[])

  // console.log(products)
  return (
    <div className='row'>
      
      {loading && <Loader/>}
      <h4 className="text-danger">{error}</h4>

      <section className="hero-section">
          <div className="hero-content">
            <h1>Glow Like Never Before</h1>
            <p>Discover our premium beauty products that make you shine inside out.</p>
            <button className="hero-btn">Shop Now</button>
          </div>
          <div className="hero-image">
            <img src="/images/beauty1.webp" alt="CharmeBeauty Hero" />
          </div>
      </section>

      <h3 className='arrivals'>NEW ARRIVALS</h3>

      
      {/* Map the products fetched from the API to the user interface  */}

      {products.map((product) => (
          <div className="col-md-3 justify-content-center mb-3">
        <div className="card shadow">
          <img 
          src={img_url + product.product_photo} 
          alt="Productname" 
          className='product_img mt-3'/>
          <div className="card-body">
            <h5 className="text-success">{product.product_name}</h5>

            <p className="text-dark">{product.product_description.slice(0,100)}...</p>

            <h4 className="text-danger">Ksh {product.product_cost}</h4>

            <button className="btn btn-outline-info" onClick={() => navigate("/makepayment",{state :{product} })}>Purchase now</button>
          </div>
        </div>
      </div>
      ) )}
      <section class="about-us p-5 text-center">
          <h2>About Charme Beauty</h2>
        <p>At Charme Beauty, we believe every person deserves to feel confident and radiant. Our curated collection of cosmetics and skincare products brings elegance, style, 
        and a touch of luxury to your everyday routine. 💖</p>
        <p> Founded with passion and dedication, we are committed to providing high-quality, trendy products that empower you to express your unique beauty.</p>
        </section>
            <div id="mycarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1500">
      <div className="carousel-inner">

      <div className="carousel-item active">
      <img src="/images/beauty5.webp" className="d-block w-100 " alt="slide1" />
      </div>

    <div className="carousel-item">
      <img src="/images/beauty2.webp" className="d-block w-100" alt="slide2" />
    </div>

    <div className="carousel-item">
      <img src="/images/beauty3.webp" className="d-block w-100" alt="slide3" />
    </div>

    <div className="carousel-item">
      <img src="/images/beauty5.webp" className="d-block w-100" alt="slide4" />
    </div>

  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#mycarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>

  <button className="carousel-control-next" type="button" data-bs-target="#mycarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
        <section class="favorites">
          <div class="section-header">
            <h2>Our Favorites 💖</h2>
            <p>Handpicked beauty products loved by our customers.</p>
          </div>

          <div class="favorites-grid">
    
          <div class="product-card">
            <img src="images/concealer.webp" alt="foundation"/>
            <h3>Rose concealer</h3>
            <p>2500 Ksh</p>
            <a href="/products/1" class="btn">Buy Now</a>
          </div>
          <div class="product-card">
            <img src="images/no1.webp" alt="no1"/>
            <h3>Blush</h3>
            <p>18 Ksh</p>
            <a href="/products/2" class="btn">Buy Now</a>
          </div>

    <div class="product-card">
      <img src="images/mascara.webp" alt="Mascara"/>
      <h3>Mascara</h3>
      <p>2200 ksh</p>
      <a href="/images/mascara.webp" class="btn">Buy Now</a>
    </div>
  </div>
</section>
  </div>
      <footer>
        <b>Developed by Chanya &copy; 2026. All rights reserved.</b>
        <p>Your beauty, our passion </p>

       <div>
          <a href="https://www.facebook.com" target="_blank">Facebook</a>
          <span class="divider">|</span>
          <a href="https://www.instagram.com" target="_blank">Instagram</a>
            <span class="divider">|</span>
          <a href="https://www.twitter.com" target="_blank">Twitter</a>
          
        </div>
      </footer>
      
    </div>
  )
}

export default Getproducts;