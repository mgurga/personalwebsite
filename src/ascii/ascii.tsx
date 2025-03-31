import { raw } from 'jsr:@hono/hono/html'

function rand(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function random_name_ascii(): string {
    const num = rand(0, 1);

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

export function AsciiApp() {
    return (
    <div>
        <noscript id="rawdata">
            <pre>
{random_name_ascii()}

(Moti Urga)
            </pre>
        </noscript>

        <div id="out"></div>

        {raw`
        <script>
            document.getElementById("out").innerHTML = document.getElementById("rawdata").innerHTML;
        </script>
        `}
    </div>
    )
}