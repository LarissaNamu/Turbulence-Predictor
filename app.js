
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
  var realanswer = document.getElementById("first");
  var nextpage1 = document.getElementById("nextpage1");

  if(answergiven.value == realanswer.value){
      window.location = nextpage1.value;
  }
  else{
      alert('Please enter a valid flight number.');
  }

  return false; // prevent further bubbling of event
}





