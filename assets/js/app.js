var submit = document.getElementById('transform_qr');
var url = document.getElementById('url');
var image = document.getElementById('qr');
var header = document.getElementById('headerQr');

var QRC = qrcodegen.QrCode;
var svgSrc = 'data:image/svg+xml;base64,';

submit.addEventListener('click', event => {
  image.src = '';
  var qr0 = QRC.encodeText(url.value, QRC.Ecc.MEDIUM);
  var svg = qr0.toSvgString(1);
  image.src = svgSrc + btoa(svg);
  header.innerText = url.value;
});

url.addEventListener('change', () => submit.click());
url.addEventListener('blur', () => submit.click());
url.addEventListener('keyup', () => submit.click());
