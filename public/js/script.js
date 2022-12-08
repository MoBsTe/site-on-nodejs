

axios.get('/url')
    .then((response) => {

        let products = response.data;

        let main_items = document.querySelector("div.main_items")
        for (let i = 0; i < products.length; i++) {
            // создаем элимент div
            let div = document.createElement("div");
            // вставляемего внуьрб мейна 
            div.classList.add("main_item");
            div.innerHTML = products[i].product + products[i].price;
            main_items.appendChild(div);
        }
    });


