document.getElementById('modeButton').addEventListener('click', () => {
  alert("DarkMode düzgün çalışmıyor olabilir bilginize!");
  document.body.classList.toggle('dark');
  localStorage.setItem('mode', document.body.classList)
})

if (localStorage.getItem('mode') != '') {
  document.body.classList.add(localStorage.getItem('mode'));
  document.getElementById('modeButton').checked = true;
}
