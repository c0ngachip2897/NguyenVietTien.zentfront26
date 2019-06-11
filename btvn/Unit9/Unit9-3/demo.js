var up = 0; // biễn để tăng lên

			function Default() {
				for(var i = 0; i< document.getElementsByClassName('text').length; i++) {
					document.getElementsByClassName('text')[i].style.fontSize="100%";
				}
			}

			function Big() {
				for(var i = 0; i< document.getElementsByClassName('text').length; i++) {

					up = 80;
					document.getElementsByClassName('text')[i].style.fontSize=(up + 100) + "%";
				}
			}

			function Small() {
				for(var i = 0; i< document.getElementsByClassName('text').length; i++) {

					up = -30;
					document.getElementsByClassName('text')[i].style.fontSize=(up + 100) + "%";
				}
			}