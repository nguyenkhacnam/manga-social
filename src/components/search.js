import { useEffect, useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import SearchResult from "./searchResult";

function Search() {
    const mangaData = useSelector((store) => store.mangaData.mangaData);
    console.log('mangaData', mangaData)
    const newRelease = mangaData[1]?.data || [];
    const comicRecent = mangaData[4]?.data || [];
    const recommnendedComics = mangaData[0]?.data || [];
    const [input, setInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    console.log('searchResults', searchResults)
    const [searchResultsObj, setSearchResultsObj] = useState([])
    const [dataSearch, setDataSearch] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        // const combinedArray = [...newRelease, ...comicRecent, ...recommnendedComics]
        // setDataSearch(combinedArray)
        const combinedArray = mangaData.map((item) => item.data)
        let flattenedArray = [];

        // Duyệt qua từng mảng con và thêm các phần tử vào mảng cấp 1
        for (let i = 0; i < combinedArray.length; i++) {
            flattenedArray = flattenedArray.concat(combinedArray[i]);
        }

        // In kết quả
        console.log('flattenedArray', flattenedArray);
        
        // console.log('combinedArray', combinedArray)
        setDataSearch(flattenedArray)
    }, [mangaData])

    const performSearch = (query) => {
        if (!query) {
            setSearchResults([]);
            return;
        }
        const filter = dataSearch.filter((item) => {
            console.log('item', item?.title_manga?.toLowerCase().includes(query.toLowerCase()))
            return item?.title_manga?.toLowerCase().includes(query.toLowerCase())
        }
        );

        const uniqueFilteredObjects = [];

        filter.forEach((item) => {
            const exists = uniqueFilteredObjects.some((uniqueItem) =>
                uniqueItem.title_manga === item.title_manga
            );

            if (!exists) {
                uniqueFilteredObjects.push(item);
            }
        });

        console.log('uniqueFilteredObjects', uniqueFilteredObjects);
        setSearchResultsObj(uniqueFilteredObjects)
    };

    const handleChange = (value) => {
        setIsOpen(true)
        if (value.length === 0) {
            setIsOpen(false)
        }
        setInput(value);
        performSearch(value);
    };


    return (
        <div>
            <img
                className="w-[24px] h-[24px] absolute left-4 translate-y-[40%]"
                src="/images/search.svg"
                alt=""
            ></img>
            <input
                className="placeholder:text-[#65676b] placeholder:text-[20px] outline-none py-[12px] pl-[50px] lg:pr-0 xl:pr-[100px] rounded-[38px]"
                type="text"
                placeholder="Search..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            ></input>
            {isOpen && <div className="relative ">
                <div className="absolute top-2 overflow-y-auto h-96">
                    {
                        searchResultsObj?.map((item, index) => {
                            return (
                                <div key={index}>
                                    <SearchResult
                                        item={item}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>}
        </div>
    );
}

export default Search;