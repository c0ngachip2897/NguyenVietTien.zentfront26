function veHinh() {

	var n = document.getElementById('n');
	var result = document.getElementById('result');
	var ve = "";

	if(!isNaN(n.value)) {
		for(var i = 1; i <= n.value; i++ ) {
			for(var j = 1; j <= i; j++) {
				ve = ve + "*";
			}
			ve = ve + "<br/>";
		}
		result.innerHTML = ve;
	}else {
		result.innerHTML = "Không được nhập ký tự";
	}
}