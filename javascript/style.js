function myFunction() {
  var x = document.getElementById('myDIV');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function COMMERCIAL() {
  var x = document.getElementById('myDIV-COMMERCIAL');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function INSPECTIONS() {
  var x = document.getElementById('myDIV-INSPECTIONS');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function Events() {
  var x = document.getElementById('myDIV-Events');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function CUSTOM() {
  var x = document.getElementById('myDIV-CUSTOM');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}



// Initialize Firebase
var config = {
  apiKey: "AIzaSyBhViXjcDakWSeEbKU27zWlPthhRvDEqj8",
  authDomain: "contactform-53e4a.firebaseapp.com",
  databaseURL: "https://contactform-53e4a.firebaseio.com",
  projectId: "contactform-53e4a",
  storageBucket: "",
  messagingSenderId: "696655833047"
};
firebase.initializeApp(config);

// reference message collection
var messagesRef = firebase.database().ref('messages');

// list for submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var firstname = getInputVal('firstname');
  var lastname = getInputVal('lastname');
  var phone = getInputVal('phone');
  var email = getInputVal('email');
  var projectdate = getInputVal('projectdate');
  var streetaddress = getInputVal('streetaddress');
  var city = getInputVal('city');
  var state = getInputVal('state');
  var zipcode = getInputVal('zipcode');
  var message = getInputVal('message');

  //save message
  saveMessage(firstname, lastname, phone, email, projectdate, streetaddress, city, state, zipcode, message);

  //show alert
  document.querySelector('.alert').style.display = 'block';

  // hide alert after 3  seconds
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  //clear form
  document.getElementById('contactForm').reset();
}

// function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}


// save message to firebase
function saveMessage(firstname, lastname, phone, email, projectdate, streetaddress, city, state, zipcode, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    firstname: firstname,
    lastname: lastname,
    phone: phone,
    email: email,
    projectdate: projectdate,
    streetaddress: streetaddress,
    city: city,
    state: state,
    zipcode: zipcode,
    message: message
  });
}
