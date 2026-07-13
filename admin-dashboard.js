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
