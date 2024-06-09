function detectDeviceAndRedirect() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Check if the user agent is a mobile device
  if (/android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      // Redirect to the coming soon page if on a mobile device
      window.location.href = "/comingsoon";
  }
}

// Run the function on page load
window.onload = detectDeviceAndRedirect;

let getStarted = document.querySelector('.get-started');
getStarted.addEventListener('click', () => {
  window.location.href = '/login';
});

let exploreBtn = document.querySelector('.btn');
exploreBtn.addEventListener('click', () => {
  window.location.href = '/login';
});
let getBtn = document.querySelector('.get-btn');
getBtn.addEventListener('click', () => {
  window.location.href = '/login';
});

let loginBtn = document.querySelector('.login');
loginBtn.addEventListener('click', () => {
  window.location.href = '/login';
});

let signBtn = document.querySelector('.signup');
signBtn.addEventListener('click', () => {
  window.location.href = '/signup';
});
