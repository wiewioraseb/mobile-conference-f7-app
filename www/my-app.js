var myApp = new Framework7();
var $$ = Dom7;
// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
  dynamicNavbar: false,
  domCache: false,
  preloadPreviousPage: false,
  swipeBackPage: false,
  sortable: false,
  swipeout: false
});

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  HideSplashScreenWhenReady();
  ShowStatusBar();
  document.addEventListener("resume", onResume, false);
}

// Splash screen hides only when application is loaded and ready
function HideSplashScreenWhenReady() {
  navigator.splashscreen.hide();
  console.log('Splashscreen hiding...');
}

// For iOS status bar overlays splash so statusbar is hidden from beginning in xcode
function ShowStatusBar() {
  if (cordova.platformId == 'android') {
    StatusBar.overlaysWebView(true);
    console.log('StatusBar overlays webview...');
  }
  StatusBar.backgroundColorByHexString('#264796');
  StatusBar.styleLightContent();
  StatusBar.show();
  console.log('StatusBar changes: background color, style, show');
}

function onResume() {
  // to invoke onPageInit to refresh agenda's entries status
  mainView.router.loadPage('screens/agenda/agenda.html');
  console.log('onResume loaded agenda page');
  initAgenda();
}

// first time the application starts, as onPageInit does not fire for index page
initIndexInfo();

myApp.onPageInit('indexPage', function (page) {
    initIndexInfo();
});

myApp.onPageInit('agendaPage', function (page) {
    initAgenda();
});

myApp.onPageInit('firstAgenda', function (page) {
    initFirstAgenda();
});

myApp.onPageInit('mapsPage', function (page) {
  initMaps();
});

myApp.onPageInit('navigatePage', function (page) {
  initNavigate();
});

myApp.onPageInit('contactPage', function (page) {
  initContact();
});

function activateTabbarIcon(currentPageIcon) {
  var toolbarElement = $$('#tb-' + currentPageIcon);

  $$('#tb-info').removeClass('full');
  $$('#tb-agenda').removeClass('full');
  $$('#tb-map').removeClass('full');
  $$('#tb-location').removeClass('full');
  $$('#tb-contact').removeClass('full');

  toolbarElement.addClass('full');
}
