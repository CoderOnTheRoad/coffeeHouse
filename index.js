let buttons= document.getElementsByClassName("button");
let orderButton=document.getElementById("order-btn");
let cart=[];
class Coffee {
    constructor(type, price,addon) {
      this.type = type;
      this.price = price;
      this.addon=addon;
    }
  }
for(let btn of buttons){
    btn.addEventListener('click',()=>{
        let buttonId=btn.id;
        let coffeType=buttonId.split("-")[0];
        //console.log(coffeType);
        let addonSelect=document.getElementById(`addon-${coffeType}`);
        //console.log(addon.value);
        let price= addonSelect.value.split("-")[1];
        let addon=addonSelect.value.split("-")[0];
        let newOrder=new Coffee(coffeType,price,addon);
        cart.push(newOrder);
        console.log(cart);



    })

}
orderButton.addEventListener("click",()=>{
    let billDiv=document.getElementById("my-orders");
    billDiv.innerHTML="";
    let table= document.createElement("table");
    table.classList.add("table");
    let header=document.createElement("thead");
    header.innerHTML=`     <tr>
    <th scope="col">#</th>
    <th scope="col">Type</th>
    <th scope="col">Addon</th>
    <th scope="col">Price</th>
  </tr>`
  table.append(header);
  let totalPrice=0;
    for(let i=0;i<cart.length;i++){
        let row=document.createElement("tr");
        row.innerHTML=`
        <th scope="row">${i+1}</th>
        <td>${cart[i].type}</td>
        <td>${cart[i].addon}</td>
        <td>${cart[i].price}</td>`
        table.append(row);
        totalPrice+=parseInt(cart[i].price);
    }
    let header2=document.createElement("thead");
    header2.innerHTML=`     <tr>
    <th scope="col">Total</th>
    <th scope="col">-</th>
    <th scope="col">-</th>
    <th scope="col">${totalPrice}</th>`
    table.append(header2);



  
    billDiv.append(table);
    cart=[];
})