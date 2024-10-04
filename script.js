fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(res => {
    for (var i = 0; i < res.products.length; i++) {
        var data = res.products[i];
        var getData = document.getElementById('getData');

        getData.innerHTML += `
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="card h-100" style="cursor: pointer;" onclick="card2(${data.id})">
                    <img src="${data.thumbnail}" class="card-img-top" alt="Product image">
                    <div class="card-body">
                        <h5 class="card-title">${data.price}$</h5>
                        <p class="card-text">${data.description}</p>
                    </div>
                </div>
            </div>
        `;
    }
});

function card2(id) {
    window.location.href = './product.html?productdetails=' + id;
}
