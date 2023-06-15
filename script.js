let c1,c2,c3 = "";
const arr=[];
const array = ['chartreuse', 'yellow', 'blue'];
const array_buttons = ['b1','b2','b3','b4','b5','b6','b7','b8','b9'];
let aattempcr = [];
let attempsv = 0;
let divcolors=['n1','n2','n3','n4','n5','n6','n7','n8','n9'];
function random_item(){
// program to get a random item from an array function getRandomItem(arr) {

    // get random index value
    const randomIndex1 = Math.floor(Math.random() * array.length);
    const randomIndex2 = Math.floor(Math.random() * array.length);
    const randomIndex3 = Math.floor(Math.random() * array.length);

    // get random item
    const item1 = array[randomIndex1];
    const item2 = array[randomIndex2];
    const item3 = array[randomIndex3];
    
    c1= item1;
    c2= item2;
    c3= item3;
    console.log(item1,item2,item3);
}

function change_colors_b1(n,m,o,bu){
    var a = document.getElementById(n);
    var b = document.getElementById(m);
    var c = document.getElementById(o);
    var d = bu;
    //console.log(bu);
    //document.getElementById(b);
    a.style.backgroundColor = c1;
    b.style.backgroundColor = c2;
    c.style.backgroundColor = c3;
    document.getElementById(d).disabled = true;

    //var na = document.getElementById('p').innerHTML;
}

function start_butto_allowed(){
    array_buttons.forEach((array_button) => {
        var id = array_button
        document.getElementById(id).disabled = false;
        console.log(id);
    });

    //location.reload();

}

function attempsFunction(){
    attempsv = attempsv + 1;
    document.getElementById('p').innerHTML = attempsv;
    
    if (attempsv=== 9) {
        var cb1="";
        var id_div="";
        cb1 = document.getElementById('n1').style.background;

        divcolors.forEach((divcolor) => {
            var id_divc = divcolor;
            id_div= document.getElementById(id_divc).style.backgroundColor;
            aattempcr.push(id_div);            
        });
        
        if (aattempcr[0] === aattempcr[1] && aattempcr[1]===aattempcr[2] ||
            aattempcr[3] === aattempcr[4] && aattempcr[4]===aattempcr[5] ||
            aattempcr[6] === aattempcr[7] && aattempcr[7]===aattempcr[8] ||
            aattempcr[0] === aattempcr[3] && aattempcr[3]===aattempcr[6] ||
            aattempcr[1] === aattempcr[4] && aattempcr[4]===aattempcr[7] ||
            aattempcr[2] === aattempcr[5] && aattempcr[5]===aattempcr[8] ||
            aattempcr[0] === aattempcr[4] && aattempcr[4]===aattempcr[8] ||
            aattempcr[2] === aattempcr[4] && aattempcr[4]===aattempcr[6]) {
            openPopup(); 
            
        } else {
            openPopup1();            
        }
           
    }    
    //console.log(attempsv);
    //divcolor = document.getElementById('n'+attempsv).style.backgroundColor;
    //aattempcr.push(divcolor);
    console.log(aattempcr);
}
console.log(attempsv);
let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

let popup1 = document.getElementById("popup1");

function openPopup1(){
    popup1.classList.add("open-popup1");
}
function closePopup1(){
    popup1.classList.remove("open-popup1");
}
//var btn = document.getElementById("b1");
//btn.addEventListener("click", attempsFunction);
//const fruits = ["apple", "orange", "cherry"];
//fruits.forEach(myFunction);
