# webcomponents-deno
fooling around with deno and web-components.  Backing up in case my laptop fails.

this runs using [Deno](https://deno.land/).  Get that installed, clone this repo.

Both server and client-side JS are compiled using Deno.

To compile the client-side stuff, do:
```bash
deno bundle --config ./web_components.json src/main.ts js/main.js --watch
```

To run the server, do:
```bash
deno run --config ./server.json --allow-net --allow-read server.ts
```

Then open a browser to `localhost:8000`.  You could even have both running in two different terminals, and the changes should take effect ever time you save the client-side stuff, and then refresh the browser.

Tested with latest (v.deno 1.21.0).  Look in `server.json`/`web_components.json` for more compilation options.  Cheers
