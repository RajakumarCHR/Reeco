import React from "react";

const OrderHeader = ({ orderData }) => {
  const { supplierName, shippingdate, status, total, department, category } =
    orderData;
  console.log(orderData);
  return (
    <div className="mx-auto  max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between m-5 bg-white h-40 border rounded">
      <div>
        <p className="text-gray-500 font-medium ">Supplier</p>
        <p className="my-3 font-bold">{supplierName}</p>
      </div>
      <div className="border-l pl-8">
        <p className="text-gray-500 font-medium">Shipping Date</p>
        <p className="my-3 font-bold">{shippingdate}</p>
      </div>
      <div className="border-l pl-8">
        <p className=" text-gray-500 font-medium">Total</p>
        <p className="my-3 font-bold">{total}</p>
      </div>
      <div className="border-l pl-8">
        <p className=" text-gray-500 font-medium">Category</p>
        <p className="my-3 font-bold">{category}</p>
      </div>
      <div className="border-l pl-8">
        <p className=" text-gray-500 font-medium">Department</p>
        <p className="my-3 font-bold">{department}</p>
      </div>
      <div className="border-l pl-8">
        <p className=" text-gray-500 font-medium">Status</p>
        <p className="my-3 font-bold">{status}</p>
      </div>
    </div>
  );
};

export default OrderHeader;
