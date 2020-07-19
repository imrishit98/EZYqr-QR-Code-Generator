let theQr = document.getElementById('qrCode');
let theUrl = document.getElementById('currentUrl');

chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  let url = tabs[0].url;
  theUrl.innerText = url;
  let qrLink = `https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=225x225`;
  let qrCode = `<img src="${qrLink}" title="${url}" alt="QR Code" />`;
  theQr.innerHTML = qrCode;
});
