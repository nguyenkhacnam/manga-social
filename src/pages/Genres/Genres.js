import CardGenres from "../../components/cardGenres";
import MostSearch from "../../components/mostSearch";

const GENRES = [
    {
        imgage: "/images/Genres/genres1.jpg",
        title: "Shounen Manga",
    },
    {
        imgage: "/images/Genres/genres2.jpg",
        title: "Shoujo Manga",
    },
    {
        imgage: "/images/Genres/genres3.jpg",
        title: "Seinen Manga",
    },
    {
        imgage: "/images/Genres/genres4.jpg",
        title: "Josei Manga",
    },
    {
        imgage: "/images/Genres/genres5.jpg",
        title: "Kodomo Manga",
    },
    {
        imgage: "/images/Genres/genres6.jpg",
        title: "Horror Manga",
    },
    {
        imgage: "/images/Genres/genres7.jpg",
        title: "Mystery Manga",
    },
    {
        imgage: "/images/Genres/genres8.jpg",
        title: "Fantacy Manga",
    },
];

const MOST_SEARCH = [
    { title: "Naruto" },
    { title: "Action" },
    { title: "Adventure" },
    { title: "Jujustu Kaisen" },
    { title: "One Piece" },
    { title: "Berserk" },
    { title: "Fantacy" },
    { title: "Naruto" },
    { title: "Naruto" },
    { title: "Naruto" },
    { title: "Naruto" },
    { title: "Naruto" },
    { title: "Naruto" },
    { title: "Naruto" },
    { title: "Naruto" },
    { title: "Naruto" },
    { title: "Naruto" },
    { title: "Naruto" },
    { title: "Naruto" },
];

const Page_Genres = () => {
    return (
        <div className="pt-[16px] px-[16px] pb-[100px] md:px-[25px] md:pb-[150px] lg:px-[60px] lg:pb-[200px] bg-black">
            <div className="flex flex-col lg:flex-row gap-3">
                <div className="relative">
                    <img
                        className="w-full h-[83px] md:h-[150px] lg:w-[300px] lg:h-[600px] xl:w-[432px] xl:h-[787px] object-cover rounded-[12px]"
                        src="/images/Genres/img1.png"
                        alt=""
                    />
                    <p className="text-white absolute bottom-[8px] left-[10px] text-[14px] md:text-[18px] lg:hidden font-semibold">
                        Written Stories
                    </p>
                </div>

                <div className="relative">
                    <img
                        className="w-full h-[83px] md:h-[150px] lg:w-[300px] lg:h-[600px] xl:w-[432px] xl:h-[787px] object-cover rounded-[12px]"
                        src="/images/Genres/img2.png"
                        alt=""
                    />
                    <p className="text-white absolute bottom-[8px] left-[10px] text-[14px] md:text-[18px] lg:hidden font-semibold">
                        Manga
                    </p>
                </div>

                <div className="relative">
                    <img
                        className="w-full h-[83px] md:h-[150px] lg:w-[300px] lg:h-[600px] xl:w-[432px] xl:h-[787px] object-cover rounded-[12px]"
                        src="/images/Genres/img3.png"
                        alt=""
                    />
                    <p className="text-white absolute bottom-[8px] left-[10px] text-[14px] md:text-[18px] lg:hidden font-semibold">
                        Genres
                    </p>
                </div>

                <div className="relative">
                    <img
                        className="w-full h-[83px] md:h-[150px] lg:w-[300px] lg:h-[600px] xl:w-[432px] xl:h-[787px] object-cover rounded-[12px]"
                        src="/images/Genres/img4.png"
                        alt=""
                    />
                    <p className="text-white absolute bottom-[8px] left-[10px] text-[14px] md:text-[18px] lg:hidden font-semibold">
                        Hotest Topic
                    </p>
                </div>
            </div>

            <div>
                <h1 className="text-[14px] font-semibold sm:text-[18px] md:text-[24px] lg:text-[50px] leading-[64px] text-[#FFFFFF] pt-[16px] sm:pt-[20px] sm:pb-[26px] md:pb-[30px] md:pt-[38px] lg:pt-[50px] lg:pb-[60px]">
                    News
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                    {GENRES.map((item, index) => (
                        <CardGenres
                            key={index}
                            image={item.imgage}
                            title={item.title}
                        />
                    ))}
                </div>
            </div>

            <div>
                <h1 className="text-[14px] font-semibold sm:text-[18px] md:text-[24px] lg:text-[50px] leading-[64px] text-[#FFFFFF] pt-[16px] sm:pt-[20px] sm:pb-[26px] md:pb-[30px] md:pt-[38px] lg:pt-[50px] lg:pb-[60px]">
                    Most Searched Topics
                </h1>
                <div className="flex flex-wrap gap-2">
                    {MOST_SEARCH.map((item, index) => (
                        <MostSearch key={index} title={item.title} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Page_Genres;
