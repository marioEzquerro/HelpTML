function opacidad (v) {
  document.getElementById('foto-aumentada').src="imagenes/img-gal"+v+".png";
  document.getElementById('foto-aumentada').style.display="block";
  document.getElementById('velo').style.display="block";
  document.getElementById('cerrar').style.display="block";
}

function cerrarOpacidad () {
	document.getElementById('foto-aumentada').style.display="none";
  document.getElementById('velo').style.display="none";
  document.getElementById('cerrar').style.display="none";
}

function cabecera () {
  var titulo = document.getElementById('h1');
  titulo.innerHTML="HelpTML";
  titulo.style.transition="2.5s";
  titulo.style.letterSpacing="2px";

  var sub_tit = document.getElementById('p1');
  sub_tit.innerHTML="Como crear tu propia web";
  sub_tit.style.color="white";
  sub_tit.style.transition="6s";
  sub_tit.style.letterSpacing="3px";

  document.getElementById('a1').innerHTML="HOME";
  document.getElementById('a2').innerHTML="POSTS";
  document.getElementById('a3').innerHTML="GALERÍA";
  document.getElementById('a4').innerHTML="¿QUIÉN SOY?";

  var foot1 = document.getElementById('pie-pag1');
  foot1.innerHTML="HelpTML";
  foot1.style.transition="3s";
  foot1.style.opacity="1";

  var foot2 = document.getElementById('pie-pag2');
  foot2.innerHTML="©Copyright 2019 / Mario Ezquerro Ruiz";
  foot2.style.transition="4.5s";
  foot2.style.opacity="1";

}
