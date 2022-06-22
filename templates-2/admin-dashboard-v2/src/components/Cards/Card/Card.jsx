import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import { useState } from "react";

const Card = ({ title, color, barValue, value, png, series }) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <AnimateSharedLayout>
            {expanded ? (
                <ExpandedCard
                    title={title}
                    color={color}
                    barValue={barValue}
                    value={value}
                    png={png}
                    series={series}
                    setExpanded={() => setExpanded(false)}
                />
            ) : (
                <CompactCard
                    title={title}
                    color={color}
                    barValue={barValue}
                    value={value}
                    png={png}
                    series={series}
                    setExpanded={() => setExpanded(true)}
                />
            )}
        </AnimateSharedLayout>
    );
};
export default Card;

const CompactCard = ({ title, color, barValue, value, png, setExpanded }) => {
    const Png = png;

    return (
        <motion.div
            className="CompactCard"
            style={{
                background: color.backGround,
                boxShadow: color.boxShadow,
            }}
            layoutId="expandableCard"
            onClick={setExpanded}
        >
            <div className="radialBar">
                <CircularProgressbar value={barValue} text={`${barValue}%`} />
                <span>{title}</span>
            </div>
            <div className="detail">
                <Png />
                <span>${value}</span>
                <span>Last 24 hours</span>
            </div>
        </motion.div>
    );
};

const ExpandedCard = ({ title, color, series, setExpanded }) => {
    const data = {
        options: {
            chart: {
                type: "area",
                height: "auto",
            },

            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35,
            },

            fill: {
                colors: ["#fff"],
                type: "gradient",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["white"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid: {
                show: true,
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z",
                ],
            },
        },
    };

    return (
        <motion.div
            className="ExpandedCard"
            style={{
                background: color.backGround,
                boxShadow: color.boxShadow,
            }}
            layoutId="expandableCard"
        >
            <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
                <UilTimes onClick={setExpanded} />
            </div>
            <span>{title}</span>
            <div className="chartContainer">
                <Chart options={data.options} series={series} type="area" />
            </div>
            <span>Last 24 hours</span>
        </motion.div>
    );
};
