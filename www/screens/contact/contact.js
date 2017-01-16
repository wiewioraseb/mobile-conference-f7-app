function initContact (){
  console.log("Contact init");
  activateTabbarIcon('contact');

  var bypassAppChooser = false;
  $$('#telEwelina').on('click', function (){
    window.plugins.CallNumber.callNumber(onSuccessCall, onErrorCall, '605270055', bypassAppChooser);
  });

  $$('#telRobert').on('click', function (){
    window.plugins.CallNumber.callNumber(onSuccessCall, onErrorCall, '605270124', bypassAppChooser);
  });

  function onSuccessCall(result){
    console.log("Success call: "+result);
  }

  function onErrorCall(result) {
    console.log("Error call: "+result);
  }
}
