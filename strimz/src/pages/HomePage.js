import Screen1 from "../img/screen1.png"
import List from "../img/list.png"
import Research from "../img/research.png"
import Notif from "../img/notification.png"
import Friend from "../img/friend.png"
import fb from "../img/facebook.png"
import tt from "../img/tic-tac.png"
import ytb from "../img/youtube.png"
import inst from "../img/instagram.png"
import x from "../img/twitter.png"
import NavBar from '../components/navbar/Navbar';
 
export default function HomePage() {
    return (
        <main>
          <NavBar/>
          <div className='first-content'>
          <img src={Screen1} alt="Screen" className="screen"></img>
            <div className='presentation'>
              <h1> Become the best music critic ! Keep track of your listenings !</h1>
            </div>
          </div>
          <div className="second-content">
              <h2>Let's StrimZ be your guide for your future listenings</h2>
              <p>StrimZ is your new friend. He is a tracking tool for musics. Join our community and :</p>
              <div>
              <img src={List} alt='' style={{ maxWidth: '5.7%', height: 'auto' }}></img>
              <span><b>TRACK</b> musics that you love</span>
              <br/><br/>
              <img src={Research} alt=''  style={{ maxWidth: '5.7%', height: 'auto' }}></img>
              <span><b>DISCOVER</b> what to listen next</span>
              <br/><br/>
              <img src={Notif} alt=''  style={{ maxWidth: '5.7%', height: 'auto' }}></img>
              <span><b>GET NOTIFIED</b> when it's availaible</span>
              <br/><br/>
              <img src={Friend} alt=''  style={{ maxWidth: '5.7%', height: 'auto' }}></img>
              <span><b>SHARE</b> your reviews to your friend</span>
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
            <li><a href="http://localhost:3000/about"><img src={fb} alt="Facebook"  class="hoverable-image" width="40px" height="auto"></img></a></li>
            <li><a href="http://localhost:3000/about"><img src={inst} alt="Instagram"  class="hoverable-image" width="40px" height="auto"></img></a></li>
            <li><a href="http://localhost:3000/about"><img src={ytb} alt="Youtube" class="hoverable-image" width="40px" height="auto"></img></a></li>
            <li><a href="http://localhost:3000/about"><img src={tt} alt="Tik-tok" class="hoverable-image" width="40px" height="auto"></img></a></li>
            <li><a href="http://localhost:3000/about"><img src={x} alt="Twitter"  class="hoverable-image" width="40px" height="auto"></img></a></li>
          </ul>
          <span>© 2023, TV Time, EFREI Students</span>
          </div>
        </main>
    
    )


}