function veHinh() {
    var n = document.getElementById('n');
    var result = document.getElementById('result');
    var ve = "";

    if(!isNaN(n.value)) {
        for(var i = 0; i < n.value; i++ ) {
            ve = ve + "<p>";
            for(var j = 0; j < n.value; j++) {

                if(j >= i) {
                    ve = ve + "*";
                }else {
                    ve = ve + "&nbsp;&nbsp;";
                }
            }

            ve =ve + "<br/>";
        }
        result.innerHTML = ve;
    }else {
        result.innerHTML = "Không được nhập ký tự";
    }
}