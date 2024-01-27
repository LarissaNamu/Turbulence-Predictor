function getData(form) {
    var formData = new FormData(form);
  
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  
    console.log(Object.fromEntries(formData));
    
    a = Object.fromEntries(formData);
    flyNum = Object.values(a);
    //console.log(flyNum[0]);
    return flyNum[0]  //returns flight number
  }
  
  document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);
  });

