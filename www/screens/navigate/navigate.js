function initNavigate (){
  console.log("Navigate init");
  activateTabbarIcon('location');

  function onSuccess(){
    console.log("Successfully launched navigator");
  }

  function onError(errMsg){
    console.log("Error launching navigator: "+errMsg);
  }

  function navigate(e){
    e.preventDefault();
    launchnavigator.navigate("49.420069, 20.959821", {
      appSelectionDialogHeader: 'Wybierz nawigację:',
      appSelectionCancelButton: 'Anuluj'
    });
    return false;
  }

  function initNativeNavigator() {
    $$('#startLaunchNavigator').on('click', navigate);
  }

  document.addEventListener("deviceready", initNativeNavigator, false);
}
