# yoAuth | Simply Theme
A simple but effective yoauth theme.

## Setup
Assuming you have a yoAuth application setup already; make sure you have `yoauth-simply-theme` installed. Then, just add the following line marked with "!!!":
```js
// ...
const auth = new YoAuth.YoAuth({...});
// ...
auth.plugin(require('yoauth-simply-theme').Plugin); // !!!
```

------
**Licensed under the MIT License**