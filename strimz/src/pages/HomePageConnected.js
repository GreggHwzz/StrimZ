import CarouselComponent from "../components/Carousel/Carousel.js";
import NavBar from "../components/navbar/Navbar.js";

export default function HomePageConnected() {
    return (
        
        <main>
          <NavBar/>
          <div className='main-content'>
          <div className="carousel1">
            <div className="">
              <h2 className="popularReviews">POPULAR REVIEWS</h2>
              <div>
                <CarouselComponent />
              </div>
            
            </div>
          </div>
          <div className="carousel1">
            <div className="">
              <h2 className="popularReviews">RECENT REVIEWS</h2>
              <div>
                <CarouselComponent />
              </div>
            
            </div>
          </div>

          </div>
          
      </main>
    )


}