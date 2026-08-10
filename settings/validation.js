// Pure validation logic for settings. No DOM used so it can be tested in Node.
export const defaults = {
  username: '',
  email: '',
  updateInterval: 15,
  enableNotifications: false,
};

export function validateSettings(values){
  const errors = {};

  const username = (values.username ?? '').toString();
  if(username.trim().length < 3){
    errors.username = 'Username must be at least 3 characters.';
  }

  const email = (values.email ?? '').toString();
  const emailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if(!emailRe.test(email)){
    errors.email = 'Enter a valid email address.';
  }

  const n = Number(values.updateInterval);
  if(!Number.isFinite(n) || !Number.isInteger(n) || n < 1 || n > 60){
    errors.updateInterval = 'Update interval must be an integer between 1 and 60.';
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
