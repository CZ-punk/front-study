import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";
import styled from "styled-components";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export const Wrapper = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center; 
    height: 100%; 
    width: 100%;
    background-color: #0e3041;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
`
const RankGraph = () => {
    const rpData = [
        { date: "4/4", rp: 80 },
        { date: "4/8", rp: 60 },
        { date: "4/10", rp: 90 },
        { date: "4/17", rp: 70 },
        { date: "4/18", rp: 85 },
        { date: "4/21", rp: 75 },
        { date: "4/22", rp: 95 },
    ];

    const data = {
        labels: rpData.map(data => data.date),
        datasets: [
            {
                label: 'RP',
                data: rpData.map(data => data.rp),
                borderColor: '#4caf50',
                backgroundColor: 'rgba(76, 175, 80, 0.2)', 
                borderWidth: 2,
                fill: true, 
            },
        ],
    };

    const options = {
        responsive: true,
        // maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom' as const,
            },
            tooltip: {
                mode: 'index' as const,
                intersect: false,
            },
        },
        scales: {
            x: {
                title: {
                    display: false,
                    text: '날짜',
                },
            },
            y: {
                title: {
                    display: false,
                    text: 'MMR',
                },
                min: 0,
                max: 100,
            },
        },
    };

    return (
        <Wrapper>
            <Line data={data} options={options} style={{ width: '100%', height: '100%' }} />
        </Wrapper>
    );
};

export default RankGraph;
