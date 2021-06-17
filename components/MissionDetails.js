import React, { useState, useEffect } from "react";
import axios from "axios";

function MissionDetails({ fNo }) {
    // https://api.spacexdata.com/v3/launches?limit=100&flight_number=1
    const [mission, setMission] = useState([]);
    useEffect(() => {
        const fetchMission = async () => {
            const response = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&flight_number=${fNo}`);
            !(response == undefined || response == null) & setMission(response.data);
        }
        fetchMission();
    }, [fNo]);

    return (
        <div className="bg-gray-200 min-h-screen p-2 sm:px-12">
            {/* Heading Information */}
            <div className="bg-blue-600 h-14 w-full">

            </div>
            {/* Details */}
            <div className="w-ful mt-3 flex flex-wrap">
                {/* left side */}
                <div className="w-full md:w-1/2 h-96  p-2">
                    <div className="bg-white w-full h-full">

                    </div>

                </div>

                {/* Right side */}
                <div className="w-full md:w-1/2 h-96 p-2">
                    <div className="bg-white w-full h-full">

                    </div>
                </div>

            </div>

            {/* Video iframe */}
            <div className="w-full  h-96 flex justify-center p-3">
                <div className="w-full lg:w-1/2 bg-pink-600">

                </div>

            </div>

            {/* Developer Information */}
            <div className="bg-blue-600 h-14 w-full">

            </div>

        </div>
    )
}

export default MissionDetails
