const url = require('url');

const { URL } = url; // 구조분해할당
const myURL = new URL('https://www.google.com/search?q=git&oq=git&gs_lcrp=EgZjaHJvbWUyDAgAEEUYORixAxiABDIGCAEQRRg8MhAIAhAuGMcBGLEDGNEDGIAEMgoIAxAAGLEDGIAEMgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg5NDk2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8');
// console.log(url);
console.log('URL', URL);
console.log('myURL', myURL);
console.log('url.format()', url.format(myURL));