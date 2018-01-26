### Usage
```javascript
const toggle = require('ternary-toggle');

const opt1 = () => {
  return Math.floor(365 * 10 * 0.1);
};

const opt2 = () => {
  return Math.ceil(365 * 10 * 0.1);
};

const val = toggle(type === 'up', opt1, opt2);

```
