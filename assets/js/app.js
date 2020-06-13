var submit = document.getElementById('transform_qr');
var url = document.getElementById('url');
var qr = new QRCode(
  document.getElementById("qrcode")
);

submit.addEventListener('click', event => {
  qr.clear();
  qr.makeCode(url.value);
});
