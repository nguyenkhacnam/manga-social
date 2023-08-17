import { Link } from "react-router-dom";
import ComicRecent from "../../components/comicRecent";
import { useEffect, useState } from "react";

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
                // console.log(data)
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
        <div className="bg-[#000000] h-full">
            <div className="container mx-auto">
                <div className="2xl:flex 2xl:flex-col items-center text-[#fff] relative">
                    <img src="images\UserProfile\Rectangle 457.png" alt="" className="w-full h-[923px] bg-[#ffff] bg-cover lg:rounded-b-[150px]" />
                    <div className="h-60 w-full relative">
                        <div className="flex absolute bottom-0">
                            <img src={image} alt="" className="w-[312px] h-[312px]
                            rounded-full object-cover border-solid border-8" />
                            <div className="flex flex-col font-normal text-[28px] items-center justify-center ml-6">
                                <h2 className="text-[#fff] text-[45px] font-semibold">{userName}</h2>
                                <p className="self-start">{year}</p>
                                <p className="self-start">278 Friends</p>
                            </div>
                        </div>
                        <img src="images\UserProfile\more-horizontal.png" alt="" className="w-16 h-16 absolute right-0 top-1/2 translate-y-[-50%] cursor-pointer"/>
                    </div>
                </div>
                <div className="flex flex-col w-[526px] max-h-[352px] bg-[#676767] mt-[52px] font-semibold text-[#fff] mb-24 rounded-xl p-6">
                    <div>
                        <h2 className="text-[36px] text-[#fff] ">Introduce</h2>
                        <p className="text-[24px] ">{introduction}</p> 
                    </div>
                    <div className="flex mb-[30px]">
                        <img src="images\UserProfile\material-symbols_work-sharp.png" alt="" className="w-[32px] h-[32px]" />
                        <p className="text-[22px] pl-2">Officer</p>
                    </div>
                    <div className="flex mb-[30px]">
                        <img src="images\UserProfile\ph_gender-intersex-bold.png" alt="" className="w-[32px] h-[32px]" />
                        <p className="text-[22px] pl-2">{sex ? sex : 'Female'}</p>
                    </div>
                    <div className="flex mb-[30px]">
                        <img src="images\UserProfile\Frame 48097208.png" alt="" className="w-[32px] h-[32px]" />
                        <p className="text-[22px] pl-2">Manga-Action-Mystery</p>
                    </div>
                    <div className="flex mb-[30px]">
                        <img src="images\UserProfile\jam_birthday-cake-f.png" alt="" className="w-[32px] h-[32px]" />
                        <p className="text-[22px] pl-2">{year}</p>
                    </div>
                </div>
                <div>
                    <div className="text-6xl text-white mb-10"><Link to="" >Recent Read Comics</Link></div>
                    <div className=""><ComicRecent /></div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;