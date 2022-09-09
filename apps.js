let ar = [
    {
CompanyName: "Iphone",
name: "13Pro",
ram: 64,
rom: 4,
price: 12000,
},
{
CompanyName: "Infinix",
name: "Hot10",
ram: 64,
rom: 4,
price: 12000,
},
{
CompanyName: "Tecno",
name: "Cammon17",
ram: 64,
rom: 4,
price: 12000,
},
{
CompanyName: "Vivo",
name: "Y20",
ram: 64,
rom: 4,
price: 12000,
},
]


let Name = document.getElementById('Name')
let model = document.getElementById('Model')


ar.map(function(e,i){
// console.log(e);
// console.log(i);
Name.innerHTML += ` <option value="${e.CompanyName}">${e.CompanyName}</option>`
})


function checkVal(){
// console.log(Name.value)
// model.innerHTML=''
ar.filter(function(x,i){
if (x.CompanyName == Name.value) {
    // x.indexNumber = i
    
    model.innerHTML += `<option value="${x.name}">${x.name}</option>`
    // console.log('filerItems====>',x);
}
})
}


let render = document.getElementById('render')


function renderVal(){
// console.log(name.value)
render.innerHTML=''
ar.filter(function(v,i){
    // console.log(v,i);
if (v.name == model.value) {
    v.indexNumber = i
    // console.log(i);
    
    render.innerHTML += `
    <h2> Name:${v.CompanyName }</h2>
    <h2> Model:${v.name }</h2>
    <h2> Price:${v.price }</h2>
    <h2> Ram:${v.ram}</h2>
    <h2> Rom:${v.rom}</h2>
    
    `
    console.log(v);
}
})
}