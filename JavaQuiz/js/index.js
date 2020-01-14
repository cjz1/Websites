// pos is position of where the user in the test or which question they're up to
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
// this is a multidimensional array with 4 inner array elements with 5 elements inside them
// if you don't want answers viewable in the code, then you should use PHP and mySQL database
var questions = [
  ["What is never expected?", "A Wrong Answer", "The Spanish Inquisition", "Mentally Stable Teenage Females", "B"],
  ["What is a stupid question?", "This Question", "The Last Question", "The Next Question", "C"],
  ["In 1979 Bob was the first one of these to be given a male name.", "Hurricane", "Typhoon", "Cyclone", "A"],
  ["It's the bone that runs parallel and lateral to the tibia", "Humerus", "Femur", "Fibula", "C"],
  ["In this 'Bay State' some call it Webster Lake; others, Chargoggagogg-manchauggagogg-chaubunagunga-maugg", "Idaho", "Florida", "Massachusetts", "C"],
  ["Orin, the sadistic dentist in this musical, really enjoys his nitrous oxide", "Brotherman Bill", "Little Shop of Horrors", "TerribleTim", "B"],
  ["5-word line that follows 'I didn't expect a kind of Spanish Inquisition'", "Nobody expects the Spanish Inquisition", "No one expects the Spanish Inquisition", "Nothing is expected of the Spanish Inquisition", "A"]
  ];
// this get function is short for the getElementById function  
function get(x){
  return document.getElementById(x);
}
function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Test completed";
    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  test.innerHTML = "<h3>"+question+"</h3>";
  // the += appends to the data we started on the line above
  test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == questions[pos][4]){
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);