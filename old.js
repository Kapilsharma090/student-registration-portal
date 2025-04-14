//alert("नमस्ते Student Registration Portal में आपका स्वागत है");

const form = document.getElementById('loginForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();


  
  const username = document.getElementById('username').value;
  const ID = document.getElementById('ID').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;

 
  

  // Store in localStorage (Not secure, just for demonstration)
  localStorage.setItem('loginData', JSON.stringify({ username, ID,email,number }));

  alert('Login data stored in localStorage!');
});

//notfy when user click on registered data link
const a = document.getElementById('userdata');
a.addEventListener('click', function(e) {
  e.preventDefault();

  alert('Please check in Localstorage!');
});
