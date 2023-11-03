import fb from "../img/facebook.png"
import tt from "../img/tic-tac.png"
import ytb from "../img/youtube.png"
import inst from "../img/instagram.png"
import x from "../img/twitter.png"
import ppg from "../img/git_prof_G.jpeg"
import ppv from "../img/git_prof_V.jpeg"
import ppe from "../img/git_prof_E.jpeg"

export default function About(){
    return(
        <main>
            <div className="about-us-section">
                <h1>About Us</h1>
                <p>StrimZ was developed by three students from EFREI PARIS as a group project for 
                'Web Development for IT Engineers.' These music lovers wanted to create a web platform 
                that allows music fans to track what they're listening to, interact with others, share what they love, 
                and promote their favorite albums or artists.</p>
                
                <button a href="http://localhost:3000/homepage">See More</button>
            </div>

            <div class="why-it-works-section">
                <h2>About the Team</h2>
  
                <div class="benefit">
                    <img src={ppg} alt="PP Gregory"></img>
                    <h3>Gregory</h3>
                    <p>Full-stack dev</p>
                </div>

                <div class="benefit">
                    <img src={ppv} alt="PP Victoria"></img>
                    <h3>Victoria</h3>
                    <p>Full-stack dev</p>
                </div>

                <div class="benefit">
                    <img src={ppe} alt="PP Elyas"></img>
                    <h3>Elyas</h3>
                    <p>Full-stack dev</p>
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
            <li><a href="http://localhost:3000/aboutus"><img src={fb} alt="Facebook"  class="hoverable-image" width="40px" height="auto"></img></a></li>
            <li><a href="http://localhost:3000/aboutus"><img src={inst} alt="Instagram"  class="hoverable-image" width="40px" height="auto"></img></a></li>
            <li><a href="http://localhost:3000/aboutus"><img src={ytb} alt="Youtube" class="hoverable-image" width="40px" height="auto"></img></a></li>
            <li><a href="http://localhost:3000/aboutus"><img src={tt} alt="Tik-tok" class="hoverable-image" width="40px" height="auto"></img></a></li>
            <li><a href="http://localhost:3000/aboutus"><img src={x} alt="Twitter"  class="hoverable-image" width="40px" height="auto"></img></a></li>
          </ul>
          <span>© 2023, TV Time, EFREI Students</span>
          </div>
        </main>
    )
}