function initAgenda(){
  console.log("Agenda page init.");
  activateTabbarIcon('agenda');

  setActiveDayTab();
  var selectors = $$('.tabs .inset.agenda-event-list ul.radius-zero');
  var currentTime = moment();
  console.log('CurrentTime: ' + currentTime._d);
  checkElementTimeStatus(selectors, currentTime);
}

function setActiveDayTab() {
  var tabsEl = $$('.content-block.remove-bottom-margin.align-less-to-top-element .buttons-row a.tab-link');
  console.log('tabsEl', tabsEl);
  var isActiveDayFlag = false;

  for (var i = 0; i < tabsEl.length; i++) {
    if ( tabsEl[i].attributes.id.value === moment().format('DD-MM-YYYY') ){
      tabsEl[i].className += ' active';
      myApp.showTab(tabsEl[i].hash);
      isActiveDayFlag = true;
    }
  }

  if(!isActiveDayFlag){
    tabsEl[0].className += ' active';
  }
}

function checkElementTimeStatus(nodes, currentTime){
  var start;
  var stop;
  var day;
  var weekTime = 604800000;
  console.log('nodes', nodes);

  for (var i = 0; i < nodes.length; i++){
    day = nodes[i].getAttribute('d');
    start = moment(nodes[i].getAttribute('start') + ' ' + day, 'HH:mm DD-MM-YYYY');
    stop = moment(nodes[i].getAttribute('stop') + ' ' + day, 'HH:mm DD-MM-YYYY');

    if (currentTime.isBetween(start, stop)){
      setActiveStyle(nodes[i]);
      console.log('Time between for element ' + nodes[i]);
    } else if (currentTime.isAfter(stop + weekTime)){
      console.log('Current time ' + currentTime + ' is after a week - setNormalStyle()');
    } else if (currentTime.isAfter(stop)){
      setDeactiveStyle(nodes[i]);
    }
  }
}

function setActiveStyle(activeElement){
  activeElement.style.background = '#264796';
  activeElement.style.color = 'white';
}

function setDeactiveStyle(deactiveElement){
  deactiveElement.style.background = '#f6f6f6';
  deactiveElement.style.color = 'lightgrey';
  deactiveElement.style.borderLeft = 'solid 2px #d5e1eb'
}

function setNormalStyle(){
}
