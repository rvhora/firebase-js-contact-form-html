// Your web app's Firebase configuration

//https://firebase.google.com/docs/web/setup#available-libraries -->


// Your web app's Firebase configuration

//TODO - FIREBASE CONFIGURATIONS
var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Reference message collection, with collection name 'message'
var messageRef = firebase.database().ref('message');


//Listen for the form submit

document.getElementById('contactForm').addEventListener('submit', submitForm);


//Submit form
function submitForm(e) {
    e.preventDefault();
    console.log('Form submit')

    //get values
    var name = getInputVal('name')
    var company = getInputVal('company')
    var email = getInputVal('email')
    var phone = getInputVal('phone')
    var message = getInputVal('message')

    //save message 
    saveMessage(name, company, email, phone, message);

    //show alert
    document.querySelector('.alert').style.display = 'block';

    //Hide alert after 3 sec

    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';

    }, 3000);

    //clear reset form fields
    document.getElementById('contactForm').reset()
}

//Function to get form values

function getInputVal(id) {
    return document.getElementById(id).value;
}


//Save message to firebase

function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    })
}