let c1,c2,c3 = "";
const arr=[];
const array = ['chartreuse', 'yellow', 'blue'];
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
}
