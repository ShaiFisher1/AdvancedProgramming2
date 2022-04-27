# Advanced Programming 2 Web Client: 


1. [About](#About)
2. [Installation](#Installation)
3. [Instructions](#Instructions)

## About
We created a Web client Using HTML, JavaScript, React, CSS.\
The project has Registration screen, Login screen, and a Chat screen.\
**The project uses react-router and react-bootstrap packages.**
You can find the modules installed in package.json -> dependencies.\
When running ```npm install``` installations are made according to this file


## Dependencies
* Download Node.js : https://nodejs.org/en/ which includes NPM (a package manager for NODE. Js) and will be installed on your computer when you install Node.js. 
* The project uses react-router and react-bootstrap packages.
* Modules installed can be found in package.json -> dependencies


## Instructions
* In order to log in with the user we created please enter the following:\
**Username: Mor Siman Tov**\
**Password: 1234567u**
* Running the program leads to the Login screen (run by opening terminal and then ```npm start```)
* If not already registered, by pressing the Click here button you will be navigated to the Registration screen.
* By entering a correct registered (and for now hard coded) username and password, you will be able to log in.\
  Onced logged in you will be navigated to the Chat screen
* When in the chat screen, the contacts of current user are shown on the left,\
  and by clicking on any one of them, chat message history is shown.
* Sending a new message:
  * Sending a new text message is done by typing and clicking the send button or by pressing Enter
  * Sending a new voice message is done by clicking the link logo and then -\
    pressing once on the microphone logo - to start the recording, and by pressing again - the recording is stopped and sent
  * Sending a new photo/video is done by clicking the photo/video logo and choosing a photo/video to send
* Adding a new contact is done by pressing the logo with the plus sign, and entering an existing (hard coded) contact. If an existing contact name was entered, the chat will appear with the message history