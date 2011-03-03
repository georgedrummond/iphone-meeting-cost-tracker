var People = {
  total:people
};

var Time = {
  total:0
};

var Salary = {
  total:salary
};

var Meeting = {
  cost:cost,
  update:function(){
    // Look at this!
    this.cost = ((People.total * Salary.total)/3600000) * Time.total.getTime();
    costLabel.text = currency+this.cost.toFixed(2)
  }
};

var timer, now, then;

var Stopwatch = {
  start:function(){
    then = new Date();
    timer = setInterval(function(){
      Stopwatch.updateDisplay();
    }, 1000);
  },
  stop:function(){
    clearInterval(timer);
  },
  reset:function(){
    then = new Date();
    now = then;
    Stopwatch.updateDisplay();
    Meeting.update();
  },
  updateDisplay:function(){
    now = new Date();
    Time.total = new Date(Math.abs(now.getTime() - then.getTime()));
    var seconds = Time.total.getSeconds();
    var minutes = Time.total.getMinutes();
    var hours = Time.total.getHours();
    Meeting.update();
    minutesLabel.text = [this.doubleDigits(hours), this.doubleDigits(minutes), this.doubleDigits(seconds)].join(':');
  },
  doubleDigits:function(n){
    if(n.toString().length == 1){
      return '0'+n;
    } else{
      return n;
    }
  }
};