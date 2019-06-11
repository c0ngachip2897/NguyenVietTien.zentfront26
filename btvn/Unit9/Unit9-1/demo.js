function tab1(obj) {
    document.getElementById('contentTab1').style.display="block";
    document.getElementById('contentTab2').style.display="none";
    document.getElementById('contentTab3').style.display="none";
    //Xử lý màu nền
    document.getElementById('btnTab2').style.background="";
    document.getElementById('btnTab3').style.background="";
    //Xử lý màu nền
    document.getElementById('btnTab2').style.color="white";
    document.getElementById('btnTab3').style.color="white"
    obj.style.background="white";
    obj.style.color="black";
}

function tab2(obj) {
    document.getElementById('contentTab1').style.display="none";
    document.getElementById('contentTab2').style.display="block";
    document.getElementById('contentTab3').style.display="none";
    //Xử lý màu nền
    document.getElementById('btnTab1').style.background="rgb(57, 57, 134)";
    document.getElementById('btnTab3').style.background="";
    //Xử lý màu nền
    document.getElementById('btnTab1').style.color="white";
    document.getElementById('btnTab3').style.color="white"
    obj.style.background="white";
    obj.style.color="black";
}

function tab3(obj) {
    document.getElementById('contentTab1').style.display="none";
    document.getElementById('contentTab2').style.display="none";
    document.getElementById('contentTab3').style.display="block";
    // Xử lý màu nền
    document.getElementById('btnTab1').style.background="rgb(57, 57, 134)";
    document.getElementById('btnTab2').style.background="";
    //Xử lý màu nền
    document.getElementById('btnTab1').style.color="white";
    document.getElementById('btnTab2').style.color="white"
    obj.style.background="white";
    obj.style.color="black";
}