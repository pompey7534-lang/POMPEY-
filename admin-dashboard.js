let todayOrders = 0;

const today = new Date().toDateString();

let allOrders = [];
import {
collection,
getDocs,
doc,
updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const table=document.getElementById("ordersTable");

const snapshot=await getDocs(collection(db,"orders"));

let totalOrders=0;
let totalSales=0;
snapshot.forEach((doc) => {

    const order = doc.data();

    allOrders.push({
id: doc.id,
...order
});

if(order.createdAt?.toDate){

const orderDate =
order.createdAt.toDate().toDateString();

if(orderDate===today){

todayOrders++;

}

}
    
    totalOrders++;

    totalSales += Number(order.total || 0);

    table.innerHTML += `
    <tr>

        <td>${order.customerName}</td>

        <td>${order.mobile}</td>

        <td>₹${Number(order.total).toFixed(2)}</td>

        <td>

            <select onchange="updateStatus('${doc.id}',this.value)">

                <option value="Confirmed" ${order.status=="Confirmed"?"selected":""}>Confirmed</option>

                <option value="Packed" ${order.status=="Packed"?"selected":""}>Packed</option>

                <option value="Shipped" ${order.status=="Shipped"?"selected":""}>Shipped</option>

                <option value="Out for Delivery" ${order.status=="Out for Delivery"?"selected":""}>Out for Delivery</option>

                <option value="Delivered" ${order.status=="Delivered"?"selected":""}>Delivered</option>

            </select>

        </td>

        <td>
        ${order.createdAt?.toDate ?
        order.createdAt.toDate().toLocaleString() :
        "-"}
        </td>

    </tr>
    `;

});

document.getElementById("totalOrders").textContent = totalOrders;

document.getElementById("todayOrders").textContent=todayOrders;

document.getElementById("totalSales").textContent =
"₹" + totalSales.toFixed(2);
window.updateStatus = async function(orderId, status){

    try{

        await updateDoc(
            doc(db,"orders",orderId),
            {
                status:status
            }
        );

        alert("Order status updated successfully.");

    }catch(error){

        console.error(error);

        alert("Failed to update order status.");

    }

}
document.getElementById("search")
.addEventListener("input",function(){

const value=this.value.toLowerCase();

const rows=
document.querySelectorAll("#ordersTable tr");

rows.forEach(row=>{

if(row.innerText.toLowerCase().includes(value)){

row.style.display="";

}else{

row.style.display="none";

}

});

});
window.printOrders=function(){

window.print();

                                         }

window.exportCSV=function(){

let csv="Customer,Mobile,Total,Status\n";

allOrders.forEach(order=>{

csv+=`${order.customerName},${order.mobile},${order.total},${order.status}\n`;

});

const blob=new Blob([csv],{type:"text/csv"});

const link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download="POMPEY_Orders.csv";

link.click();

                                          }

setInterval(()=>{

location.reload();

},30000);
