const productDatabase = [
    { id: 1,  name: "Ninja e-1",        price: 180000000,  img: "../assets/image/as.png",        desc: "Là dòng xe điện đầu tiên của dòng kawasaki với thiết kế dòng ninja  " },
    { id: 2,  name: "Ninja H2R",        price: 1400000000,  img: "../assets/image/sd.jpg",        desc: "Đây là một trong những mẫu sportbike mạnh nhất thế giới của Kawasaki." },
    { id: 3,  name: "Ninja Zx-4r",        price: 300000000,  img: "../assets/image/sf.jpg",        desc: "Đây là mẫu sportbike 400cc nổi tiếng vì dùng động cơ 4 xy-lanh, khác hẳn đa số xe 400cc hiện nay." },
    { id: 4,  name: "Ninja 500",        price: 700000000,  img: "../assets/image/sz.jpg",        desc: "Là dòng sportbike dễ lái dễ điều khiển phù hợp cho người mới ." },
    { id: 5,  name: "Ninja Zx-10r",        price: 151000000, img: "../assets/image/sv.jpg",        desc: "ZX-10R là superbike cao cấp thiên về đường đua, nổi tiếng trong giải WSBK." },
];

function addProduct(imgSrc, name, price, productId) {
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class", "product-item col-sm-3");

    const myDiv1 = document.createElement("div");
    myDiv1.setAttribute("class", "product-image");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", imgSrc);
    productImg.setAttribute("alt", name);
    productImg.style.width = "100%";

    myDiv1.appendChild(productImg);

    const myDiv2 = document.createElement("div");
    myDiv2.setAttribute("class", "product-info");

    const productName = document.createElement("p");
    productName.setAttribute("class", "product-name");
    productName.innerText = name;

    const productPrice = document.createElement("p");
    productPrice.setAttribute("class", "product-price");
    productPrice.innerText = price.toLocaleString("vi-VN");

    const productBtn = document.createElement("a");
    productBtn.setAttribute("class", "btn-detail");
    productBtn.setAttribute("href", "../html/detail.html?id=" + productId);
    productBtn.innerText = "Xem chi tiết";

    myDiv2.appendChild(productName);
    myDiv2.appendChild(productPrice);
    myDiv2.appendChild(productBtn);

    myDiv.appendChild(myDiv1);
    myDiv.appendChild(myDiv2);

    document.getElementById("product-list").appendChild(myDiv);
}

function addProduct_v2(products) {
    products.forEach(function(product) {
        addProduct(product.img, product.name, product.price, product.id);
    });
}