
// function getData(form) {
//     var formData = new FormData(form);
  
//     for (var pair of formData.entries()) {
//       console.log(pair[0] + ": " + pair[1]);
//     }
  
//     console.log(Object.fromEntries(formData));
//     a = Object.fromEntries(formData);
//     flyn = Object.values(a);
//     return "https://www.flightaware.com/live/flight/AAL" + flyn[0];
//   }


// document.getElementById("myForm").addEventListener("submit", function (e) {
//     e.preventDefault();
//     getData(e.target);
    
    
// });

function redirect() {
  var answergiven = document.getElementById("answergiven");
  var realanswer1 = document.getElementById("first");
  var nextpage1 = document.getElementById("nextpage1");
  var realanswer2 = document.getElementById("second");
  var nextpage2 = document.getElementById("nextpage2");
  var realanswer3 = document.getElementById("third");
  var nextpage3 = document.getElementById("nextpage3");

  if(answergiven.value == realanswer1.value){
      window.location = nextpage1.value;
      return false;
  }
  if(answergiven.value == realanswer2.value){
    window.location = nextpage2.value;
    return false;
  }
  if(answergiven.value == realanswer3.value){
    window.location = nextpage3.value;
    return false;
  }
  
  else{
      alert('Please enter a valid flight number.');
  }

  return false; // prevent further bubbling of event
}





