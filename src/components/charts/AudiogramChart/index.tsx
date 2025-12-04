"use client";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ReferenceArea, DotItemDotProps,
} from "recharts";

const data = [
    // {freq: "0", db: 135},
    {freq: 500, db: 70},
    {freq: 1000, db: 50},
    {freq: 2000, db: 50},
    {freq: 3000, db: 40},
    {freq: 4000, db: 50},
    {freq: 6000, db: 40},
    {freq: 8000, db: 30},
    {freq: 9000, db: 30},
];

// #region Sample data

// #endregion
const CustomizedDot = (props: DotItemDotProps
) => {
    const {cx, cy, value} = props;

    if (cx == null || cy == null) {
        return <g/>;
    }

    if (cy >= cx) {
        return (
            <svg x={cx - 8} y={cy - 8} stroke="red" fill="white" strokeWidth="2" viewBox="0 0 512 512" height="1em"
                 width="1em" xmlns="http://www.w3.org/2000/svg">
                <path strokeWidth="32" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
            </svg>
        );
    }

    return (
        <svg x={cx - 8} y={cy - 8} stroke="red" fill="white" strokeWidth="1" viewBox="0 0 24 24" strokeLinecap="round"
             strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        </svg>

    );
};

const ranges = [
    {label: "Normal", y1: 0, y2: 20},
    {label: "Mid", y1: 20, y2: 40},
    {label: "Moderate", y1: 40, y2: 50},
    {label: "Severe", y1: 50, y2: 70},
    {label: "Profound", y1: 70, y2: 90},
    {label: "Danger", y1: 90, y2: 135},
];

const yTicks = [
    0, 10, 20, 30, 40, 50, 60,
    70, 80, 90, 100, 110, 120, 130
];
const xTicks = ["250", "500", "1k", "2k", "3k", "4k", "6k", "8k"];


export default function AudiogramChart() {
    return (
        <div className="w-full max-w-xl mx-auto !text-[#5F666E] !text-[12px]" dir='ltr'>
            <h2 className="text-center  font-semibold">Right Ear</h2>
            <div className="relative">

                {ranges.map((r, i) => {
                    const chartHeight = 420;
                    const domainMin = 0;
                    const domainMax = 135;

                    const midpoint = (r.y1 + r.y2) / 2;
                    const percent = (midpoint - domainMin) / (domainMax - domainMin);

                    const y = percent * chartHeight;

                    return (
                        <div
                            key={i}
                            className="absolute -right-6 translate-y-[-50%]  font-semibold pointer-events-none pr-1"
                            style={{top: y}}
                        >
                            {r.label}
                        </div>
                    );
                })}

                <ResponsiveContainer width="100%" height={520}>
                    <LineChart data={data}
                        // margin={{top: 20, right: 50, bottom: 0, left: 40}}
                               margin={{top: 20, right: 50, bottom: 20, left: 60}}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>

                        <XAxis
                            dataKey="freq"
                            label={{value: "Frequency (Hz)", position: "insideBottom", dy: 20}}
                            // padding={{ left: 30, right: 30 }}
                            domain={[-10, 135]}
                            // ticks={["250", "500", "1k", "2k", "3k", "4k", "6k", "8k"]}
                            interval={0}
                            padding={{left: 40, right: 30}}
                            tickFormatter={(v) => {
                                if (v >= 1000) return (v / 1000) + "k";
                                return v;
                            }}
                        />


                        <YAxis
                            // domain={[0, 120]}
                            domain={[-5, 130]}
                            // ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]}
                            ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]}
                            interval={0}
                            // tickCount={28}
                            reversed
                            label={{value: "Hearing Level (dB)", angle: -90, position: "insideLeft"}}
                            padding={{top: 10, bottom: 0}}

                        />
                        <Tooltip/>
                        <ReferenceArea y1={0} y2={20} fill="#d4edda" fillOpacity={0.4} ifOverflow="extendDomain"/> //
                        Normal
                        <ReferenceArea y1={20} y2={40} fill="#fff3cd" fillOpacity={0.4} ifOverflow="extendDomain"/> //
                        Mid
                        <ReferenceArea y1={40} y2={50} fill="#ffe5b4" fillOpacity={0.4} ifOverflow="extendDomain"/> //
                        Moderate
                        <ReferenceArea y1={50} y2={70} fill="#f8d7da" fillOpacity={0.4} ifOverflow="extendDomain"/> //
                        Severe
                        <ReferenceArea y1={70} y2={90} fill="#f5c6cb" fillOpacity={0.4} ifOverflow="extendDomain"/> //
                        Profound
                        <ReferenceArea y1={90} y2={130} fill="#f8bbbb" fillOpacity={0.4} ifOverflow="extendDomain"/> //
                        Danger


                        <Line
                            dataKey="db"
                            stroke="red"
                            strokeWidth={1.5}
                            activeDot={{r: 6}}
                            dot={CustomizedDot}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
