import { Hono } from 'jsr:@hono/hono'
import { serveStatic } from 'jsr:@hono/hono/deno'
import AppWrapper from "./src/index.tsx"

const app = new Hono()

app.route('/', AppWrapper)
app.use('*', serveStatic({ root: './public' }))

if (Deno.args.length == 0) {
    Deno.serve({ port: 8000 }, app.fetch);
} else {
    Deno.serve({ port: Number(Deno.args[0]) }, app.fetch);
}