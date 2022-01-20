var div = document.getElementById('compute');

function add1() {
    div.value += 1;
}

function add2() {
    div.value += 2;
}

function add3() {
    div.value += 3;
}

function add4() {
    div.value += 4;
}

function add5() {
    div.value += 5;
}

function add6() {
    div.value += 6;
}

function add7() {
    div.value += 7;
}

function add8() {
    div.value += 8;
}

function add9() {
    div.value += 9;
}

function add0() {
    div.value += 0;
}

function equal() {
    div.value = eval(div.value);
}

function allclear() {
    div.value = "";
}

function addmultiplicator() {
    div.value += "*";
}

function adddifference() {
    div.value += "-";
}

function addsum() {
    div.value += "+";
}

function adddivide() {
    div.value += "/";
}

function addpoint() {
    div.value += ".";
}

document.addEventListener('keydown', function(e){
    if(e.keyCode === 97){
        add1();
    }
    else if(e.keyCode === 98){
        add2();
    }
    else if(e.keyCode === 99){
        add3();
    }
    else if(e.keyCode === 100){
        add4();
    }
    else if(e.keyCode === 101){
        add5();
    }
    else if(e.keyCode === 102){
        add6();
    }
    else if(e.keyCode === 103){
        add7();
    }
    else if(e.keyCode === 104){
        add8();
    }
    else if(e.keyCode === 105){
        add9();
    }
    else if(e.keyCode === 96){
        add0();
    }
    else if(e.keyCode === 107){
        addsum();
    }
    else if(e.keyCode === 109){
        adddifference();
    }
    else if(e.keyCode === 107){
        addsum();
    }
    else if(e.keyCode === 106){
        addmultiplicator();
    }
    else if(e.keyCode === 111){
        adddivide();
    }
    else if(e.keyCode === 13){
        equal();
    }
    else if(e.keyCode === 27){
        allclear();
    }
    else if(e.keyCode === 190){
        addpoint();
    }
}
);