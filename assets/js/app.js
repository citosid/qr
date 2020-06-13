var submit = document.getElementById('transform_qr');
var url = document.getElementById('url');
var qr = new QRCode(
  document.getElementById("qrcode"), {
    width: 128,
    height: 128,
    correctLevel : QRCode.CorrectLevel.H
  }
);

submit.addEventListener('click', event => {
  qr.clear();
  qr.makeCode(url.value);
});
