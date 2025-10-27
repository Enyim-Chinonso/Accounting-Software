// "use client";

// import React, { useState } from "react";
// import { Modal } from "bootstrap";

// export default function CustomersPage() {
//   const [customers, setCustomers] = useState([
//     {
//       id: 1,
//       name: "John Doe",
//       email: "john@example.com",
//       phone: "+234 800 123 4567",
//       balance: "$1,200.00",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       email: "jane@example.com",
//       phone: "+234 809 555 9999",
//       balance: "$750.00",
//     },
//   ]);

//   const [newCustomer, setNewCustomer] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     balance: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewCustomer({ ...newCustomer, [name]: value });
//   };

//   const handleAddCustomer = () => {
//     if (!newCustomer.name || !newCustomer.email) {
//       alert("Please fill all required fields");
//       return;
//     }

//     setCustomers([
//       ...customers,
//       { id: customers.length + 1, ...newCustomer },
//     ]);

//     setNewCustomer({ name: "", email: "", phone: "", balance: "" });

//     // Close modal after saving
//     const modalEl = document.getElementById("addCustomerModal");
//     const modal = Modal.getInstance(modalEl);
//     modal.hide();
//   };

//   const openAddCustomerModal = () => {
//     const modal = new Modal(document.getElementById("addCustomerModal"));
//     modal.show();
//   };

//   return (
//     <div className="container py-4">
//       {/* Header */}
//       <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
//         <h3 className="fw-bold m-0">Customers</h3>
//         <button className="btn btn-primary" onClick={openAddCustomerModal}>
//           + Add New Customer
//         </button>
//       </div>

//       {/* Desktop View */}
//       <div className="d-none d-md-block">
//         <div className="table-responsive shadow-sm rounded">
//           <table className="table table-hover align-middle mb-0">
//             <thead className="table-primary">
//               <tr>
//                 <th>#</th>
//                 <th>Customer Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Balance</th>
//               </tr>
//             </thead>
//             <tbody>
//               {customers.map((customer) => (
//                 <tr key={customer.id}>
//                   <td>{customer.id}</td>
//                   <td>{customer.name}</td>
//                   <td>{customer.email}</td>
//                   <td>{customer.phone}</td>
//                   <td>{customer.balance}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Mobile View - Card Layout */}
//       <div className="d-md-none">
//         {customers.map((customer) => (
//           <div
//             key={customer.id}
//             className="card mb-3 shadow-sm border-0"
//             style={{ borderRadius: "10px" }}
//           >
//             <div className="card-body">
//               <h6 className="card-title fw-bold text-primary mb-1">
//                 {customer.name}
//               </h6>
//               <p className="mb-1">
//                 <strong>Email:</strong> {customer.email}
//               </p>
//               <p className="mb-1">
//                 <strong>Phone:</strong> {customer.phone}
//               </p>
//               <p className="mb-1">
//                 <strong>Balance:</strong> {customer.balance}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Add Customer Modal */}
//       <div
//         className="modal fade"
//         id="addCustomerModal"
//         tabIndex="-1"
//         aria-labelledby="addCustomerModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header bg-primary text-white">
//               <h5 className="modal-title" id="addCustomerModalLabel">
//                 Add New Customer
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close btn-close-white"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>

//             <div className="modal-body">
//               <form>
//                 <div className="mb-3">
//                   <label className="form-label">Customer Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     className="form-control"
//                     value={newCustomer.name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     className="form-control"
//                     value={newCustomer.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label">Phone</label>
//                   <input
//                     type="text"
//                     name="phone"
//                     className="form-control"
//                     value={newCustomer.phone}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label">Balance</label>
//                   <input
//                     type="text"
//                     name="balance"
//                     className="form-control"
//                     value={newCustomer.balance}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </form>
//             </div>

//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-primary"
//                 onClick={handleAddCustomer}
//               >
//                 Save Customer
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import React, { useState, useEffect } from "react";
import AddCustomerModal from "@/components/AddCustomerModal";
import { gsap } from "gsap";

export default function CustomersPage() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+234 800 123 4567",
      balance: "$1,200.00",
      joinDate: "2025-09-15",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+234 809 555 9999",
      balance: "$750.00",
      joinDate: "2025-08-10",
      status: "Inactive",
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    gsap.from(".customer-row", {
      y: 18,
      opacity: 0,
      stagger: 0.08,
      duration: 0.45,
      ease: "power2.out",
    });
  }, [customers]);

  const handleAddCustomer = (data) => {
    const normalized = {
      id: customers.length + 1,
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      balance: data.balance || "$0.00",
      joinDate: data.joinDate || new Date().toISOString().slice(0, 10),
      status: data.status || "Active",
    };
    setCustomers((prev) => [...prev, normalized]);
    setShowModal(false);
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h3 className="fw-bold m-0">Customers</h3>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          + Add New Customer
        </button>
      </div>

      {/* Desktop Table */}
      <div className="d-none d-md-block">
        <div className="table-responsive shadow-sm rounded">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Balance</th>
                <th>Joined</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.id} className="customer-row">
                  <td>{c.id}</td>
                  <td className="fw-semibold">{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.phone}</td>
                  <td>{c.balance}</td>
                  <td>{c.joinDate}</td>
                  <td>
                    <span className={`badge ${c.status === "Active" ? "bg-success" : "bg-secondary"}`}>
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card Layout */}
      <div className="d-md-none mt-3">
        {customers.map((c) => (
          <div key={c.id} className="card mb-3 shadow-sm border-0">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <h6 className="mb-1 fw-bold text-primary">{c.name}</h6>
                  <div className="small text-muted">{c.email}</div>
                </div>
                <div className="text-end">
                  <div className="fw-semibold">{c.balance}</div>
                  <div className="small text-secondary">{c.joinDate}</div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <div className="small text-muted">Phone: {c.phone || "-"}</div>
                <div>
                  <span className={`badge ${c.status === "Active" ? "bg-success" : "bg-secondary"}`}>
                    {c.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* React modal (no bootstrap JS) */}
      {showModal && <AddCustomerModal onClose={() => setShowModal(false)} onAdd={handleAddCustomer} />}
    </div>
  );
}
