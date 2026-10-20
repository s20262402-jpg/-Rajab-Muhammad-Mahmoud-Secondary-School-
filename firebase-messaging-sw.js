importScripts('https://www.gstatic.com/firebasejs/13.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/13.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB1ER7DAKSD6sYanGQHcFgUeyg5pxBNLKc",
  authDomain: "school-772e3.firebaseapp.com",
  projectId: "school-772e3",
  storageBucket: "school-772e3.firebasestorage.app",
  messagingSenderId: "205626167545",
  appId: "1:205626167545:web:ae14d4c4aa00878d5c5228"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title || 'تنبيه عاجل من المدرسة!';
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/2933/2933258.png',
    vibrate: [200, 100, 200]
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
