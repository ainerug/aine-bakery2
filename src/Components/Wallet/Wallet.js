import React, { useEffect, useState } from "react";
import axios from "axios";
import { useReactTable, createColumnHelper, getCoreRowModel } from "@tanstack/react-table";
import { flexRender } from '@tanstack/react-table';
import './Wallet.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Wallet() {
  const sellerId = localStorage.getItem("userId");
  const [wallet, setWallet] = useState({});
  const [totalEarnings, setTotalEarnings] = useState([]);
  const [expectedEarnings, setExpectedEarnings] = useState([]);
  const [totalEarningsDate, setTotalEarningsDate] = useState([]);
  const [totalEarningsAmount, setTotalEarningsAmount] = useState([]);
  const [totalExpectedEarningsDate, setTotalExpectedEarningsDate] = useState([]);
  const [totalExpectedEarningsAmount, setTotalExpectedEarningsAmount] = useState([]);

  const formatDate =(dateString)=>{
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    })
  }

  const data = {
    labels: totalEarningsDate, // X-axis labels
    datasets: [
      {
        label: 'Sales Data', // Dataset label
        data: totalEarningsAmount, // Y-axis values
        borderColor: '#E88F2A', // Line color
        backgroundColor: 'white', // Fill under line
        tension: 0.4, // Curves the line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Display the legend at the top
        labels: {
          color: 'white', // Change legend text color
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white', // X-axis label text color
        },
        grid: {
          display: false, // Hide gridlines on X-axis
        },
      },
      y: {
        ticks: {
          color: 'white', // Y-axis label text color
          callback: (value) => `€${value}`, 
        },
        grid: {
          color: 'white', // Horizontal grid lines color
        },
        beginAtZero: true, // Start Y-axis from zero
      },
    },
  };

  const dataExpected = {
    labels: totalExpectedEarningsDate, // X-axis labels
    datasets: [
      {
        label: 'Sales Data', // Dataset label
        data: totalExpectedEarningsAmount, // Y-axis values
        borderColor: '#E88F2A', // Line color
        backgroundColor: 'white', // Fill under line
        tension: 0.4, // Curves the line
      },
    ],
  };

  const optionsExpected = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Display the legend at the top
        labels: {
          color: 'white', // Change legend text color
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white', // X-axis label text color
        },
        grid: {
          display: false, // Hide gridlines on X-axis
        },
      },
      y: {
        ticks: {
          color: 'white', // Y-axis label text color
          callback: (value) => `€${value}`, 
        },
        grid: {
          color: 'white', // Horizontal grid lines color
        },
        beginAtZero: true, // Start Y-axis from zero
      },
    },
  };


  const getData = () => {
    axios
      .get("http://localhost:8080/wallet/" + sellerId)
      .then((res) => {
        console.log(res);
        setWallet(res.data);
        setTotalEarnings(res.data.totalEarnings);

         const amount = res.data.totalEarnings.map((item)=>{

          return item.amount;
          
         })
         setTotalEarningsAmount(amount);

         const date = res.data.totalEarnings.map((item)=>

          formatDate(item.date)
         )

         setTotalEarningsDate(date);

        setExpectedEarnings(res.data.expectedEarnings);


        const expectedAmount = res.data.expectedEarnings.map((item)=>{

          return item.amount
        })

        setTotalExpectedEarningsAmount(expectedAmount);

        const expectedDate = res.data.expectedEarnings.map((item)=>formatDate(item.date)

          
        )
  
        setTotalExpectedEarningsDate(expectedDate)

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
  cell: (info) => formatDate(info.getValue())
  
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
        <h2>€{wallet.totalEarningsSum}</h2>
      </div>
      <div className="analytics">
        <p>Expected Earnings: </p>
        <h2>€{wallet.totalExpectedEarningsSum}</h2>
      </div>
      <div className="analytics">
        <p>Canceled Orders: </p>
        <h2> -€{wallet.totalCanceled}</h2>
      </div>
      <div className="analytics">
        <p>Average Order Price: </p>
        <h2> €{wallet.avgOrderPrice}</h2>
      </div>
    </div>

    <div className="chart-container">
      <div className="chart-current">
      <h2>Current Earnings</h2>
    <Line data={data} options={options} />
    </div>
    <div className="chart-future">
    <h2>Expected Earnings</h2>
    <Line data={dataExpected} options={optionsExpected} />
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
