import Gif from '../img/bart.gif'

export default function About(){
    return(
        <main>
            <div className='aboutus'>
                <h1>About us</h1>
                <p>StrimZ was developed by three students from EFREI PARIS as a group project for 'Web Development for IT Engineers.' These music lovers wanted to create a web platform that allows music fans to track what they're listening to, interact with others, share what they love, and promote their favorite albums or artists.</p>
                <img src={Gif} alt=""></img>
            </div>
            <div className='team'>
                <h2>Our Team</h2>
            </div>
        </main>
    )
}