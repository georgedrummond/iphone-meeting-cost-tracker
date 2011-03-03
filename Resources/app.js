Titanium.UI.setBackgroundColor('#000');
Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK;

var people = 3;
var salary = 24;
var currency = '£';
var cost = currency+'0.00';

Ti.include('app/view.js');
Ti.include('app/model.js');
Ti.include('app/controller.js');

win.open();