import React from 'react'
import AttendanceChart from './AttendanceChart'
import Image from 'next/image'
import prisma from '@/lib/prisma'

const AttendanceChartContainer = async () => {


    const today = new Date()
    const dayOfWeek = today.getDay()
    const daySinceMonday = dayOfWeek === 0 ? 6 : dayOfWeek -1;

    const lastMonday = new Date(today)

    lastMonday.setDate(today.getDate() - daySinceMonday)

    const resData  = await prisma.attendance.findMany({
        where:{
            date:{
                gte: lastMonday
            }
        },
        select:{
            date:true,
            present:true
        }
    })

    // console.log(data)

    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri"]

    const attendnceMap:{[key: string]: {present: number, absent: number}} = {
        Mon: {present: 0,  absent: 0},
        Tue: {present: 0,  absent: 0},
        Wed: {present: 0,  absent: 0},
        Thu: {present: 0,  absent: 0},
        Fri: {present: 0,  absent: 0},
    };

    resData.forEach(item=>{
        const itemDate = new Date(item.date)
        
        if (dayOfWeek >= 1 && dayOfWeek <= 5) {
            const dayName = daysOfWeek[dayOfWeek - 1];
            
            if (item.present) {
                attendnceMap[dayName].present  += 1;
            }else{
                attendnceMap[dayName].absent += 1;
            }
        }
    });
    
    const data = daysOfWeek.map((day)=> ({
        name:day,
        present: attendnceMap[day].present,
        absent: attendnceMap[day].absent
    }));

  return (
    <div className='bg-white rounded-lg p-4 h-full'>
        <div className="flex justify-between items-center">
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <Image src="/moreDark.png" alt='' height={20} width={20}/>
        </div>
        <AttendanceChart data={data}/>
        </div>
  )
}

export default AttendanceChartContainer
