import Screen1 from "../img/screen1.png"
import List from "../img/list.png"
import Research from "../img/research.png"
import Notif from "../img/notification.png"
import Friend from "../img/friend.png"

export default function HomePage() {
    return (
        <main>
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
              <img src={List} alt='' width="50px" height="50px" ></img>
              <span>TRACK musics that you love</span>
              <br/>
              <img src={Research} alt='' width="50px" height="47px" ></img>
              <span>DISCOVER what to watch next</span>
              <br/>
              <img src={Notif} alt='' width="52px" height="50px" ></img>
              <span>GET NOTIFIED when it's availaible</span>
              <br/>
              <img src={Friend} alt='' width="47px" height="47px" ></img>
              <span>SHARE your reviews to your friend</span>
              </div>
          </div>
        </main>
    )


}