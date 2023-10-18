import CarouselComponent from "../components/Carousel/Carousel.js";
import "./Profile.css"
export default function Profile() {
    return (
    <div className="profil">
        <div className="carousel1">
            <h2 className="popularReviews">POPULAR REVIEWS</h2>
            <div>
            <CarouselComponent />
            </div>
            
        </div>
    </div>
    );
}
