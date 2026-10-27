# Secure Wealth Pro website

Static HTML, CSS and JavaScript. Open `index.html` in a browser (internet needed for Google Fonts and Font Awesome icons).

## Pages
```
index.html        Home (rotating banner: 0% Payment* / 100% cashback*, *T&C applied)
uae.html          Invest in the UAE: Crypto / AED / INR, converter, all seven emirates
projects.html     All plotting projects (filters, search, sort, detail popup)
commercial.html   Commercial plots
vrindavan.html    Vrindavan Mathura township page
dholera.html      Dholera township page
login.html        Member login
register.html     Create account
css/style.css     All styles (one file)
js/app.js         Shared data (PLOTS, TOWNS), artwork, header and footer
js/township.js    Renders the Vrindavan and Dholera pages
js/auth.js        Icons, login and register validation
images/logo.jpg, images/favicon.png
```

## Things to set before launch
- **Offer terms:** the banner shows "*T&C applied" as plain text. Add your actual terms for the 0% Payment and 100% cashback offers (a page, or a section) and link to it.
- **Brand name:** the logo reads "Wealth ppro". The site text uses "Secure Wealth Pro". If the logo spelling is a typo, replace `images/logo.jpg`.
- **Contact details:** `WA` at the top of `js/app.js` and the footer block in the same file still hold demo values.
- **Plot data:** `PLOTS` in `js/app.js` is sample data (prices in INR).
- **Login and register:** forms are in demo mode. Set `DEMO = false` in `js/auth.js` and point the form actions to your ASP.NET handlers.

## UAE page notes
- Converter rates (USDT/AED and AED/INR) are editable sample values. They are not live rates.
- Each emirate card opens a WhatsApp message with the emirate and the chosen currency.
- Text about ownership rules, crypto acceptance and RBI/FEMA is general guidance. Have it reviewed for your business before launch.

## Placeholder links
Footer Disclaimer, Refund Policy and social icons, the home "Read the Business Plan" button, and "Forgot password?" still point to `#`.

## Real photos
Add JPGs to images/photos/ (names in images/photos/README.txt). Missing files keep the illustration.
