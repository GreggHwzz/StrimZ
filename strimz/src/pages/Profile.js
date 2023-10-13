import CarouselComponent from "../components/Carousel/Carousel.js";
import "./Profile.css"
export default function Profile() {
    return (
    <div className="carousel1">
        <div className="">
            <h1 className="popularReviews">POPULAR REVIEWS</h1>
            <div>
            <CarouselComponent />
            </div>
            
        </div>
    </div>
    );
}
