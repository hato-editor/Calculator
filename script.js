document.getElementById("normal-calculator").style.display = "none";
document.getElementById("fraction-calculator").style.display = "none";
let ncb = document.getElementById("ncb");
let fcb = document.getElementById("fcb");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let dot = document.getElementById("dot");
let equal = document.getElementById("equal");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiplication = document.getElementById("multiplication");
let division = document.getElementById("division");
let a = "";
let number = [];
let number_of_terms = 0;
let mode;
let screen = document.getElementsByClassName("screen")[0];
let result;
let operator_f = document.getElementById("operator-f");
let mode_f;
let equal_f = document.getElementById("equal_f");
let fnbs = document.getElementById("firstnum-bunshi");
let fnbb = document.getElementById("firstnum-bunbo");
let snbs = document.getElementById("secondnum-bunshi");
let snbb = document.getElementById("secondnum-bunbo");
let nanbai_fs;
let nanbai_sc;
let result_bs;
let result_screen = document.getElementById("result");
let shouganai = 0;
let operator = "-";
function gcd(a, b){
    while(b != 0){
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}
function lcm(a, b){
    return a * b / gcd(a, b)
}
one.addEventListener('click', () => {
    a += "1"
    screen.textContent = a;
});
two.addEventListener('click', () => {
    a += "2"
    screen.textContent = a;
});
three.addEventListener('click', () => {
    a += "3"
    screen.textContent = a;
});
four.addEventListener('click', () => {
    a += "4"
    screen.textContent = a;
});
five.addEventListener('click', () => {
    a += "5"
    screen.textContent = a;
});
six.addEventListener('click', () => {
    a += "6"
    screen.textContent = a;
});
seven.addEventListener('click', () => {
    a += "7"
    screen.textContent = a;
});
eight.addEventListener('click', () => {
    a += "8"
    screen.textContent = a;
});
nine.addEventListener('click', () => {
    a += "9"
    screen.textContent = a;
});
zero.addEventListener('click', () => {
    a += "0"
    screen.textContent = a;
});
dot.addEventListener('click', () => {
    a += "."
    screen.textContent = a;
});
equal.addEventListener('click', () => {
    number.push(parseFloat(a));
    result = number[0];
    for(i = 1; i < number.length; i += 2){
        operator = number[i];
        next = number[i + 1];
        if(operator == "+"){
            result += next;
        } else if(operator == "-"){
            result -= next;
        } else if(operator == "*"){
            result *= next;
        } else if(operator == "/"){
            result /= next;
        }
    }
    screen.textContent = result
});
plus.addEventListener('click', () => {
    number.push(parseFloat(a));
    a = "";
    screen.textContent = "";
    number.push("+");
});
minus.addEventListener('click', () => {
    number.push(parseFloat(a));
    a = "";
    screen.textContent = "";
    number.push("-");
});
multiplication.addEventListener('click', () => {
    number.push(parseFloat(a));
    a = "";
    screen.textContent = "";
    number.push("*");        
});
division.addEventListener('click', () => {
    number.push(parseFloat(a));
    a = "";
    screen.textContent = "";
    number.push("/");        
});
ncb.addEventListener('click', ()=>{
    document.getElementById("normal-calculator").style.display = "block";
    if(document.getElementById("fraction-calculator").style.display == "block"){
        document.getElementById("fraction-calculator").style.display = "none";
    }
});
fcb.addEventListener('click', ()=>{
    document.getElementById("fraction-calculator").style.display = "block";
    if(document.getElementById("normal-calculator").style.display == "block"){
        document.getElementById("normal-calculator").style.display = "none";
    }
});
operator_f.addEventListener('change', () => {
    operator_f = document.getElementById("operator-f");
});
equal_f.addEventListener('click', ()=>{
    operator_f = document.getElementById("operator-f");
    if(operator_f.value == "+"){
        mode_f = 0;
    }else if(operator_f.value == "-"){
        mode_f = 1;
    }else if(operator_f.value == "*"){
        mode_f = 2;
    }else if(operator_f.value == "/"){
        mode_f = 3;
    }
    fnbs = document.getElementById("firstnum-bunshi").value;
    fnbb = document.getElementById("firstnum-bunbo").value;
    snbs = document.getElementById("secondnum-bunshi").value;
    snbb = document.getElementById("secondnum-bunbo").value;
    switch(mode_f){
        case 0:
            result_bb = lcm(fnbb, snbb)
            nanbai_fs = result_bb / fnbb;
            nanbai_sc = result_bb / snbb;
            result_bs = (fnbs * nanbai_fs) + (snbs * nanbai_sc)
            break;
        case 1:
            result_bb = lcm(fnbb, snbb)
            nanbai_fs = result_bb / fnbb;
            nanbai_sc = result_bb / snbb;
            result_bs = (fnbs * nanbai_fs) - (snbs * nanbai_sc)
            break;
        case 2:
            result_bb = fnbb * snbb;
            result_bs = fnbs * snbs;
            break;
        case 3:
            let itiji = snbb;
            snbb = snbs;
            snbs = itiji;
            result_bb = fnbb * snbb;
            result_bs = fnbs * snbs;
            break;
    }
    if(result_bs % result_bb == 0){
        result_screen.textContent = String(result_bs / result_bb);
    } else{
        let yakubun = gcd(result_bb, result_bs);
        result_bb /= yakubun;
        result_bs /= yakubun;
        result_screen.textContent = String(result_bs) + "/" + String(result_bb)
    }
});