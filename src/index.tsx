import { Hono } from "jsr:@hono/hono";
import { serveStatic } from 'jsr:@hono/hono/deno'
import { jsxRenderer } from 'jsr:@hono/hono/jsx-renderer'
import { AsciiApp } from "./ascii/ascii.tsx";

const app = new Hono();
let hits = await read_hits_file();

app.use('/static/script.js', serveStatic({ path: './src/ascii/script.js' }))
app.use('/static/styles.css', serveStatic({ path: './src/ascii/styles.css' }))

app.get('/', jsxRenderer(({ children }) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="mgurga"
                    content="Information about the California born programmer"
                />
                <link rel="apple-touch-icon" href="/logo512.png" />
                <link rel="manifest" href="/manifest.json" />
                <title>mgurga</title>
            </head>
            <body>
                { children }
            </body>
        </html>
    );
}, {docType: false}));

app.get('/', (c) => {
    return c.render(AsciiApp());
});

app.get('/hitcounter', (c) => {
    hits++;
    write_hits_file();
    return c.text(String(hits));
});

async function read_hits_file(): Promise<number> {
    try {
        Deno.writeTextFileSync("hits", "", { createNew: true });
    } catch {
        Deno.writeTextFileSync("hits", "0", { create: true });
    }

    const data = await Deno.readTextFile("hits");
    if (data == "") {
        return 0;
    } else {
        return Number(data);
    }
}

function write_hits_file(): void {
    Deno.writeTextFile("hits", String(hits));
}

export default app