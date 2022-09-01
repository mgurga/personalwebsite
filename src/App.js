import './App.css';
import World from './World.js'
import AnimatedFavicon from './AnimatedFavicon';

function App() {
  return (
    <div>
      <AnimatedFavicon />
      <div style={{maxWidth: "49.5%", display: "inline-block", verticalAlign: "top", padding: "10px", whiteSpace: "normal"}}>
        <h1 style={{fontSize: "50pt"}}>Moti Urga</h1>
        <p className='subtext'>
          Hello, I am an {Math.round((new Date() - new Date("08/17/2004")) / (1000*60*60*24) / 365)} year old programmer / network engineer / IT guy 
          currently studying Computer Science at the University of California Riverside.</p>
        <br />
        <h1>Contact Me</h1>
        <p className='subtext'>send me an email at:<a style={{fontStyle: "normal"}} href="mailto:motiurga@gmail.com">motiurga@gmail.com</a></p>
        <p className='subtext' style={{marginBottom: "5px"}}>some of my other accounts:</p>
        <BlockButton name={"Github"} url={"https://github.com/mgurga"} alt={"Github Account"} />
        <BlockButton name={"LinkedIn"} url={"https://www.linkedin.com/in/motiurga/"} alt={"LinkedIn Profile"} />
        <BlockButton name={"ReplIt"} url={"https://replit.com/@mgurga"} alt={"ReplIt Account"} />
        <br />
        <br />
        <h1>Projects</h1>
        <p className='subtext'>All of my projects are on Github but here are some highlights.</p>
        <h2>RepMap</h2>
        <p className='subtext' style={{marginBottom: "5px"}}>An Android app built by me and 
        Bryan Hildebrand which tells a user their current representatives after clicking their position on a map.</p>
        <BlockButton name={"Source Code"} url={"https://github.com/mgurga/RepMap"} alt={"RepMap Source Code"}/>
        <h2>graphy</h2>
        <p className='subtext' style={{marginBottom: "5px"}}>Simple, hackable, and (reasonably) fast Redis server implementation in C++ 11. 
        This server implementation is mostly compatible with Redis v1.0.0, uses zero dependencies, and is unit tested with googletest.</p>
        <BlockButton name={"Source Code"} url={"https://github.com/mgurga/graphy"} alt={"graphy Source Code"}/>
        <h2>Jitter</h2>
        <p className='subtext' style={{marginBottom: "5px"}}>A web frontend and scraper for Twitter written in Java 11 using Spring and Thymeleaf. 
        This program contains a Twitter scraper that gets the official website and retrieves relevant information from its structure.</p>
        <BlockButton name={"Source Code"} url={"https://github.com/mgurga/jitter"} alt={"jitter Source Code"}/>
        <h2>multiconway</h2>
        <p className='subtext' style={{marginBottom: "5px"}}>A multiplayer version of conways game of life with a theoretically infinite board. 
        Built in Python using Flask and SocketIO.</p>
        <BlockButton name={"Source Code"} url={"https://github.com/mgurga/multiconway"} alt={"multiconway Source Code"} />
        <BlockButton name={"Online Demo"} url={"https://mgur.ga/multiconway"} alt={"multiconway online demo"} />
        <br />
        <br />
        <br />
      </div>
      <World />
      <footer style={{textAlign: "center", position: "fixed", height: "30px", bottom: 0, width: "100%"}}>
        <a target="_blank" rel="noreferrer" style={{color: "grey"}} href='https://github.com/mgurga/personalwebsite'>view the source code</a>
      </footer>
    </div>
  );
}

const BlockButton = (props) => {
  return <a href={props.url} title={props.alt} rel="noreferrer" target="_blank"><div className='BlockButton'>
    <h3>{props.name}</h3>
  </div></a>;
}

export default App;