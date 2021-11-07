let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(byteSequence.includes('x'));

const result = /x/.test(byteSequence);
console.log(result);

console.log(byteSequence.search(/x/) ? true : false);
