import './App.css';
import World from './World.js'
import AnimatedFavicon from './AnimatedFavicon';

function App() {
  return (
    <div>
      <AnimatedFavicon />
      <div style={{maxWidth: "45%", display: "inline-block", verticalAlign: "top", padding: "10px", whiteSpace: "normal"}}>
        <h1 style={{fontSize: "50pt"}}>Moti Urga</h1>
        <p className='subtext'>
          Hello, I am an {((new Date() - new Date("08/17/2004")) / (1000*60*60*24) / 365).toFixed(5)} year old programmer / network engineer / IT guy 
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
        <h2>HiLo</h2>
        <LanguageTag lang="Svelte" color="darkred" />
        <LanguageTag lang="Typescript" color="lightblue" />
        <LanguageTag lang="SCSS" color="mediumpurple" />
        <LanguageTag lang="Python" color="darkcyan" />
        <LanguageTag lang="Flask" color="darkcyan" />
        <p className='subtext' style={{marginBottom: "5px"}}>Create and play higher or lower games. 
        Compete for the highest streak or assemble large and detailed games.</p>
        <BlockButton name={"Online Demo"} url={"https://mgurga.xyz/hilo"} alt={"hilo Online Demo"}/>
        <BlockButton name={"Source Code"} url={"https://github.com/mgurga/hilo"} alt={"hilo Source Code"}/>
        <br />
        <h2>RepMap</h2>
        <LanguageTag lang="Java" color="coral" />
        <LanguageTag lang="Android" color="coral" />
        <LanguageTag lang="Python" color="darkcyan" />
        <LanguageTag lang="Flask" color="darkcyan" />
        <p className='subtext' style={{marginBottom: "5px"}}>An Android app built by me and Bryan Hildebrand 
        which tells a user their current representatives after clicking their position on a map. Earned us 2nd place
        in a district-wide programming competition.</p>
        <BlockButton name={"Source Code"} url={"https://github.com/mgurga/RepMap"} alt={"RepMap Source Code"}/>
        <br />
        <h2>multiconway</h2>
        <LanguageTag lang="Python" color="darkcyan" />
        <LanguageTag lang="Flask" color="darkcyan" />
        <LanguageTag lang="Socket IO" color="grey" />
        <p className='subtext' style={{marginBottom: "5px"}}>A multiplayer version of conways game of life with a theoretically infinite board.
        (requires an unimaginable about of CPU power)</p>
        <BlockButton name={"Online Demo"} url={"https://mgurga.xyz/multiconway"} alt={"multiconway Online Demo"} />
        <BlockButton name={"Source Code"} url={"https://github.com/mgurga/multiconway"} alt={"multiconway Source Code"} />
        <br />
        <h2>graphy</h2>
        <LanguageTag lang="C++" color="hotpink" />
        <LanguageTag lang="Redis" color="orangered" />
        <p className='subtext' style={{marginBottom: "5px"}}>Simple, hackable, and (reasonably) fast Redis server implementation in C++ 11. 
        This implementation is mostly compatible with Redis v1.0.0, uses zero dependencies, and is unit tested.</p>
        <BlockButton name={"Source Code"} url={"https://github.com/mgurga/graphy"} alt={"graphy Source Code"}/>
        <br />
        <h2>Jitter</h2>
        <LanguageTag lang="Java" color="coral" />
        <LanguageTag lang="Spring" color="coral" />
        <LanguageTag lang="Thymeleaf" color="coral" />
        <p className='subtext' style={{marginBottom: "5px"}}>A web frontend and scraper for Twitter written in Java 11. 
        This program contains a Twitter scraper that gets the official website and retrieves relevant information from its structure.</p>
        <BlockButton name={"Source Code"} url={"https://github.com/mgurga/jitter"} alt={"jitter Source Code"}/>
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

const LanguageTag = (props) => {
  return <div style={{border: `2px solid ${props.color}`, display: "inline-block", margin: "0 3px 0 3px"}}>
    <p style={{color: props.color, margin: "0 2px 0 2px", fontSize: "10pt"}}>{props.lang}</p>
  </div>;
}

const BlockButton = (props) => {
  return <a href={props.url} title={props.alt} rel="noreferrer" target="_blank"><div className='BlockButton'>
    <h3>{props.name}</h3>
  </div></a>;
}

export default App;