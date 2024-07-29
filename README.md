## Real-Time Messaging System Implementation

### Description

This project demonstrates the implementation of a real-time messaging system using Firebase, Node.js, and socket.io. It includes a web application, two Node.js services, and integration with Firebase Cloud Messaging (FCM) to send push notifications.

### Architecture

1. **Web Application (web-app)**
   - Users can enter a title and message text through a web form.
   - Upon submission, the message is sent to Node.js Service #1 via socket.io.

2. **Node.js Service #1**
   - Receives messages through socket.io.
   - Forwards messages to Node.js Service #2 via UDP.

3. **Node.js Service #2**
   - Receives messages from Node.js Service #1 over UDP.
   - Formats and sends push notifications via Firebase Cloud Messaging (FCM) back to the web application.

### Technologies

- **Firebase**: For push notifications and project configuration.
- **Node.js**: Server environment for message processing.
- **socket.io**: For real-time bidirectional communication.
- **UDP**: For data transmission between Node.js services.

### How to Run the Project

1. **Web Application**
   - Navigate to the `web-app` folder.
   - Install dependencies: `npm install`.
   - Start the server: `npm start`.

2. **Node.js Service #1**
   - Navigate to the `node-service-1` folder.
   - Install dependencies: `npm install`.
   - Start the server: `npm start`.

3. **Node.js Service #2**
   - Navigate to the `node-service-2` folder.
   - Install dependencies: `npm install`.
   - Start the server: `npm start`.

### Prerequisites

- **Node.js**: Ensure you have the latest version of Node.js installed.
- **Firebase**: Set up a project in Firebase Console and update the configuration in the web application and Node.js Service #2.

