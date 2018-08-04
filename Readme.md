# Marketplace SPA

This is a small Angular 1.4.7 + ES6 proyect. It serves as frontend tier for a small Marketplace Web application

### LIVE VERSION:
https://marketplace-spa-getp.herokuapp.com/#/

## Getting Started:

If you want to try this repo locally, Please clone this repo and consider running `npm install`, `gulp` and `npm run serve` to run the application

## Usage

This is connected by default to production API endpoints. If You want to use Localhost (For testing purposes you should), modify the Service file at `./src/app/components/webDevTec` by using `this.localUrlBase`

After doing so, be sure that your rails server is running to provide BE services and products are available

You can

- create users via sign up link,
- login / logout
- Add / remove products from your cart
- Purchase your products
