import CarouselComponent from "../components/Carousel/Carousel.js";
import NavBar from "../components/navbar/Navbar.js";
import fb from "../img/facebook.png"
import tt from "../img/tic-tac.png"
import ytb from "../img/youtube.png"
import inst from "../img/instagram.png"
import x from "../img/twitter.png"
import profilepic from "../img/profile_pic.png";



export default function Profile() {
    return (
        <>
        <NavBar/>
        
    <div className="">
        <div className="profile-top">
          <img className="profilePic" src={profilepic} alt="pdp"/>
            <div >
                <h1 style={{fontSize:"40px", marginBottom: "0px", color:"white"}}>John Doe</h1>
                
            </div>
        </div>
    </div>
    <div className='profile-white-container'>
        <div className="centered-container">
        <div className="carousel1">
            <div className="">
            <h2 className="popularReviews" style={{color:'black'}}>MY REVIEWS</h2>
            <div>
            <CarouselComponent />
            </div>
            
            </div>
        </div>
            
           
        </div>
       

       
    </div>





  
        <div className="third-content">
          <ul>
            <li><a href="./About">About</a></li>
            <li><a href="./Contact">Contact</a></li>
            <li><a href="./PrivacyPolicy">Privacy Policy</a></li>
            <li><a href="./Terms">Terms</a></li>
          </ul>
          <ul>
            <li><a href=""><img src={fb} alt="Facebook"  class="hoverable-image" width="40px" height="auto"></img></a></li>
            <li><a href=""><img src={inst} alt="Instagram"  class="hoverable-image" width="40px" height="auto"></img></a></li>
            <li><a href=""><img src={ytb} alt="Youtube" class="hoverable-image" width="40px" height="auto"></img></a></li>
            <li><a href=""><img src={tt} alt="Tik-tok" class="hoverable-image" width="40px" height="auto"></img></a></li>
            <li><a href=""><img src={x} alt="Twitter"  class="hoverable-image" width="40px" height="auto"></img></a></li>
          </ul>
          <span>© 2023, TV Time, EFREI Students</span>
          </div>
    </>
    );
}