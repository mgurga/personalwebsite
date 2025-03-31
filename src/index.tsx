import { Hono } from "jsr:@hono/hono";
import { serveStatic } from 'jsr:@hono/hono/deno'
import { jsxRenderer } from 'jsr:@hono/hono/jsx-renderer'
import { AsciiApp } from "./ascii/ascii.tsx";

const app = new Hono();

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
    return c.render(AsciiApp())
})

export default app