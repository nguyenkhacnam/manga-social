import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, json } from "react-router-dom";
export default function Layout({ home }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isServerHovered, setIsServerHovered] = useState(false);

    //handle search
    const [input, setInput] = useState("")
    console.log(input)
    const fetchData = (value) => {
        fetch('http://14.225.7.221:7979/')
            .then((response) => response.json())
            .then(res => {
                console.log(res[1].data)
                // const results = data.filter((data) => {
                //     return data && data.title_manga && data.title_manga.toLowerCase().includes(value)
                // })
                // console.log(results)
            })
    }

    // useEffect(() => {
    //     axios.get('http://14.225.7.221:7979/')
    //         .then(response => {
    //             response.data.forEach((data, index) => {
    //                 // console.log(data) 
    //                 return data.data.forEach((data) => {
    //                     console.log(data) 
    //                     // const titleManga = data.filter((data) => {
    //                     //     return data.title_manga
    //                     // })

    //                     // console.log(titleManga)
    //                     // const arrTitleManga = []
    //                     // if (titleManga) {
    //                     //     arrTitleManga.push(titleManga)
    //                     // }
    //                     // console.log(arrTitleManga)
    //                 })
    //             })
    //             // console.log(data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, [])
    const handleChange = (value) => {
        setInput(value)
        fetchData()
    }
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const handleServerMouseEnter = () => {
        setIsServerHovered(true);
    };

    const handleServerMouseLeave = () => {
        setIsServerHovered(false);
    };
    return (
        <>
            <div className="header-top">
                <Link to="/">
                    <div className="title">
                        <img
                            className="img-manga"
                            src="/images/Ellipse 1.svg"
                        ></img>
                        <h3>MangaSocial</h3>
                    </div>
                </Link>
                <div className="menu-header">
                    <Link to="/">
                        <div
                            className="comic"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <p>Comic</p>
                            <img
                                className="arrow-img"
                                src={
                                    isHovered
                                        ? "/images/Polygon cam.svg"
                                        : "/images/Polygon 1.svg"
                                }
                                alt="Arrow"
                            />
                        </div>
                    </Link>

                    <Link to="/genres"><p>Genres</p></Link>

                    <p>Popular</p>

                    <div
                        className="server"
                        onMouseEnter={handleServerMouseEnter}
                        onMouseLeave={handleServerMouseLeave}
                    >
                        <p>Server</p>
                        <img
                            className="arrow-img"
                            src={
                                isServerHovered
                                    ? "/images/Polygon cam.svg"
                                    : "/images/Polygon 1.svg"
                            }
                            alt="Arrow"
                        />
                    </div>
                    <Link to="/contact-us"><p className="contact">Contact us</p></Link>
                </div>
                <div className="avatar_search">
                    <img src="/images/search.svg "></img>
                    <input type="text" placeholder="Search..." value={input} onChange={(e) => handleChange(e.target.value)}></input>
                    <Link to="/user-profile">
                        <div className="avatar">
                            <img src="/images/usersquare.svg"></img>
                        </div>
                    </Link>
                </div>
            </div>
            <Outlet></Outlet>
        </>
    );
}
