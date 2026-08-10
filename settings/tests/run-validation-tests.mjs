import { validateSettings, defaults } from '../validation.js';

const cases = [
  { name: 'valid values', input: { username: 'alice', email: 'a@b.com', updateInterval: 10 }, expectValid: true },
  { name: 'short username', input: { username: 'al', email: 'a@b.com', updateInterval: 10 }, expectValid: false, expectErrorKey: 'username' },
  { name: 'invalid email', input: { username: 'alice', email: 'not-an-email', updateInterval: 10 }, expectValid: false, expectErrorKey: 'email' },
  { name: 'update interval low', input: { username: 'alice', email: 'a@b.com', updateInterval: 0 }, expectValid: false, expectErrorKey: 'updateInterval' },
  { name: 'update interval high', input: { username: 'alice', email: 'a@b.com', updateInterval: 61 }, expectValid: false, expectErrorKey: 'updateInterval' },
  { name: 'non-integer interval', input: { username: 'alice', email: 'a@b.com', updateInterval: 5.5 }, expectValid: false, expectErrorKey: 'updateInterval' },
];

let failed = 0;
for(const c of cases){
  const res = validateSettings(c.input);
  const ok = res.valid === c.expectValid && (!c.expectErrorKey || res.errors[c.expectErrorKey]);
  if(!ok){
    console.error(`FAIL: ${c.name}`);
    console.error('  input:', c.input);
    console.error('  result:', res);
    failed++;
  } else {
    console.log(`PASS: ${c.name}`);
  }
}

if(failed){
  console.error(`\n${failed} test(s) failed.`);
  process.exit(1);
}
console.log('\nAll tests passed.');
