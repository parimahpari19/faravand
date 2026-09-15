// Search functionality
function searchPart() {
  const query = document.getElementById('searchInput').value.trim();
  if (query) {
    showMessage(`جستجو برای: ${query}`);
  } else {
    showMessage('لطفاً یک قطعه یا کد فنی وارد کنید');
  }
}

function setSearch(term) {
  document.getElementById('searchInput').value = term;
  searchPart();
}

function showMessage(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function loginClick() {
  showMessage('صفحه ورود در حال بارگیری...');
  // Redirect or show login modal
  setTimeout(() => {
    // window.location.href = '/login';
  }, 1500);
}

// Navigation active state
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    this.classList.add('active');
  });
});