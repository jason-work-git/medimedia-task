"use client"
import React, {useState} from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import AudiogramChart from "@/components/charts/AudiogramChart";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker, { DateObject, DatePickerRef } from "react-multi-date-picker";
import {CalendarIcon} from "lucide-react";
import {Textarea} from "@/components/ui/textarea";

const frequencyRange = [125, 250, 500, 1000, 2000, 3000, 4000, 6000, 8000].reverse();
const HomePage = () => {
    const [active, setActive] = useState(0);
    return (
        <div className='overflow-hidden p-9 flex items-center justify-center text-[14px]'>
            <div className='bg-[#FCFDFF] border rounded-[8px] px-2.5 py-4 w-full h-full flex flex-col max-w-[1280px]'>
                <div className='flex items-center gap-x-3'>
                    {[{name: "تست های AC", value: "first"}, {name: "تست های BC", value: "second"}].map((item, i) => (
                        <button key={i}
                                className={`text-[#53585E] cursor-pointer border-b-2 h-9 transition-all ${active === i ? "border-b-2 font-bold border-primary" : "font-semibold opacity-70"}`}
                                onClick={() => setActive(i)}>
                            {item.name}
                        </button>
                    ))}
                </div>
                <div>
                    <div className='flex border-r-2 pr-1 text-primary border-primary font-bold mt-6'>
                        <p>فرکانس AC</p>
                        <span>(Msk)</span>
                    </div>
                    <div className='mt-1'>
                        <div className='flex items-end gap-x-3'>
                            <Button className='w-[110px]  text-[14px]'>
                                گوش راست
                            </Button>
                            {frequencyRange.map((item, i) => (
                                <div key={i} className='flex flex-col items-center text-primary'>
                                    <span className='font-semibold'>{item}Hz</span>
                                    <Input className='w-[110px]'/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div className='flex items-end gap-x-3'>
                            <Button className='w-[110px]  text-[14px]'>
                                گوش چپ
                            </Button>
                            {frequencyRange.map((item, i) => (
                                <div key={i} className='flex flex-col items-center text-primary'>
                                    <Input className='w-[110px]'/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex border-r-2 pr-1 text-primary border-primary font-bold mt-6'>
                        <p>فرکانس AC</p>
                        <span>(U‌/‌Msk)</span>
                    </div>
                    <div className='mt-1'>
                        <div className='flex items-end gap-x-3'>
                            <Button className='w-[110px]  text-[14px]'>
                                گوش راست
                            </Button>
                            {frequencyRange.map((item, i) => (
                                <div key={i} className='flex flex-col items-center text-primary'>
                                    <span className='font-semibold'>{item}Hz</span>
                                    <Input className='w-[110px]'/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div className='flex items-end gap-x-3'>
                            <Button className='w-[110px]  text-[14px]'>
                                گوش چپ
                            </Button>
                            {frequencyRange.map((item, i) => (
                                <div key={i} className='flex flex-col items-center text-primary'>
                                    <Input className='w-[110px]'/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 mt-6'>
                    <AudiogramChart/>
                    <AudiogramChart/>
                </div>
                <div className='flex  gap-x-3 mt-6'>
                    <div className='w-[70%] flex flex-col gap-y-1.5'>
                        <p className='text-[12px] text-[#5F666E]'>تفسیر</p>
                        <Textarea className='shadow-none min-h-[100px]' />
                    </div>
                <div className='relative w-[30%] flex flex-col h-fit gap-y-1.5'>
                    <p className='text-[12px] text-[#5F666E]'>تاریخ</p>
                    <DatePicker
                        className=""
                        // render={<CalendarIcon className='mt-1.5'/>}
                        //@ts-ignore
                        ref={(ref) => (window.datePickerRef = ref)}
                        inputClass="!h-10 w-full px-3"
                        containerClassName="!border !h-10 w-full  !text-12px !rounded-4"
                        format="YYYY-MM-DD"
                        calendar={persian}
                        locale={persian_fa}
                        calendarPosition="bottom-left"
                    />
                    <CalendarIcon
                        className="absolute left-3 bottom-2.5 z-10 cursor-pointer text-gray-500"
                        //@ts-ignore
                        onClick={() => window.datePickerRef?.openCalendar()}
                    />
                </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;