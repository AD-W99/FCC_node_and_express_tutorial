const http = require('http')

const server = http.createServer((req, res) => {
  //   if (req.url === '/') {
  //     res.end('Welcome to our home page')
  //   }
  //   if (req.url === '/about') {
  //     res.end('Here is our short history')
  //   }
  //   res.end(`
  //   <h1>Oops!</h1>
  // <p>We can't seem to find the page you are looking for</p>
  // <a href="/">back home</a>
  //   `)
  // ###################################
  // ###################################
  //
  //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
  // SWITCH TO IF, ELSE IF, ELSE (BELOW)
  // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
  if (req.url === '/') {
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    res.end('Here is our short history')
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
  }
})

server.listen(5000)


/*

My approach:

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our home page")
    } else if (req.url === "/about") {
        res.end("Here is our history!")
    } else {
        res.writeHead(404, { "Content-Type": "text/html" })
        res.end(`
        <h1>Oops!</h1>
        <p> We can't seem to find this page</p>
        <a href="/">Back to Home</a>
    `)
    }
    
})

server.listen(5000)

ChatGPT
The res.writeHead() method is not strictly necessary in the context of the error you were encountering ("Error [ERR_STREAM_WRITE_AFTER_END]: write after end"). The primary issue in your code was that you were trying to send multiple responses for a single HTTP request, which caused the error.

The purpose of res.writeHead() is to set the HTTP response headers explicitly, which can be helpful when you want to specify the status code and additional headers. In the code I provided, it's used to set the response status code to 404 (Not Found) and specify the content type as HTML for the "Not Found" case. It's a good practice to set appropriate headers for different HTTP response scenarios to provide more information to the client and other agents consuming the response.

If you don't include res.writeHead(), Node.js will still send a response to the client, but the status code and headers will be set to default values. If you don't set the status code explicitly, it will default to 200 (OK). In some cases, like the "Not Found" case in your code, it's better to set the appropriate status code (404) to indicate that the requested resource was not found.

So, while res.writeHead() is not strictly required for basic responses, it's a good practice to use it when you want to control the status code and headers for different response scenarios to provide more accurate and informative responses to clients and agents consuming your API.

*/