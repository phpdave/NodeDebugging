const https = require('https');

const url = 'https://httpbin.org/status/';

function makeARequestTohttpbinStatus(http_status_code) {
    const fullUrl = url + http_status_code;

    console.log(`Making request to: ${fullUrl}`);
    debugger;
    // Make the HTTPS GET request
    https.get(fullUrl, (res) => {
        let data = '';
        
        // Log response details
        console.log('Response Method:', res.req.method);
        console.log('Response Headers:', res.headers);
        console.log('Response Status Code:', res.statusCode);

        // Capture the response body
        res.on('data', (chunk) => {
            data += chunk;
        });

        // When the response ends
        res.on('end', () => {
            if (res.statusCode === 200) {
                console.log('You successfully received data from the endpoint:', data);
            } else {
                console.error(`Failed to fetch data. Status Code: ${res.statusCode}`);
                console.log('Response Body:', data || 'No body returned');
            }
        });
    }).on('error', (error) => {
        // Log any errors from the request
        console.error('Error making the request:', error.message);
    });
}

// Test the function with different HTTP status codes
// makeARequestTohttpbinStatus(200);
makeARequestTohttpbinStatus(404);
