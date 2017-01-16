function initIndexInfo() {
  console.log("IndexInfo page init.");
  activateTabbarIcon('info');

  var numberOfMountainImages = 3;
  var num = 1 + Math.floor(Math.random()*numberOfMountainImages);
  var foto = "resources/img/index/"+num+".png";
  foto = foto.toString();
  document.getElementById("mountainImage").src = foto;
}

document.addEventListener("deviceready", PluginPushReady, false);

function PluginPushReady(){
  var push = PushNotification.init({
    android: {
      senderID: "882945405543"
    },
    ios: {
      senderID: "882945405543",
      gcmSandbox: false,
      alert: "true",
      badge: "false",
      sound: "true"
    }
  });

  push.on('registration', function(data) {
    // data.registrationId
    console.log('registration data: ' + JSON.stringify(data));
    // alert('Device Token: ' + JSON.stringify(data));
  });

  push.on('notification', function(data) {
    // data.message,
    // data.title,
    // data.count,
    // data.sound,
    // data.image,
    // data.additionalData

    // alert('onNotification: ' + JSON.stringify(data));

    if(data.additionalData.coldstart){
       console.log('App started by tapping background push notification');
     }

     if(data.additionalData.foreground){
       console.log('Push notification received on foreground');
       myApp.addNotification({
         title: 'SkiCup 2017',
         message: '' + data.additionalData.wiadomosc
       });
       navigator.vibrate([2000]);
     }

    console.log('notification data: ', data);
    console.log('notification data.additionalData.wiadomosc: ', data.additionalData.wiadomosc);
  });

  push.on('error', function(e) {
    // e.message
    console.log('notification error ', e.message);
    // alert('Notification error: ' + JSON.stringify(e));
  });
}



function showMoreText() {
  var baitText = 'oraz międzynarodowych Partnerów z&nbsp;Grupy TKH.';

  document.getElementById("hiddenText").setAttribute("style", "display: block");
  document.getElementById("insertBaitText").innerHTML=baitText;
  document.getElementById("moreText").setAttribute("style", "display: none");
}


// document.addEventListener("deviceready", FCMPluginReady, false);
/*
function FCMPluginReady() {
//FCMPlugin.getToken( successCallback(token), errorCallback(err) );
//Keep in mind the function will return null if the token has not been established yet.
  FCMPlugin.getToken(
    function (token) {
      console.log('token:', token);
    },
    function (err) {
      console.log('error retrieving token: ' + err);
    }
  );

  //FCMPlugin.onNotification( onNotificationCallback(data), successCallback(msg), errorCallback(err) )
//Here you define your application behaviour based on the notification data.
  FCMPlugin.onNotification(
    function (data) {
      if (data.wiadomosc) {
        if (data.wasTapped) {
          //Notification was received on device tray and tapped by the user.
          console.log('success notification recieve in background', data);
          myApp.addNotification({
            title: 'SkiCup 2017',
            message: '' + data.wiadomosc
          });
        } else {
          //Notification was received in foreground. Maybe the user needs to be notified.
          console.log('success notification recieve in foreground', data);
          console.log('wiadomosc: ' + data.wiadomosc, data.wiadomosc);
          myApp.addNotification({
            title: 'SkiCup 2017',
            message: '' + data.wiadomosc
          });
        }
      } else {
        console.log('data.wiadomosc is undefined, null or empty')
      }
    },
    function (msg) {
      console.log('onNotification callback successfully registered: ' + msg);
    },
    function (err) {
      console.log('Error registering onNotification callback: ' + err);
    }
  )
}
;*/
