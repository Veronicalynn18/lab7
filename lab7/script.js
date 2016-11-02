
JavaScriptSaved

var total=0;
var groceryList=[

  {name: "cheerios",
  price:3.00},
  {name: "bread",
  price:2.00},
  {name: "milk",
  price:2.50},
  {name: "eggs",
  price:1.50}
];
​
for (var i=0; i<groceryList.length;i++){

  total+=groceryList[i].price;

  console.log(groceryList[i].name + "  $"+groceryList[i].price);
​
}
   console.log("Total $"+total);
​
