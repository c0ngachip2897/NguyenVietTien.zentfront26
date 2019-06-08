function veHinh() {
    var n = document.getElementById('n');
    var result = document.getElementById('result');
    var ve = "";


    if(!isNaN(n.value)) {
        for(var i = 0; i <= n.value; i++ ) {
            for(var j = 0; j < n.value - i; j++) {
                ve = ve + "*";
            }
            ve = ve + "<br/>";
        }
        result.innerHTML = ve;
    }else {
        result.innerHTML = "Không được nhập ký tự";
    }
}