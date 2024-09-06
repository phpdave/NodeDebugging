# Node Debugging Boilerplate

## Overview
This project is a simple Node.js boilerplate to demonstrate how to set up debugging in Visual Studio Code (VS Code).

## Getting Started

Follow these steps to get started with the project:

### Prerequisites
- Ensure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).

## Getting Started

### Installation

### 1. Clone the Repository

```bash
git clone git@github.com:phpdave/NodeDebugging.git
```

### 2. Initialize the Project
```bash
npm init -y
```

### 3. Install Express and any other packages in package.json
```bash
npm install express
npm install
```

### Running

### 4. Run and Debug in VS Code
To start debugging the project in Visual Studio Code:

Press Ctrl + Shift + D or click the Run and Debug icon (the bug with a play button) on the left sidebar.
Click the blue button labeled Run and Debug to start the application and attach the debugger.


### 5. Debug Using Google Chrome
run the code in the terminal
```bash
node inspect index.js
```

Go to chrome
```bash
chrome://inspect/#devices
```
Click the open dedicated devtools for node.  On the connection make sure to add localhost:9229 or the port the debugger is running on 
Navigate to your application in the browser http://localhost:3000 and then press F12 or open the developer tools and a node.js debugger icon should automatically appear.  Click it to start debugging.

Open application from WSL2 
```bash
/mnt/c/Program\ Files/Google/Chrome/Application/chrome.exe http://localhost:3000
```

### 6. Setting up the interactive debugger
Setup your launch.json to attach to the local node service by modifying the code below.  
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "attach",
            "name": "Attach to Kudu",
            "address": "<your-app-service-name>.scm.azurewebsites.net",
            "port": 9229,  
            "localRoot": "${workspaceFolder}",
            "remoteRoot": "/home/site/wwwroot",
            "protocol": "inspector",
            "timeout": 60000
        }
    ]
}


### 7. Debug in Kudu Azure
Setup your launch.json to attach to the Kudu service by modifying the code below.  
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "attach",
            "name": "Attach to Kudu",
            "address": "<your-app-service-name>.scm.azurewebsites.net",
            "port": 9229,  
            "localRoot": "${workspaceFolder}",
            "remoteRoot": "/home/site/wwwroot",
            "protocol": "inspector",
            "timeout": 60000
        }
    ]
}
```
Make sure the address,port,remoteRoot are correct.
Ensure you have the debugger server running on your app. node --inspect or via an environment variable NODE_OPTIONS='--inspect'
Ensure your firewall, networking will allow traffic from your computer to the kudu service and the debugger port 9229.
In VS Code

Press Ctrl + Shift + D or click the Run and Debug icon (the bug with a play button) on the left sidebar.
Click the blue button labeled Run and Debug to start the application and attach the debugger.

8.  Real time debugging use https://quokkajs.com/