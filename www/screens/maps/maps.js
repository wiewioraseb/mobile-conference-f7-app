function initMaps() {
  console.log("Maps page init");
  activateTabbarIcon('map');

  $$('#event_map_ski').on('click', function () {
    cordova.InAppBrowser.open('resources/img/maps/event_map_ski-min.png','_blank','location=no,enableViewportScale=true,zoom=yes,closebuttoncaption= < Powrót');
  });
}
