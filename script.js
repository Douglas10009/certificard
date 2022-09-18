mudarEstado("tema-escuro");
mudarEstado("att-sol");

function mudaTema() {
	document.body.classList.toggle("dark");

	mudarEstado("tema-claro");
	mudarEstado("att-lua");
	mudarEstado("tema-escuro");
	mudarEstado("att-sol");
}

function mudarEstado(el) {
	var display = document.getElementById(el).style.display;
	if (display == "none") document.getElementById(el).style.display = "block";
	else document.getElementById(el).style.display = "none";
}