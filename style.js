
fetch('http://localhost:5000/products/fruits')

.then(function(response){
    return response.json();
})
.then(function(information){
    console.log(information);

    let fruitsItems=document.getElementById('fruList');
    information.forEach(f=>{
        let fruitlist=document.createElement('li');
        fruitlist.innerText=`${f.name}`
        fruitsItems.appendChild(fruitlist)
    })
})
.catch(function(error){
    console.log('error',error);
});

fetch('http://localhost:5000/products/vegetables')

.then(function(response){
    return response.json();
})
.then(function(info){
    console.log(info);

    let vegetableItems=document.getElementById('vegList');
    info.forEach(f=>{
        let vegetablelist=document.createElement('li');
        vegetablelist.innerText=`${f.name}`
        vegetableItems.appendChild(vegetablelist)
    })
})
.catch(function(error){
    console.log('error',error);
});

fetch('http://localhost:5000/products')

.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);

    let productItems=document.getElementById('products');
    data.forEach(f=>{
        let productlist=document.createElement('li');
        productlist.innerText=`${f.name}`
        productItems.appendChild(productlist)
    })
})
.catch(function(error){
    console.log('error',error);
});