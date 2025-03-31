import { Hono } from 'jsr:@hono/hono'
import { serveStatic } from 'jsr:@hono/hono/deno'
import AppWrapper from "./src/index.tsx"

const app = new Hono()

app.route('/', AppWrapper)
app.use('*', serveStatic({ root: './public' }))

Deno.serve(app.fetch);