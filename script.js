// Kullanıcıları localStorage'de depolamak için fonksiyon
function storeUser(username, password) {
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
}

// Kullanıcı kayıt işlemi
function registerUser() {
  // Form elemanlarına erişim
  var fullname = document.getElementById('newFullname').value;
  var username = document.getElementById('newUsername').value;
  var email = document.getElementById('newEmail').value;
  var password = document.getElementById('newPassword').value;

  // Kullanıcıyı localStorage'e kaydet
  storeUser(username, password);

  // Başka bir sayfaya yönlendirme veya başka bir işlem yapılabilir
  alert('Kayıt işlemi başarılı! Şimdi giriş yapabilirsiniz.');

  // Formun sayfada yeniden gönderilmesini engellemek için false döndür
  return false;
}

// Giriş işlemi
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Formun sayfada yeniden gönderilmesini engellemek için

  // Kullanıcı bilgilerini kontrol et
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // localStorage'deki bilgileri kontrol et
  var storedUsername = localStorage.getItem('username');
  var storedPassword = localStorage.getItem('password');

  // Kullanıcı bilgileri doğrulama
  if (username === storedUsername && password === storedPassword) {
    alert('Başarıyla giriş yaptınız! Şimdi panel sayfasına yönlendiriliyorsunuz.');
    // Kullanıcıyı panel sayfasına yönlendir
    window.location.replace("panel.html");
  } else {
    alert('Kullanıcı adı veya şifre yanlış. Lütfen tekrar deneyin.');
  }
});

// Çıkış işlemi
function logout() {
  localStorage.removeItem('username');
  localStorage.removeItem('password');
  alert('Başarıyla çıkış yaptınız.');
  window.location.replace("index.html"); // Giriş sayfasına geri yönlendir
}

// Modal açma ve kapatma işlemleri
function openSignupModal() {
  document.getElementById('signupModal').style.display = 'block';
}

function closeSignupModal() {
  document.getElementById('signupModal').style.display = 'none';
}

function openLoginModal() {
  document.getElementById('signupModal').style.display = 'none'; // Önce kayıt modalini gizleyelim
}
