var submit = document.getElementById('transform_qr');
var url = document.getElementById('url');
submit.addEventListener('click', event => {
  new QRCode(
    document.getElementById("qrcode"),
    url.value
  );
});
