import React, { useEffect, useState } from "react";
import axios from "axios";
import { useReactTable, createColumnHelper, getCoreRowModel } from "@tanstack/react-table";
import { flexRender } from '@tanstack/react-table';
import './Wallet.css';

export default function Wallet() {
  const sellerId = localStorage.getItem("userId");
  const [wallet, setWallet] = useState({});
  const [totalEarnings, setTotalEarnings] = useState([]);
  const [expectedEarnings, setExpectedEarnings] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:8080/wallet/" + sellerId)
      .then((res) => {
        console.log(res);
        setWallet(res.data);
        setTotalEarnings(res.data.totalEarnings);
        setExpectedEarnings(res.data.expectedEarnings);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);


  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("date", {
      header: "Date",
  cell: (info) => {
    const date = new Date(info.getValue());
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    }); 
    return formattedDate;
  },
    }),
    columnHelper.accessor("amount", {
      header: "Amount",
      cell: (info) => `$${info.getValue()}`,
    }),
    columnHelper.accessor("cakeName", {
      header: "Cake Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("sellerId", {
      header: "Seller ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("customerId", {
      header: "Customer ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("orderId", {
      header: "Order ID",
      cell: (info) => info.getValue(),
    }),
  ];
  const totalEarningsTable = useReactTable({
    data: totalEarnings,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const expectedEarningsTable = useReactTable({
    data: expectedEarnings,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
    <div className="analytics-container">
      <div className="analytics">
        <p>Current Balance: </p>
        <h2>${wallet.totalEarningsSum}</h2>
      </div>
      <div className="analytics">
        <p>Expected Earnings: </p>
        <h2>${wallet.totalExpectedEarningsSum}</h2>
      </div>
      <div className="analytics">
        <p>Canceled Orders: </p>
        <h2> -${wallet.totalCanceled}</h2>
      </div>
      <div className="analytics">
        <p>Average Order Price: </p>
        <h2> ${wallet.avgOrderPrice}</h2>
      </div>
    </div>

    <div className="table-container">
    <h2>Total Earnings: </h2>

   <table className="earnings-table">
        <thead>
          {totalEarningsTable.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : header.renderHeader
                    ? header.renderHeader()
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {totalEarningsTable.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

<h2>Expected Earnings: </h2>
<table className="earnings-table">
        <thead>
          {expectedEarningsTable.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {expectedEarningsTable.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}
