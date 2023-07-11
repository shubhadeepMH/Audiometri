import { useState } from 'react'

// import './App.css'
import Graphs from '../components/Graphs'
import Navbar from '../components/Navbar'

export const rightOptions = {
  responsive: true,
  plugins: {
      legend: {
          position: 'bottom',
      },
      title: {
          display: true,
          text: 'Right ear',
      },
  },
};
export const leftOptions = {
  responsive: true,
  plugins: {
      legend: {
          position: 'bottom',
      },
      title: {
          display: true,
          text: 'Left ear',
      },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export let data = {
  labels,
  datasets: [
      {
          label: 'Dataset 1',
          data: [34, 23, 87, 45],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
          label: 'Dataset 2',
          data: [43, 12, 34, 98, 548],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
  ],
};

function App() {
  const columnLabels = ['250', '500', '750', '1000', '1500', '2000', '3000', '4000', '6000', '8000'];
  const rowLabels = ['AC masked if requied', 'AC masked if requied NR', 'AC shadow', 'BC not masked', 'BC not masked NR', 'Masked BC', 'Masked BC NR', 'ULL'];

  const [rightRows, setRightRows] = useState([
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
  ]);
  const [leftRows, setLeftRows] = useState([
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
  ]);
  const colors = [
      'rgba(255, 56, 132, 0.5)',
      'rgba(53, 16, 235, 0.5)',
      'rgba(75, 192, 192, 0.5)',
      'rgba(255, 205, 86, 0.5)',
      'rgba(54, 162, 23, 0.5)',
      'rgba(76, 75, 78, 0.5)',
      'rgba(164, 14, 33, 0.7)',
  ];
  const [showGraph, setShowGraph] = useState(false)

  const handleRightInputChange = (rowIndex, columnIndex, value) => {
      const updatedRows = [...rightRows];
      updatedRows[rowIndex][columnIndex] = value;
      setRightRows(updatedRows);
  };

  const handleLeftInputChange = (rowIndex, columnIndex, value) => {
      const updatedRows = [...leftRows];
      updatedRows[rowIndex][columnIndex] = value;
      setLeftRows(updatedRows);
  };
  //Fetching row data individually

  const getRowData = (rows) => {
      // console.log(rows);
      const rowValues = rows.map(row =>
          row.map(item => (item !== '' ? parseInt(item) : 0))
      );
      return rowValues;
  };

  // Assigning row data to the data object
  const rightRowData = getRowData(rightRows);
  const leftRowData = getRowData(leftRows);
  const labels = columnLabels.map((item, index) => `${item}`);
  const rightDatasets = rightRowData.map((row, index) => ({
      label: rowLabels[index],
      data: row,
      borderColor: colors[index % colors.length],
      backgroundColor: colors[index % colors.length],
  }));
  const leftDatasets = leftRowData.map((row, index) => ({
      label: rowLabels[index],
      data: row,
      borderColor: colors[index % colors.length],
      backgroundColor: colors[index % colors.length],
  }));

  const rightGraphData = {
      labels,
      datasets: rightDatasets,
  };
  const leftGraphData = {
      labels,
      datasets: leftDatasets,
  };

  //Generating graph
  const generateGraph = () => {
      // console.log(data);
      setShowGraph(!showGraph)

  }

  return (
    <>
      <Navbar/>
      <div className='flex justify-center space-y-10 flex-grow flex-shrink'>
                <div className=" ">
                    <div className='left-ear my-5'>
                        <h1 className='text-center font-bold italic font-sans text-blue-600'>RIGHT EAR</h1>
                        <div className="overflow-x-auto">
                            <table className="table-auto">
                                <thead className='mb-3'>
                                    <tr >
                                        <th ><button className="py-1 text-xs md:text-base rounded-sm shadow-md text-white bg-blue-500  shad">Frequency</button></th>
                                        {columnLabels.map((label, columnIndex) => (
                                            <th key={columnIndex} className="w-[2rem] text-[9px] md:text-[11px] rounded-sm text-center font-bold  text-black">
                                                {label}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {rightRows.map((row, rowIndex) => (
                                        <tr className='' key={rowIndex}>
                                            <th className="w-[6rem]  rounded-sm mx-1 text-[7px] md:text-[12px] font-serif text-center font-bold text-black">{rowLabels[rowIndex]}</th>
                                            {row.map((value, columnIndex) => (
                                                <td key={columnIndex}>
                                                    <input
                                                        className="border rounded w-[2rem]  lg:w-[5rem]  mx-[.10rem] md:mx-1 my-1 text-center bg-gray-100 focus:bg-white focus:outline-none"
                                                        type="number"
                                                        value={value}
                                                        onChange={(event) =>
                                                            handleRightInputChange(rowIndex, columnIndex, event.target.value)
                                                        }
                                                    />
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div className='left-ear my-5'>
                        <h1 className='text-center font-bold text-blue-600 font-sans italic'>LEFT EAR</h1>
                        <div className="overflow-x-auto">
                            <table className="table-auto">
                                <thead>
                                    <tr>
                                        <th ><button className="py-1 text-xs md:text-base rounded-sm shadow-md text-white bg-blue-500  shad">Frequency</button></th>
                                        {columnLabels.map((label, columnIndex) => (
                                            <th key={columnIndex} className="w-[4rem] text-[9px] md:text-[11px] text-center font-bold  text-black">
                                                {label}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {leftRows.map((row, rowIndex) => (
                                        <tr key={rowIndex}>
                                            <th className="w-[6rem] rounded-sm mx-1 text-[7px] md:text-[12px]  font-serif text-center font-bold text-black">{rowLabels[rowIndex]}</th>
                                            {row.map((value, columnIndex) => (
                                                <td key={columnIndex}>
                                                    <input
                                                        className="border rounded w-[2rem]  lg:w-[5rem]  mx-[.10rem] md:mx-1 my-1 text-center bg-gray-100 focus:bg-white focus:outline-none"
                                                        type="number"
                                                        value={value}
                                                        onChange={(event) =>
                                                            handleLeftInputChange(rowIndex, columnIndex, event.target.value)
                                                        }
                                                    />
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div>
            <div className='m-3 text-center'>
                <button onClick={generateGraph} className='bg-slate-400 shadow-xl rounded-md text-white font-bold hover:bg-white hover:border-black border-2 active:bg-blue-400 hover:text-black p-2'>Generate</button>
            </div>
     {showGraph && <Graphs leftOpt={leftOptions} rightOpt={rightOptions} leftData={leftGraphData} rightData={rightGraphData} />}
    
    </>
  )
}

export default App
