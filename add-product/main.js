const btn = document.getElementById('bt1');
btn.addEventListener('click', newProduct)

function newProduct(){
    let pname1=document.getElementById('pname').value;
let name1=document.getElementById('name').value;

let img1=document.getElementById('img1').value;

let price1=document.getElementById('price').value;



/*console.log(name1);
console.log(mobile);
console.log(details);
console.log(img1);
console.log(pname);
console.log(price);
console.log(size);*/

var itemsfromhtml= {pname:pname1, name:name1, img:img1, price:price1, }
var newobject=new ItemsController(0);
/*console.log(itemsfromhtml);
console.log(newobject);*/
//console.log(newobject.items);
newobject.addItem(itemsfromhtml);
newobject.display();

const source = document.getElementById('greet').innerHTML;

const template = Handlebars.compile(source)

const context = {};
  context.namefull=name1;
  
  


    const compiledHtml = template(context)

    const information = document.getElementById('finalmessage')
    information.innerHTML = compiledHtml

};