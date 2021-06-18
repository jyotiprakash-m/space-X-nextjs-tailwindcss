import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from 'next/link'
import Loader from "./Loader";
function MainPage() {
    const [missions, setMissions] = useState([]);
    const [year, setYear] = useState("");
    const [successfulLaunch, setSuccessfulLaunch] = useState(null);
    const [successfulLand, setSuccessfulLand] = useState(null);


    // Run when the component first time load
    useEffect(() => {
        const fetchMissions = async () => {
            const response = await axios.get("https://api.spaceXdata.com/v3/launches?limit=100");
            !(response == undefined || response == null) & setMissions(response.data);
        }
        fetchMissions();
    }, []);
    useEffect(() => {
        const fetchMissions = async () => {
            const response = await axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${year}`);
            !(response == undefined || response == null) & setMissions(response.data);
        }
        fetchMissions();
    }, [year]);
    useEffect(() => {
        const fetchMissions = async () => {
            const response = await axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${successfulLaunch}&launch_year=${year}`);
            !(response == undefined || response == null) & setMissions(response.data);
        }
        fetchMissions();
    }, [successfulLaunch]);
    useEffect(() => {
        const fetchMissions = async () => {
            const response = await axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&land_success=${successfulLand}&launch_year=${year}`);
            !(response == undefined || response == null) & setMissions(response.data);
        }
        fetchMissions();
    }, [successfulLand]);



    console.log(missions);
    console.log(year);
    console.log("Launch", successfulLaunch)
    console.log("Land", successfulLand)
    return (
        <div>
            {Object.keys(missions).length === 0 ? (
                <Loader />
            ) : (
                <>
                    <div className="bg-gray-200 min-h-screen flex p-2 sm:px-12 flex-wrap">
                        {/* Side bar */}
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 h-screen p-3">
                            <div className="w-full bg-white rounded-lg p-6">
                                <h1 className="mb-2 font-bold text-xl">Filters</h1>
                                <div>
                                    <h1 className="capitalize pb-1 border-b-2 text-center">launch year</h1>
                                    <div className="flex justify-evenly my-2">
                                        <button className={year == 2006 ? "bg-green-900 hover:bg-green-600 py-1 px-4 text-white focus:outline-none" : "bg-green-500 hover:bg-green-600 py-1 px-4 text-white focus:outline-none"} onClick={(e) => setYear("2006")}>2006</button>
                                        <button className={year == 2007 ? "bg-green-900 hover:bg-green-600 py-1 px-4 text-white focus:outline-none" : "bg-green-500 hover:bg-green-600 py-1 px-4 text-white focus:outline-none"} onClick={() => setYear("2007")}>2007</button>
                                    </div>
                                    <div className="flex justify-evenly my-2">
                                        <button className={year == 2008 ? "bg-green-900 hover:bg-green-600 py-1 px-4 text-white focus:outline-none" : "bg-green-500 hover:bg-green-600 py-1 px-4 text-white focus:outline-none"} onClick={() => setYear("2008")}>2008</button>
                                        <button className={year == 2009 ? "bg-green-900 hover:bg-green-600 py-1 px-4 text-white focus:outline-none" : "bg-green-500 hover:bg-green-600 py-1 px-4 text-white focus:outline-none"} onClick={() => setYear("2009")}>2009</button>
                                    </div>
                                    <div className="flex justify-evenly my-2">
                                        <button className={year == 2010 ? "bg-green-900 hover:bg-green-600 py-1 px-4 text-white focus:outline-none" : "bg-green-500 hover:bg-green-600 py-1 px-4 text-white focus:outline-none"} onClick={() => setYear("2010")}>2010</button>
                                        <button className={year == 2011 ? "bg-green-900 hover:bg-green-600 py-1 px-4 text-white focus:outline-none" : "bg-green-500 hover:bg-green-600 py-1 px-4 text-white focus:outline-none"} onClick={() => setYear("2011")}>2011</button>
                                    </div>
                                    <div className="flex justify-evenly my-2">
                                        <button className={year == 2012 ? "bg-green-900 hover:bg-green-600 py-1 px-4 text-white focus:outline-none" : "bg-green-500 hover:bg-green-600 py-1 px-4 text-white focus:outline-none"} onClick={() => setYear("2012")}>2012</button>
                                        <button className={year == 2013 ? "bg-green-900 hover:bg-green-600 py-1 px-4 text-white focus:outline-none" : "bg-green-500 hover:bg-green-600 py-1 px-4 text-white focus:outline-none"} onClick={() => setYear("2013")}>2013</button>
                                    </div>
                                    <div className="flex justify-evenly my-2">
                                        <button className={year == 2014 ? "bg-green-900 hover:bg-green-600 py-1 px-4 text-white focus:outline-none" : "bg-green-500 hover:bg-green-600 py-1 px-4 text-white focus:outline-none"} onClick={() => setYear("2014")}>2014</button>
                                        <button className={year == 2015 ? "bg-green-900 hover:bg-green-600 py-1 px-4 text-white focus:outline-none" : "bg-green-500 hover:bg-green-600 py-1 px-4 text-white focus:outline-none"} onClick={() => setYear("2015")}>2015</button>
                                    </div>
                                    <div className="flex justify-evenly my-2">
                                        <button className={year == 2016 ? "bg-green-900 hover:bg-green-600 py-1 px-4 text-white focus:outline-none" : "bg-green-500 hover:bg-green-600 py-1 px-4 text-white focus:outline-none"} onClick={() => setYear("2016")}>2016</button>
                                        <button className={year == 2017 ? "bg-green-900 hover:bg-green-600 py-1 px-4 text-white focus:outline-none" : "bg-green-500 hover:bg-green-600 py-1 px-4 text-white focus:outline-none"} onClick={() => setYear("2017")}>2017</button>
                                    </div>
                                    <div className="flex justify-evenly my-2">
                                        <button className={year == 2018 ? "bg-green-900 hover:bg-green-600 py-1 px-4 text-white focus:outline-none" : "bg-green-500 hover:bg-green-600 py-1 px-4 text-white focus:outline-none"} onClick={() => setYear("2018")}>2018</button>
                                        <button className={year == 2019 ? "bg-green-900 hover:bg-green-600 py-1 px-4 text-white focus:outline-none" : "bg-green-500 hover:bg-green-600 py-1 px-4 text-white focus:outline-none"} onClick={() => setYear("2019")}>2019</button>
                                    </div>
                                    <div className="flex justify-evenly my-2">
                                        <button className={year == 2020 ? "bg-green-900 hover:bg-green-600 py-1 px-4 text-white focus:outline-none" : "bg-green-500 hover:bg-green-600 py-1 px-4 text-white focus:outline-none"} onClick={() => setYear("2020")}>2020</button>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="capitalize pb-1 border-b-2 text-center">successful launch</h1>
                                    <div className="flex justify-evenly my-2">
                                        <button className="bg-green-500 hover:bg-green-600 py-1 px-4 text-white focus:outline-none" onClick={() => setSuccessfulLaunch(true)}>True</button>
                                        <button className="bg-green-500 hover:bg-green-600 py-1 px-4 text-white focus:outline-none" onClick={() => setSuccessfulLaunch(false)}>False</button>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="capitalize pb-1 border-b-2 text-center">successful Landing</h1>
                                    <div className="flex justify-evenly my-2">
                                        <button className="bg-green-500 hover:bg-green-600 py-1 px-4 text-white focus:outline-none" onClick={() => setSuccessfulLand(true)}>True</button>
                                        <button className="bg-green-500 hover:bg-green-600 py-1 px-4 text-white focus:outline-none" onClick={() => setSuccessfulLand(false)}>False</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Display Section */}
                        <div className="w-full sm:w-1/2 md:w-2/3 lg:w-4/5 flex flex-wrap">

                            {missions.map((mission) => (


                                <div className="w-full md:w-1/2 xl:w-1/4 p-3">
                                    <Link key={mission.flight_number} href={`/mission/${mission.flight_number}`}>
                                        <div className="bg-white w-full rounded-lg p-3 cursor-pointer hover:bg-gray-100">
                                            <img className="w-full" src={mission.links.mission_patch_small} alt="logo" />
                                            <h1 className="font-bold text-blue-700 my-2">{mission.mission_name} #{mission.flight_number}</h1>
                                            <h1 className="font-bold">Mission Ids:</h1>
                                            <ul className="list-disc ml-5 text-gray-700">
                                                {
                                                    mission.mission_id.map((id) => (
                                                        <li key={id}>{id}</li>
                                                    ))

                                                }
                                            </ul>
                                            <h1 className="font-bold ">Launch Year:<span className="text-gray-700 font-semibold ml-2">{mission.launch_year}</span></h1>
                                            <h1 className="font-bold ">Successful Launch:<span className="text-gray-700 font-semibold ml-2">{mission.launch_success ? "True" : "False"}</span></h1>
                                            <h1 className="font-bold ">Successful Land:<span className="text-gray-700 font-semibold ml-2">{mission.rocket.first_stage.cores[0].land_success ? "True" : "False"}</span></h1>
                                        </div>
                                    </Link>
                                </div>
                            ))}


                        </div>
                    </div>
                    {/* Developer Information */}
                    <div className=" w-full flex items-center justify-center border-2 border-blue-500 p-3 my-3">
                        <h1 className="font-semibold text-blue-600 text-lg sm:text-2xl">Developed By: Jyoti Prakash Mohanta</h1>
                    </div>
                </>
            )}
        </div>
    )
}

export default MainPage
