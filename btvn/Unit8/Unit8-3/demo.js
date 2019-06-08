
        function giaiThua(n) {
            var giaiThua 	= 1;
            for(var i = 1; i <= n; i++) {
                giaiThua = giaiThua * i;
            }
            return giaiThua;
        }

        function tinhTong() {
            var n 			=  document.getElementById('n');
            var result 		= document.getElementById('result');
            var sum = 0;

            if(!isNaN(n.value)) {
                for(var i = 1; i <= n.value; i++) {
                    sum = sum + (i / giaiThua(i));
                }
                result.innerHTML = "Kết quả: " + sum;
            }else {
                result.innerHTML = "Hãy nhập một số nguyên dương";
            }
        }
