var win = Ti.UI.createWindow();

var personView = Ti.UI.createView({
  top:40,
  left:10,
  right:10,
  height:70,
  backgroundColor:'#ccc',
  borderRadius:15
});

var personLabel = Ti.UI.createLabel({
  text:'Number Of Attendees',
  top:10,
  left:20,
  right:20,
  color:'#fff',
  height:'auto',
  textAlign:'center'
});

var personSlider = Ti.UI.createSlider({
  min:1,
  max:15,
  value:3,
  right:120,
  left:10,
  height:'auto'
});

var personTotalLabel = Ti.UI.createLabel({
  text:people,
  top:10,
  bottom:10,
  textAlign:'center',
  color:'#333',
  height:50,
  right:10,
  width:100,
  font:{fontSize:24, fontWeight:'bold'}
});

win.add(personLabel);
personView.add(personSlider);
personView.add(personTotalLabel);
win.add(personView);

var salaryLabel = Ti.UI.createLabel({
  text:'Average Salary Per Hour',
  top:140,
  left:20,
  right:20,
  color:'#fff',
  height:'auto',
  textAlign:'center'
});

salaryView = Ti.UI.createView({
  top:170,
  left:10,
  right:10,
  height:70,
  backgroundColor:'#ccc',
  borderRadius:15
});

var salaryTotalLabel = Ti.UI.createLabel({
  text:salary,
  top:10,
  bottom:10,
  textAlign:'center',
  color:'#333',
  height:50,
  right:10,
  width:100,
  font:{fontSize:24, fontWeight:'bold'}
});

var salarySlider = Ti.UI.createSlider({
  min:1,
  max:200,
  value:5,
  right:120,
  left:10,
  height:'auto'
});

win.add(salaryLabel);
salaryView.add(salarySlider);
salaryView.add(salaryTotalLabel);
win.add(salaryView);

var controlsView = Ti.UI.createView({
  top:320,
  left:15,
  right:15,
  height:50
});

var startBtn = Ti.UI.createButton({
  title:'Start',
  width:135,
  height:50,
  right:0,
  top:0,
  color:'#fff',
  style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
  backgroundImage:'images/start.png',
  font:{
    fontSize:20,
    fontWeight:'bold'
  }
});

var stopBtn = Ti.UI.createButton({
  title:'Stop',
  width:135,
  height:50,
  right:0,
  top:0,
  color:'#fff',
  style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
  backgroundImage:'images/stop.png',
  font:{
    fontSize:20,
    fontWeight:'bold'
  }
});

var resetBtn = Ti.UI.createButton({
  title:'Reset',
  width:135,
  height:50,
  left:0,
  top:0,
  color:'#ccc',
  enabled:false,
  style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
  backgroundImage:'images/reset.png',
  font:{
    fontSize:20,
    fontWeight:'bold'
  }
});

controlsView.add(stopBtn);
stopBtn.hide();
controlsView.add(startBtn);
controlsView.add(resetBtn);
win.add(controlsView);

var minutesLabel = Ti.UI.createLabel({
  text:'00:00:00',
  color:'#fff',
  height:'auto',
  font:{fontSize:40, fontWeight:'bold'},
  top:260,
  left:0,
  right:0,
  textAlign:'center'
});

win.add(minutesLabel);

var costView = Ti.UI.createView({
  backgroundImage:'images/cost_bg.png',
  bottom:0,
  left:0,
  right:0,
  height:80
});

var costLabel = Ti.UI.createLabel({
  text:cost,
  color:'#333',
  right:20,
  font:{
    fontSize:60,
    fontWeight:'bold',
    fontSpacing:5
  },
  textAlign:'right'
});

costView.add(costLabel);
win.add(costView);