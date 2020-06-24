// let sandals = [
//     {
//         name: "sandal 1",
//         price: 30000,
//         size: 37,
//         publisher: "Thang cute",
//     },
//     {
//         name: "sandal 2",
//         price: 50000,
//         size: 40,
//         publisher: "Ha cute",
//     }
// ]

// // JSON.stringify(mảng/object): Chuyển mảng/Object ---> string
// let jsonData = JSON.stringify(sandals);
// console.log(jsonData)
// localStorage.setItem("sandals",jsonData);

// // JSON.parse(Chuỗi JSON): Chuyển String ---> mảng/Object;
// let string = localStorage.getItem("sandals")
// let arr = JSON.parse(string);
// console.log(arr);

// let sandals = [
//     {
//         name: "sandals 1",
//         price: 30,
//         size: 40,
//         publisher: "P1",
//     },
//     {
//         name: "sandals 2",
//         price: 50,
//         size: 43,
//         publisher: "P2",
//     }
// ];
// localStorage.setItem("sandals", JSON.stringify(sandals));

// Read
function showsandals(){ 
    // Lấy từ localstorage : string
    let jsonData = localStorage.getItem("sandals");
    // convert string ---> mảng
    let sandals = JSON.parse(jsonData);

    // Hiển thị ra màn hình
    let html = `<ul>`;
    for(let sandal of sandals){
        html += `
            <li>
                name: <b>${sandal.name}</b><br>
                price: <i>${sandal.price}</i><br>
                size: <mark>${sandal.size}</mark>
                publisher: <small>${sandal.publisher}</small>
            </li>
        `;
    }
    html += `<ul>`;
    console.log(html);
    document.getElementById("app").innerHTML = html;
}

function addSandal(sandal){
    // Lấy dữ liệu từ localstorage 
    let sandals = JSON.parse(localStorage.getItem("sandals"));
    // Thêm dữ liệu vào mảng
    sandals.push(sandal);
    // Lưu vào trong localstorage
    localStorage.setItem("sandals",JSON.stringify(sandals));
}

function updateSandal(name, data){
    // Lấy dữ liệu từ localstorage ra
    let sandals =JSON.parse(localStorage.getItem("sandals"));
    // Dựa vào name lấy ra dép cần sửa
    let foundSandal = sandals.findIndex(function(item){
        return item.name == name;
    });
    if(foundSandal >=0 ){
        // Nếu tìm thấy ---> sửa
        sandals[foundSandal] = data;
    } else {
        console.log("Not Found!");
    }

    // Lưu lại
    localStorage.setItem("sandals",JSON.stringify(sandals));
}
function deleteSandal(name){
    // Lấy dữ liệu từ localstorage ra
    let sandals =JSON.parse(localStorage.getItem("sandals"));
    // Dựa vào name lấy ra dép cần sửa
    let foundSandal = sandals.findIndex(function(item){
        return item.name == name;
    });
    if(foundSandal >=0 ){
        // Nếu tìm thấy ---> sửa
        sandals.splice(foundSandal,1);
    } else {
        console.log("Not Found!");
    }

    // Lưu lại
    localStorage.setItem("sandals",JSON.stringify(sandals));
}