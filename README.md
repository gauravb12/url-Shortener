# url-Shortener
### A utility to shorten and give fixed length URLs for any input URL

URL Shortener is a web application, aimed at shortening URLs. It inputs URLs and gives permanent alternate URLs directing to the same location as the input URL, generally employed in reducing the length of lengthy URLs and getting a short alternative.

This application uses Node.JS, Express.JS and dependent modules. No database, but files have been used to store the URLs and their corresponding alternates. 

To install and run the application first install Node.JS and then proceed as,

- Clone the repository in your Machine <br/>
`git clone https://github.com/gauravb12/url-Shortener.git`

- Move into the project directory and install the depenedencies. Run <br/>
`npm install`

- Run `node index`

- Open `http://localhost:3000` in your browser to see the homepage of urlShortener.

- Enter any URL in the field and click the `SHORTEN` button. The corresponding shortened URL will be displayed below. Click `COPY LINK` to copy the new URL. You can test this in new tab to be redirecting to the previously input URL.

<br/> <br/>

### Screenshots

![Home Page](/images/urlshort-1.png)

![URL Shortened (Output)](/images/urlshort-2.png)

![Visiting invalid short URL](/images/urlshort-3.png)
