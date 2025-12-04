import React from 'react';
import AudiogramChart from "@/components/charts/AudiogramChart";
import LineChartExample from "@/components/charts/simple";

const Page = () => {
    return (
        <main className="p-6">
            <AudiogramChart />
            {/*<LineChartExample />*/}
        </main>
    );
};

export default Page;