import { Link, Outlet } from "react-router-dom";
import ComicRecent from "../../components/comicRecent";
import { useEffect, useState } from "react";
import HeaderMobile from "../../components/HeaderMobile";
import Comments from "../../components/comments";

function UserProfile() {
    const [image, setImage] = useState(null)
    const [userName, setUserNam] = useState('')
    const [year, setYear] = useState('')
    const [introduction, setIntroduction] = useState('')
    const [sex, setSex] = useState('')
    useEffect(() => {
        const storedData = localStorage.getItem('persist:root');
        const parsedData = JSON.parse(storedData);
        const userData = JSON.parse(parsedData.user)
        const idUser = userData.id_user
        const AuthToken = JSON.stringify(userData.jwt)
        const fetchUserData = async () => {
            try {
              const response = await fetch(`http://14.225.7.221:7979/user/${idUser}`, {
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${AuthToken}`
                }
              });
      
              if (response.ok) {
                const data = await response.json();
                const userData = data.PROFILES
                setImage(userData.avatar_user)  
                setYear(userData.year_birth)
                setUserNam(userData.name_user)
                setIntroduction(userData.introduction)
                setSex(userData.sex)
              }
            } catch (error) {
              console.error('Error fetching user data:', error);
            }
          };
      
          fetchUserData();
    }, [])
    return (
        <>
            <HeaderMobile/>
            <div className="bg-[#000000] h-full">
            <div className="container mx-auto">
                <div className="md:flex md:flex-col items-center text-[#fff] relative">
                    <img src="images\UserProfile\Rectangle 457.png" alt="" className="max-h-[247px] md:max-h-[923px] md:w-full md:h-[923px] lg:w-full lg:h-[923px] bg-[#ffff] bg-cover lg:rounded-b-[150px] rounded-bl-3xl" />
                    <div className="flex flex-col md:h-60 md:w-full md:relative">
                        <div className="md:flex md:absolute bottom-0 md:bottom-[-50%] relative translate-y-[-30%] left-5">
                            <img src={image} alt="" className=" w-[124px] h-[124px] border-4 md:w-[312px] md:h-[312px]
                            rounded-full object-cover border-solid md:border-8" />
                            <div className="flex flex-col font-normal md:text-[28px] md:items-center justify-start md:justify-center md:gap-6 md:ml-6">
                                <h2 className="text-[#fff] md:text-[45px] text-sm font-semibold">{userName}</h2>
                                <p className="text-xs md:text-[28px] md:text-left">{year}</p>
                                <p className="self-start">278 Friends</p>
                            </div> 
                        </div>
                        <img src="images\UserProfile\more-horizontal.png" alt="" className="w-7 h-7 md:w-16 md:h-16 absolute right-4 top-1/2 translate-y-[100%] md:translate-y-[-50%] cursor-pointer"/>
                    </div>
                </div>
                <div className="flex flex-col mx-4 md:w-[526px] max-h-[352px] bg-[#676767] md:mt-[52px] font-semibold text-[#fff] mb-24 rounded-xl md:p-6 p-[10px]">
                    <div>
                        <h2 className="text-sm md:text-[36px] text-[#fff] ">Introduce</h2>
                        <p className="text-[11px] md:text-[24px] ">{introduction}</p> 
                    </div>
                    <div className="flex mb-3 md:mb-[30px]">
                        <img src="images\UserProfile\material-symbols_work-sharp.png" alt="" className="w-4 h-4 md:w-[32px] md:h-[32px]" />
                        <p className="text-[11px] md:text-[22px] pl-2">Officer</p>
                    </div>
                    <div className="flex mb-3 md:mb-[30px]">
                        <img src="images\UserProfile\ph_gender-intersex-bold.png" alt="" className="w-4 h-4 md:w-[32px] md:h-[32px]" />
                        <p className="text-[11px] md:text-[22px] pl-2">{sex ? sex : 'Female'}</p>
                    </div>
                    <div className="flex mb-3 md:mb-[30px]">
                        <img src="images\UserProfile\Frame 48097208.png" alt="" className="w-4 h-4 md:w-[32px] md:h-[32px]" />
                        <p className="text-[11px] md:text-[22px] pl-2">Manga-Action-Mystery</p>
                    </div>
                    <div className="flex mb-[30px]">
                        <img src="images\UserProfile\jam_birthday-cake-f.png" alt="" className="w-4 h-4 md:w-[32px] md:h-[32px]" />
                        <p className="text-[11px] md:text-[22px] pl-2">{year}</p>
                    </div>
                </div>
                <div>
                    <div className="text-6xl text-white mb-10"><Link to="" >Recent Read Comics</Link></div>
                    <div className=""><ComicRecent /></div>
                </div>
                {/* <div>
                    <div className="text-6xl text-white mb-10"><Link to="" >Comments</Link></div>
                    <div className=""><Comments /></div>
                </div> */}
            </div>
        </div>
        </>
        
    );
}

export default UserProfile;