const EncryptRsa = require('encrypt-rsa').default;
const encryptRsa = new EncryptRsa();

const { privateKey: privateKey1, publicKey: publicKey1 } = encryptRsa.createPrivateAndPublicKeys();
const { privateKey: privateKey2, publicKey: publicKey2 } = encryptRsa.createPrivateAndPublicKeys();



// ***************************** USER1 *******************************
// user2 send text to user1 in Encrypted form 
// by using publicKey of user1, i.e., publicKey1
const encryptedText1 = encryptRsa.encryptStringWithRsaPublicKey({ 
    text: "Hi, I'm user2 using your publickey: publickey1",   
    publicKey: publicKey1,
});
console.log("publicKey1: ",encryptedText1);
// user1 received encrypted text from user2 and 
// able to decrypt this text using their privatekey , i.e., privatekey1
const decryptedText1 = encryptRsa.decryptStringWithRsaPrivateKey({ 
    text: encryptedText1,
    privateKey: privateKey1
  });
console.log("privateKey1: ",decryptedText1);
// *******************************************************************


// ***************************** USER2 *******************************
// user1 send text to user2 in Encrypted form 
// by using publicKey of user2, i.e., publicKey2
const encryptedText2 = encryptRsa.encryptStringWithRsaPublicKey({ 
    text: "Hello, I'm user1 using your publickey: publickey2",   
    publicKey: publicKey2,
});
console.log("publicKey2: ",encryptedText2);

// user2 received encrypted text from user1 and 
// able to decrypt this text using their privatekey , i.e., privatekey2
const decryptedText2 = encryptRsa.decryptStringWithRsaPrivateKey({ 
    text: encryptedText2,
    privateKey: privateKey2
  });
console.log("privateKey2: ",decryptedText2);