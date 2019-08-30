var inStock = ['apples', 'eggs', 'milk', 'cheese', 'bread'];
var search;
function print(message){
    var storeDiv = document.getElementById('store');
    storeDiv.innerHTML = message;
}
while (true) {
    search = prompt("Search for a product in our store. Type 'list' to show all of the produce and 'quit' to exit");
    search = search.toLowerCase();
    if(search ==='quit') {
        break;
    }else if (search === "list") {
        print(inStock.join)(', ');
    }else {
        print(search + ' is not in stock.');
    }
}
