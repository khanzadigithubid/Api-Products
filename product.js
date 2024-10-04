
function getDetails(){
    var productId=window.location.search.split('=')[1]
    console.log(productId)
    fetch(`https://dummyjson.com/products/${productId}`)
.then(res=>res.json())
.then(res=> {
        var data=res
        var getData = document.getElementById('productDetail')

        getData.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="${data.thumbnail}" class="card-img-top" alt="Product image">
          <div class="card-body">
            <h5 class="card-title">${data.price}$</h5>
            <p class="card-text">${data.description}</p>
          </div>
        </div>
        `
    })
}
getDetails()