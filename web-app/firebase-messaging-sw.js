importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyBx6EMpqVYxHb3IuEiIeh8xe9Y2SjAFeKc",
  authDomain: "realtimemessenger-7f218.firebaseapp.com",
  projectId: "realtimemessenger-7f218",
  storageBucket: "realtimemessenger-7f218.appspot.com",
  messagingSenderId: "1017334475208",
  appId: "1:1017334475208:web:1100497f2c2bcb407d38fd",
  measurementId: "G-97E5MX61ND"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
