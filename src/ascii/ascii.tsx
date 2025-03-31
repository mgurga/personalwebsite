import { raw } from 'jsr:@hono/hono/html'

function rand(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function random_name_ascii(): string {
    const num = /* rand(0, 1) */ 0;

    switch(num) {
        case 0:
            return `
 __   __  _______  _______  ___       __   __  ______    _______  _______ 
|  |_|  ||       ||       ||   |     |  | |  ||    _ |  |       ||   _   |
|       ||   _   ||_     _||   |     |  | |  ||   | ||  |    ___||  |_|  |
|       ||  | |  |  |   |  |   |     |  |_|  ||   |_||_ |   | __ |       |
|       ||  |_|  |  |   |  |   |     |       ||    __  ||   ||  ||     
| ||_|| ||       |  |   |  |   |     |       ||   |  | ||   |_| ||   _   |
|_|   |_||_______|  |___|  |___|     |_______||___|  |_||_______||__| |__|
                                                                                `;

        case 1:
            return `
 /$$      /$$             /$$     /$$       /$$   /$$                              
| $$$    /$$$            | $$    |__/      | $$  | $$                              
| $$$$  /$$$$  /$$$$$$  /$$$$$$   /$$      | $$  | $$  /$$$$$$   /$$$$$$   /$$$$$$ 
| $$ $$/$$ $$ /$$__  $$|_  $$_/  | $$      | $$  | $$ /$$__  $$ /$$__  $$ |____  $$
| $$  $$$| $$| $$  \ $$  | $$    | $$      | $$  | $$| $$  \__/| $$  \ $$  /$$$$$$$
| $$\  $ | $$| $$  | $$  | $$ /$$| $$      | $$  | $$| $$      | $$  | $$ /$$__  $$
| $$ \/  | $$|  $$$$$$/  |  $$$$/| $$      |  $$$$$$/| $$      |  $$$$$$$|  $$$$$$$
|__/     |__/ \______/    \___/  |__/       \______/ |__/       \____  $$ \_______/
                                                                /$$  \ $$          
                                                               |  $$$$$$/          
                                                                \______/           `;
    }

    return "Moti Urga";
}

function age() {
    return ((new Date() - new Date("08/17/2004")) / (1000*60*60*24) / 365).toFixed(5);
}

function taglist(tags: Array<string>) {
    let out = "|";
    const tagsize = 15;
    let padsize;

    for (let t of tags) {
        padsize = (tagsize - t.length) / 2;
        out += " ".repeat(Math.floor(padsize));
        out += t;
        out += " ".repeat(Math.ceil(padsize));
        out += "|";
    }

    return out;
}

export function AsciiApp() {
    return (
    <div>
        <noscript id="rawdata">
            <pre>
{random_name_ascii()}

(Moti Urga)

<br /> <br />

Hello, I am a {age()} year old programmer / network engineer / IT guy currently studying Computer 
<br />
Science at the University of California Riverside.

<br /> <br />

Send me an email: <u>motiurga AT gmail DOT com</u> <br />
View all my projects on GitHub: <a href="https://github.com/mgurga">github.com/mgurga</a>

<br /> <br />

Here are some of my favorite projects:

<br /> <br />

⭐ <a href="https://github.com/mgurga/itch">itch</a> - Modern C++ emulator for Scratch 3 projects.

<br /> {taglist(["C++", "SFML", "OpenGL", "CLI", "GTest"])} <br />

I originially started the project as a way of running Scratch projects faster and avoiding javascript, <br />
but I ended up colaborating with other members in the community and combing over the <a href="https://github.com/scratchfoundation/scratch-vm">native implementation.</a> <br />
Itch also includes a visual debugging interface that provides fine tuned control over the engine. Despite <br />
Scratch's many quarks, itch supports the large marjority of instructions. <br />

<br /> <br />

⭐ <a href="https://github.com/mgurga/lineinradio">lineinradio</a> - 24/7 community ran online radio station.

<br /> {taglist(["Python", "Django", "Fullstack", "Streaming", "CRUD", "SQLite", "Templates"])} <br />

Online radio station with shows submitted by users. Shows can be any length and customized to play  <br />
at certain times of day. Every night, the server will automatically generate a schedule for the day. <br />
DJs are able customize their profiles by changing backgrounds, text color, banners, an profile pictures.<br />

<a href="https://lineinradio.xyz/">[ Tune In ]</a> <br />

<br /> <br />

⭐ <a href="https://github.com/mgurga/repmap">RepMap</a>, <a href="https://github.com/mgurga/repapi">repapi</a> - Interactive map to find your state representatives.

<br /> {taglist(["Android", "Java", "Python", "OpenStreetMap", "API", "Scraper"])} <br />

RepMap was a collaborative submission to the Congressional App Contest that makes it easier to find <br />
your representative. The Android app displays an interactive OpenStreetMap display of the United States <br />
and the API converts the coordinates to zipcodes to districts. This data is formatted into an ordered <br />
list on the app. Our submission earned us 2nd place in our district. <br />

<br /> <br />
Thanks for reading :) <br />
<br /> <br />

            </pre>
        </noscript>

        <div id="out"></div>

        {raw`
        <script src="/static/script.js"></script>
        <link rel="stylesheet" href="static/styles.css">
        `}
    </div>
    )
}