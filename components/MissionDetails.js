import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import moment from 'moment';
// import Link from 'next/link'
import { useRouter } from 'next/router'
import Loader from "./Loader";

function MissionDetails() {
    const router = useRouter();
    const fNo = router.query.fNo;

    const [mission, setMission] = useState([]);
    useEffect(() => {
        const fetchMission = async () => {
            const response = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&flight_number=${fNo}`);
            !(response == undefined || response == null) & setMission(response.data);
        }
        fetchMission();
    }, [fNo]);

    return (
        <div>
            {Object.keys(mission).length === 0 ? (
                <Loader />
            ) : (
                <>
                    {mission.map((item) => (
                        <div key={item.flight_number} className="bg-gray-200 min-h-screen p-2 sm:px-12">
                            {/* Details */}
                            <div className="w-ful mt-3 flex flex-wrap">
                                {/* left side */}
                                <div className="w-full md:w-1/2  p-2">
                                    <div className="bg-white w-full h-full">
                                        <Carousel autoPlay={true} infiniteLoop={true}>

                                            {item.links.flickr_images.map((img) => (
                                                <div key={img}>
                                                    <img src={img} />
                                                </div>
                                            ))}
                                        </Carousel>

                                        {item.links.flickr_images.length === 0 && <h1 className="text-3xl text-center pt-5">No image to display</h1>}

                                    </div>

                                </div>
                                {/* Right side */}
                                <div className="w-full md:w-1/2 p-2">
                                    <div className="bg-white w-full h-full p-3">
                                        {console.log(item)}
                                        <div className="flex items-center gap-4 pb-2 border-b-2 border-gray-600">
                                            <img className="w-20" src={item.links.mission_patch_small} />
                                            <div>
                                                <h1 className="text-2xl sm:text-3xl font-bold">#{item.flight_number} {item.mission_name}</h1>
                                                <p className="font-semibold">{moment(item.launch_date_local).format('llll')}</p>
                                                {/* {moment(item.launch_date_local).calendar()} */}
                                            </div>
                                        </div>

                                        <p className="text-justify text-base sm:text-lg">{item.details}</p>
                                        <div className="my-2">
                                            <h1 className="sm:text-lg font-bold border-b-2">Launch Site:</h1>
                                            <p className="sm:text-lg font-semibold text-gray-800">{item.launch_site.site_name_long}({item.launch_site.site_name})</p>
                                            <a href={`https://www.google.com/maps/search/?api=1&query=${item.launch_site.site_name_long}`} target="_blank"><button className="py-1 px-4 border-2 sm:text-lg border-blue-600 rounded hover:bg-blue-600 hover:text-gray-100 focus:outline-none mt-3">Open Map</button></a>
                                        </div>
                                        <div className="my-2">
                                            <h1 className="sm:text-lg font-bold border-b-2">Mission Ids:</h1>
                                            <ul className="list-disc ml-5 text-gray-700">
                                                {
                                                    item.mission_id.map((id) => (
                                                        <li key={id}>{id}</li>
                                                    ))

                                                }
                                            </ul>
                                        </div>
                                        <div className="my-2">
                                            <h1 className="sm:text-lg font-bold border-b-2">Rocket Info:</h1>
                                            <p className="sm:text-lg font-bold text-gray-800">Rocket Name:  <span className="font-semibold ml-2">{item.rocket.rocket_name}</span></p>
                                            <p className="sm:text-lg font-bold text-gray-800">Rocket Id:  <span className="font-semibold ml-2">{item.rocket.rocket_id}</span></p>
                                            <p className="sm:text-lg font-bold text-gray-800">Rocket Type:  <span className="font-semibold ml-2">{item.rocket.rocket_type}</span></p>


                                        </div>
                                        <div className="my-2">
                                            <h1 className="sm:text-lg font-bold inline-block border-b-2">Launch Window:</h1>
                                            <p className="sm:text-lg font-bold text-gray-800 inline-block ml-3">{item.launch_window}</p>


                                        </div>
                                        <div className="my-2">
                                            <h1 className="sm:text-lg font-bold border-b-2">Refer Article:</h1>
                                            {item.links.article_link && <a href={item.links.article_link} target="_blank"><button className="py-1 px-4 border-2 sm:text-lg border-blue-600 rounded hover:bg-blue-600 hover:text-gray-100 focus:outline-none mt-3">Visit Page</button></a>}

                                        </div>
                                        <div className="my-2">
                                            <h1 className="sm:text-lg font-bold border-b-2">Reddit News:</h1>
                                            {item.links.reddit_campaign && <a href={item.links.reddit_campaign} target="_blank"><button className="py-1 px-4 border-2 sm:text-lg border-blue-600 rounded hover:bg-blue-600 hover:text-gray-100 focus:outline-none mt-3 mr-1">Reddit Campaign</button></a>}
                                            {item.links.reddit_launch && <a href={item.links.reddit_launch} target="_blank"><button className="py-1 px-4 border-2 sm:text-lg border-blue-600 rounded hover:bg-blue-600 hover:text-gray-100 focus:outline-none mt-3 mr-1">Reddit Launch</button></a>}
                                            {item.links.reddit_media && <a href={item.links.reddit_media} target="_blank"><button className="py-1 px-4 border-2 sm:text-lg border-blue-600 rounded hover:bg-blue-600 hover:text-gray-100 focus:outline-none mt-3 mr-1">Reddit Media</button></a>}
                                            {item.links.reddit_recovery && <a href={item.links.reddit_recovery} target="_blank"><button className="py-1 px-4 border-2 sm:text-lg border-blue-600 rounded hover:bg-blue-600 hover:text-gray-100 focus:outline-none mt-3">Reddit Recovery</button></a>}

                                        </div>
                                        <div className="my-2">
                                            <h1 className="sm:text-lg font-bold border-b-2">Wikipedia:</h1>
                                            {item.links.wikipedia && <a href={item.links.wikipedia} target="_blank"><button className="py-1 px-4 border-2 sm:text-lg border-blue-600 rounded hover:bg-blue-600 hover:text-gray-100 focus:outline-none mt-3 mr-1">Open Wikipedia</button></a>}

                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Video iframe */}
                            <h1 className="text-center font-bold text-3xl my-3">Launching Video</h1>
                            <div className="w-full  h-96 flex justify-center p-3">
                                <div className="w-full lg:w-1/2">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${item.links.youtube_id}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>

                                </div>

                            </div>

                            {/* Developer Information */}
                            <div className=" w-full flex items-center justify-center border-2 border-blue-500 p-3 my-3">
                                <h1 className="font-semibold text-blue-600 text-lg sm:text-2xl">Developed By: Jyoti Prakash Mohanta</h1>
                            </div>

                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default MissionDetails
