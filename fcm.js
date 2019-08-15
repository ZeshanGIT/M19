var fcm = require('fcm-notification'),
    FCM = new fcm('private-key.json');
module.exports = FCM;