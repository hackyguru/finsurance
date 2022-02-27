import React, {useState} from "react";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Team from "../components/Team";
import Loader from "../components/Loader";
import { Tab } from "@headlessui/react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    RadialLinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
    registerables
} from "chart.js";

import { PolarArea, Pie} from "react-chartjs-2";
import axios from "../utils/axios";

export default function Dashboard() {

    const [isDataFetched, setIsDataFetched] = useState(false)
    const [data, setData] = useState()

    useState(() => {
        // axios().get("opinion").then((response) => {
        //     setIsDataFetched(true)
        //     setData(response.data)
        // })
        setIsDataFetched(true)
    })

    function renderPolarAreaChart() {
        if (isDataFetched) {
            ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend, ...registerables);

            const options = {
                responsive: true,
                scales: {
                    x: {
                        ticks: {
                            display: false,
                            color: "white",
                        },
                    },
                    y: {
                        ticks: {
                            display: false,
                            color: "white",
                        },
                    },
                },
                color: "black",
            };

            const data = {
                labels: [
                    "Chennai",
                    "Bengaluru",
                    "Coimbatore",
                    "Hyderabad",
                    "Madurai",
                    "Tiruchirappalli",
                    "Thiruvananthapuram"],
                datasets: [
                    {
                        label: "Total Accidents",
                        data: Object.values([646, 872,65,254,81,87,108]),
                        backgroundColor: [
                            "rgba(54, 162, 235, 0.5)",
                            "rgba(75, 192, 192, 0.5)",
                            "rgba(153, 102, 255, 0.5)",
                            "rgba(255, 159, 64, 0.5)",
                            "rgba(255, 52, 64, 0.5)",
                            "rgba(25, 159, 64, 0.5)",
                            "rgba(158, 152, 64, 0.5)",
                        ],
                        borderWidth: 1,
                    },
                ],
            };

            return (
                <PolarArea
                    style={{ maxHeight: 454, maxWidth: 1000 }}
                    data={data}
                    options={options}
                />
            );
        }
        return "";
    }

    function renderPieChart() {
        if (isDataFetched) {
            ChartJS.register(ArcElement, Tooltip, Legend, ...registerables);

            return (
                <Pie
                    style={{ maxHeight: 454, maxWidth: 1000 }}
                    data={{
                        labels: [  "Chennai",
                            "Bengaluru",
                            "Coimbatore",
                            "Hyderabad",
                            "Madurai",
                            "Tiruchirappalli",
                            "Thiruvananthapuram"],
                        datasets: [
                            {
                                label: "Total Accidents",
                                data: [
                                    646, 872,65,254,81,87,108
                                ],
                                backgroundColor: [
                                    "rgba(54, 162, 235, 0.5)",
                                    "rgba(75, 192, 192, 0.5)",
                                    "rgba(153, 102, 255, 0.5)",
                                    "rgba(255, 159, 64, 0.5)",
                                    "rgba(255, 52, 64, 0.5)",
                                    "rgba(25, 159, 64, 0.5)",
                                    "rgba(158, 152, 64, 0.5)",
                                ],
                                borderColor: [
                                    "rgba(54, 162, 235, 0.5)",
                                    "rgba(75, 192, 192, 0.5)",
                                    "rgba(153, 102, 255, 0.5)",
                                    "rgba(255, 159, 64, 0.5)",
                                    "rgba(255, 52, 64, 0.5)",
                                    "rgba(25, 159, 64, 0.5)",
                                    "rgba(158, 152, 64, 0.5)",
                                ],
                                borderWidth: 1,
                            },
                        ],
                    }}
                    options={{
                        plugins: {
                            legend: {
                                labels: {
                                    color: "black",
                                },
                            },
                            tooltip: {
                                bodySpacing: 6,
                                callbacks: {
                                    label: function (context) {
                                        return context.label + ": " + context.parsed + "%";
                                    },
                                },
                            },
                        },
                    }}
                    plugins={[
                        {
                            id: "legendDistance",
                            beforeInit(chart, args, opts) {
                                const originalFit = chart.legend.fit;
                                chart.legend.fit = function fit() {
                                    originalFit.bind(chart.legend)();
                                    this.height += 15;
                                };
                            },
                        },
                    ]}
                />
            );
        }

        return "";
    }

  return (
    <div className="">
      <Navbar />

        {isDataFetched ? (
        <div className="flex flex-col text-center justify-content-center">
            <Tab.Group>
                <Tab.List className="text-center space-x-3 mb-3">
                    <Tab
                        className={({ selected }) =>
                            selected
                                ? "glass p-2 text-orange-300 border border-orange-300 desc"
                                : "white-glassmorphism p-2 text-gray-300 desc"

                        }
                    >
                        Polar Chart
                    </Tab>
                    <Tab
                        className={({ selected }) =>
                            selected
                                ? "glass p-2 text-orange-300 border border-orange-300 desc"
                                : "white-glassmorphism p-2 text-gray-300 desc"
                        }
                    >
                        Pie Chart
                    </Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <div style={{maxWidth: 1000}} className="p-1 shadow-xl  rounded-2xl">
                            <div className="block white-glassmorphism border rounded-xl">
                                <div className="">{renderPolarAreaChart()}</div>
                            </div>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div style={{maxWidth: 1000}} className="p-1 shadow-xl  rounded-2xl">
                            <div className="block white-glassmorphism border rounded-xl">
                                <div className="">{renderPieChart()}</div>
                            </div>
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
            <div className="flex flex-wrap -mx-3 overflow-hidden">
                <div className="my-3 px-3 w-1/2 overflow-hidden lg:w-1/4 xl:w-1/4">
                    <div className="p-1 shadow-xl  rounded-2xl">
                        <div className="block p-6 white-glassmorphism    border sm:p-8 rounded-xl">
                            <div className="">
                                <h5 className="text-md font-bold heading text-primary">
                                    ₹3,000
                                </h5>

                                <p className="mt-2 text-sm desc">
                                    Coverage upto ₹5,00,000
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-3 px-3 w-1/2 overflow-hidden lg:w-1/4 xl:w-1/4">
                    <div className="p-1 shadow-xl  rounded-2xl">
                        <div className="block p-6 white-glassmorphism    border sm:p-8 rounded-xl">
                            <div className="sm:pr-8">
                                <h5 className="text-md font-bold heading text-primary">
                                    (Recommended) ₹4,000
                                </h5>

                                <p className="mt-2 text-sm desc">
                                    Coverage upto ₹7,00,000
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-3 px-3 w-1/2 overflow-hidden  lg:w-1/4 xl:w-1/4">
                    <div className="p-1 shadow-xl  rounded-2xl">
                        <div className="block p-6 white-glassmorphism    border sm:p-8 rounded-xl">
                            <div className="sm:pr-8">
                                <h5 className="text-md font-bold heading text-primary">
                                    ₹5,000
                                </h5>

                                <p className="mt-2 text-sm desc">
                                  Coverage upto ₹10,00,000
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ) : (
        <Loader value={"Loading....."} />
        )}

    </div>
  );
}
