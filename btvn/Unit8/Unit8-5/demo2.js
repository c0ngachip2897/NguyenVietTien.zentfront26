function sum() {
    var s 		= 0;
    var n 		= document.getElementById('n'); 
    var result 	= document.getElementById('result'); 

    if(!isNaN(n.value)) {
        for(var i = 1; i <= n.value; i++) {
            s = s + (1 / parseFloat(i));
            result.innerHTML = "Kết quả: " +s;
        }
    }else {
        result.innerHTML = "Hãy nhập một số nguyên dương";
    }
}
