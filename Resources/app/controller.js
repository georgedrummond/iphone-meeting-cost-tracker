startBtn.addEventListener('click', function(){
  startBtn.hide();
  stopBtn.show();
  Stopwatch.start();
});

stopBtn.addEventListener('click', function(){
  Stopwatch.stop();
  stopBtn.enabled = false;
  resetBtn.enabled = true;
})

resetBtn.addEventListener('click', function(){
  Stopwatch.reset();
  stopBtn.enabled = true;
  stopBtn.hide();
  startBtn.show();
  resetBtn.enabled = false;
});

salarySlider.addEventListener('change', function(e){
  var salary = Math.round(e.value);
  salaryTotalLabel.text = currency+salary;
  Salary.total = salary;
  Meeting.update();
});

personSlider.addEventListener('change', function(e){
  var people = Math.round(e.value);
  personTotalLabel.text = people;
  People.total = people;
  Meeting.update();
});