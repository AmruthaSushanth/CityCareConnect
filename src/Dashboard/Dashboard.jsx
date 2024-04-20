import React from 'react';
import "./Dashboard.css"
import CustomCard from '../shared/CustomCard';
export default function Dashboard() {
  const content={
    heading:"Total Complaints",
    num:"101"
  }
  const customStyle = {
    width:'10%',
    height:'12%',
    minWidth: 275
  }
  const cardData = [
    {
      id: 1,
      title: 'Total Complaints',
      content: 'Content for Card 1',
      num: 101,
      style: { backgroundColor: 'lightblue', width:'20%',
      height:'12%',text:'center'}
    },
    {
      id: 2,
      title: 'Inprogress',
      content: 'Content for Card 2',
      num: 10,
      style: { backgroundColor: 'lightgreen', width:'20%',
      height:'12%',text:'center' }
    },
    {
      id: 3,
      title: 'Pending',
      content: 'Content for Card 3',
      num: 90,
      style: { backgroundColor: 'lightyellow',width:'20%',
      height:'12%',text:'center' }
    },
    {
      id: 4,
      title: 'Completed',
      content: 'Content for Card 4',
      num: 1,
      style: { backgroundColor: 'lightcoral' ,width:'20%',
      height:'12%',text:'center'}
    }
  ];
  return (
    <div className='dashboardMain'>
      {/* <CustomCard content={content} styles={customStyle}/> */}
      <div className='cardContainer'>
      {cardData.map((item)=>(
        <CustomCard content={item} />
      ))}
      </div>
     
    </div>
  )
}
