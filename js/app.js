import { name } from '/js/user.js';
import { code } from '/js/user.js';
import { default as tg } from '/js/user.js';
import { withdraw as wd, deposit } from '/js/account.js';

import * as usr from '/js/user.js';

tg();
usr.code();

console.log(name);
// code();
wd();
deposit();