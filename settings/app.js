const form = document.getElementById('settingsForm');
const status = document.getElementById('status');
const resetBtn = document.getElementById('resetBtn');

const defaults = {
  username: '',
  email: '',
  updateInterval: 60,
  enableNotifications: false,
};

function showError(field, message){
  const el = document.querySelector(`.error[data-for="${field}"]`);
  if(el) el.textContent = message;
}

function clearErrors(){
  document.querySelectorAll('.error').forEach(e=>e.textContent='');
}

function validate(values){
  clearErrors();
  let ok = true;

  if(!values.username || values.username.trim().length < 3){
    showError('username','Enter at least 3 characters');
    ok = false;
  }

  if(!values.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)){
    showError('email','Enter a valid email');
    ok = false;
  }

  const n = Number(values.updateInterval);
  if(!Number.isFinite(n) || n < 1 || n > 1440){
    showError('updateInterval','Enter a value between 1 and 1440');
    ok = false;
  }

  return ok;
}

function readForm(){
  return {
    username: form.username.value,
    email: form.email.value,
    updateInterval: form.updateInterval.value,
    enableNotifications: form.enableNotifications.checked,
  };
}

function writeForm(values){
  form.username.value = values.username || '';
  form.email.value = values.email || '';
  form.updateInterval.value = values.updateInterval ?? defaults.updateInterval;
  form.enableNotifications.checked = !!values.enableNotifications;
}

function load(){
  try{
    const raw = localStorage.getItem('flyrank.settings');
    if(!raw) return writeForm(defaults);
    const parsed = JSON.parse(raw);
    writeForm(Object.assign({}, defaults, parsed));
  }catch(e){
    writeForm(defaults);
  }
}

function save(values){
  localStorage.setItem('flyrank.settings', JSON.stringify(values));
}

form.addEventListener('submit', e=>{
  e.preventDefault();
  const values = readForm();
  if(!validate(values)){
    status.textContent = 'Fix validation errors.';
    return;
  }
  save(values);
  status.textContent = 'Settings saved.';
});

resetBtn.addEventListener('click', ()=>{
  localStorage.removeItem('flyrank.settings');
  writeForm(defaults);
  clearErrors();
  status.textContent = 'Reset to defaults.';
});

load();
