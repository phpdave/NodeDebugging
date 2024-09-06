const express = require('express');
const app = express();
const port = 3000;``

app.get('/', (req, res) => {
    res.send(`
        <html>
          <body>
            <h1>Hello, World!</h1>
            <script>
              console.log('This message is logged to the browser console.');
              console.log('Press F12 while in chrome to view the console in the browser.');
            </script>
          </body>
        </html>
      `);
    // note this console.log will be in the command line 
    console.log(`this is logged to the server's command line`);
});
app.get('/show_how_debugger_works', (req, res) => {
    res.send(`
        <html>
          <body>
            <h1>Show how debugger works!</h1>
          </body>
        </html>
      `);
    // note this console.log will be in the command line 
    console.log(`this is logged to the server's command line`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
