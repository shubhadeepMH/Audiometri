import React, { useRef } from 'react'
import Graphs from '../components/Graphs'
import { useLocation } from 'react-router-dom';
import { BsCircle } from 'react-icons/bs';
import { FiTriangle } from 'react-icons/fi';
import { AiOutlineLeft } from 'react-icons/ai';
import { BsArrowDownLeft } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineRight } from 'react-icons/ai';
import { BsArrowDownRight } from 'react-icons/bs';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function Pdf() {
    let location = useLocation()
    const reportTemplateRef = useRef();

    const { rightOpts, leftOpts, rightData, leftData } = location.state

    const handleDownload =() => {

        const input = reportTemplateRef.current

        html2canvas(input)
          .then((canvas) => {
          const imgData=canvas.toDataURL('img/png');
          const pdf=new jsPDF('p','mm','a4',true);
          const pdfWidth=pdf.internal.pageSize.getWidth();
          const pdfHeight=pdf.internal.pageSize.getHeight();
          const imgWidth=canvas.width;
          const imgHeight=canvas.height;
          const ratio=Math.min(pdfWidth/imgWidth,pdfHeight/imgHeight);
          const imgX=(pdfWidth-imgWidth*ratio)/2;
          const imgY=20;
          pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth*ratio,imgHeight*ratio);
          pdf.save("Report.pdf")
          })
          .catch((error) => {
            console.error('Error generating PDF:', error);
          });
    }

    return (
        <>
         <div onClick={handleDownload} className='border-2 fixed shadow-black hover:text-black cursor-pointer hover:bg-white hover:border-gray-500 hover:shadow-md  right-4 bottom-3 border-green-500 bg-orange-500 text-white font-bold p-4 w-[6rem] h-[6rem] flex justify-center items-center rounded-full bg'><h2 className=''>Download</h2></div>
            <div ref={reportTemplateRef}  >
                <h1  className='bg-orange-600 font-bold text-lg mt-5 h-[2rem] text-white text-center'>Audio Gram</h1>
                <div>
                    <Graphs rightOpt={rightOpts} leftOpt={leftOpts} rightData={rightData} leftData={leftData} />
                </div>
               

                <div className='flex '>

                    <div class=" w-[50%] mx-4 p-4 h-[12rem] ">
                        <h2 className='font-bold'><span className='text-orange-500 border-2 border-orange-500 rounded-full px-1 '>R</span> Ear PTA (0.5,1 & 2kHz)= <span className='ml-64'>dBHL</span></h2>
                        <table class=" w-full table-auto h-[12rem]">
                            <thead className=''>
                                <tr>
                                    <th class="px-4 w-[80%] py-2 border"></th>
                                    <th class="px-4 w-[10%] py-2 border  text-center"><span className='text-orange-500 border-2 border-orange-500 rounded-full px-1 '>R</span></th>
                                    <th class="px-4 w-[10%] py-2 border "><span className=' border-2 border-black rounded-full px-1 '>L</span></th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr>
                                    <td class="px-4 py-2 border">AIR (Unmasked)</td>
                                    <td class="px-4 py-2 border"><BsCircle className='text-orange-500 ml-2' /></td>
                                    <td class="px-4 py-2 border w-10"><RxCross2 className='ml-2' /></td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 border">AIR (Masked)</td>
                                    <td class="px-4 py-2 border "><FiTriangle className='text-orange-500 ml-2' /></td>
                                    <td class="px-4 py-2 border  w-10"><div className='border-2 m-auto text-center border-black w-5 h-2'></div></td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 border">Bone(Unmasked)</td>
                                    <td class="px-4 py-2 border"><AiOutlineLeft className='text-orange-500 ml-2' /></td>
                                    <td class="px-4 py-2 border w-10"><AiOutlineRight className='ml-2' /></td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 border">Bone Masked</td>
                                    <td class="px-4 py-2  border"><span className='text-orange-500  ml-3 '>{`[`}</span></td>
                                    <td class="px-4 py-2 border w-10"><span className='  ml-4  '>{`]`}</span></td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 border">No Response</td>
                                    <td class="px-4 py-2 border"><BsArrowDownLeft className='text-orange-500 ml-3' /></td>
                                    <td class="px-4 py-2 border w-10"><BsArrowDownRight className='ml-3' /></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className='w-[50%] mx-4 p-4'>
                        <p className='font-bold '>Ear PTA (0.5,1 & 2kHz)= <span className='ml-64'>dBHL</span></p>
                        <div className='flex'>
                            <div className='border-2 text-center pt-2 w-[20%] border-black'>
                                <span className='text-orange-500 mt-44 border-2 border-orange-500 rounded-full px-1 '>R</span>
                            </div>
                            <div className='border-2 text-center w-[60%] border-black'>
                                <p>Rinne Test</p>
                                <p>(512HZ)</p>
                            </div>
                            <div className='border-2 text-center pt-2 w-[20%] border-black'>
                                <span className=' border-2  border-black rounded-full px-1 '>L</span>
                            </div>
                        </div>

                        <div className='mt-1'>
                            <div className='flex'>
                                <div className='border-2 text-center pt-2 w-[20%] border-black'>
                                    <span className='text-orange-500 mt-44 border-2 border-orange-500 rounded-full px-1 '>R</span>
                                </div>
                                <div className='border-2 text-center w-[60%] border-black'>
                                    <p>Audiometric Weber Test</p>
                                </div>
                                <div className='border-2 text-center pt-2 w-[20%] border-black'>
                                    <span className=' border-2  border-black rounded-full px-1 '>L</span>
                                </div>
                            </div>
                            <div className='border-2 text-center pt-2 h-[100%] border-black'>
                                <p>250HZ</p>
                                <p>500HZ</p>
                                <p>1000HZ</p>
                                <p>2000HZ</p>
                                <p>4000HZ</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='m-10 space-y-12 font-bold'>
                    <p >Provisional Diagnosis :</p>
                    <p>Recommendations(s) :</p>
                </div>
            </div>
        </>
    )
}
