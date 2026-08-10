import { validateSettings, defaults } from './validation.js';

const form = document.getElementById('settingsForm');
const status = document.getElementById('status');
const resetBtn = document.getElementById('resetBtn');

function getValuesFromForm(){
  return {
    username: form.username.value,
    email: form.email.value,
    updateInterval: Number(form.updateInterval.value),
    enableNotifications: form.enableNotifications.checked,
  };
}

function setFieldError(id, message){
  const errEl = document.getElementById(`${id}-error`);
  const input = document.getElementById(id);
  if(errEl) errEl.textContent = message || '';
  if(input) input.setAttribute('aria-invalid', message ? 'true' : 'false');
}

function clearAllErrors(){
  ['username','email','updateInterval'].forEach(id=> setFieldError(id,''));
}

function writeForm(values){
  form.username.value = values.username ?? '';
  form.email.value = values.email ?? '';
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
  clearAllErrors();
  status.textContent = '';
  const values = getValuesFromForm();
  const { valid, errors } = validateSettings(values);
  if(!valid){
    // show inline errors and keep values
    Object.entries(errors).forEach(([k,msg]) => setFieldError(k, msg));
    // focus first invalid field
    const first = Object.keys(errors)[0];
    const el = document.getElementById(first);
    if(el) el.focus();
    status.textContent = 'Please fix the errors above.';
    return;
  }
  save(values);
  status.textContent = 'Settings saved successfully.';
});

resetBtn.addEventListener('click', ()=>{
  localStorage.removeItem('flyrank.settings');
  writeForm(defaults);
  clearAllErrors();
  status.textContent = 'Settings reset to defaults.';
  form.username.focus();
});

load();
