# url-shortener

This is a simple url shortener app made with Vue.

## Fetch API

I used shrtcode's URL shortener API; you can read about here on [the official docs](https://shrtco.de/docs). Before this I used Bitly's API, but their API has request limits. shrtcode's API was also simpler to fetch because it requires no authentication, so you just pass the URL there. with Bitly you have to pass in authentication and bearer tokens and whatnot, it's just more complicated.

This project uses the MIT license.

## Development

For the IDE i reccomend using [VSCode](https://code.visualstudio.com/) with the [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension (and disable Vetur).

You are free to open a pull request or fork this project, as long as you contribute to this project in a positive way.

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
