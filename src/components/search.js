import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SearchResult from "./searchResult";
import { useNavigate } from "react-router-dom";
function Search() {
  const navigate = useNavigate();
  const mangaData = useSelector((store) => store.mangaData.mangaData);
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  console.log('searchResults', searchResults)
  const [searchResultsObj, setSearchResultsObj] = useState([])
  const [dataSearch, setDataSearch] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const combinedArray = mangaData.map((item) => item.data)
    let flattenedArray = [];
    // Duyệt qua từng mảng con và thêm các phần tử vào mảng cấp 1
    for (let i = 0; i < combinedArray.length; i++) {
      flattenedArray = flattenedArray.concat(combinedArray[i]);
    }
    setDataSearch(flattenedArray)
  }, [mangaData])

  const performSearch = (query) => {
    if (!query) {
      setSearchResults([]);
      return;
    }
    const filter = dataSearch.filter((item) => {
      // console.log('item', item?.title_manga?.toLowerCase().includes(query.toLowerCase()))
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
  const handleMouseDown = (event) => {
    event.preventDefault()
  }
  const handleBlur = () => {
    setIsOpen(false)
  }

  const handleSearch = () => {
    setInput("")
    setIsOpen(false)
    navigate(`/search?keyword=${input}`, { state: { searchResultsObj } })
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setInput("")
      setIsOpen(false)
      navigate(`/search?keyword=${input}`, { state: { searchResultsObj } });
    }
  };
  return (
    <div className="relative w-full sm:relative sm:w-full md:relative md:w-full">
      <img
        className="w-[24px] h-[24px] absolute left-4 translate-y-[40%] cursor-pointer"
        src="/images/search.svg"
        alt=""
        onClick={handleSearch}
      ></img>
      <input
        className={` placeholder:text-[#9B9B9B] bg-[#4A4A4A] w-full placeholder:text-[20px] outline-none py-[12px] pl-[50px] pr-[100px] rounded-[38px] 
        sm:placeholder:text-[#9B9B9B] sm:bg-[#4A4A4A] sm:w-full sm:placeholder:text-[20px] sm:outline-none sm:py-[12px] sm:pl-[50px] sm:pr-[100px] sm:rounded-[38px] md:placeholder:text-[#9B9B9B] md:bg-[#4A4A4A] md:w-full md:placeholder:text-[20px] md:outline-none md:py-[12px] md:pl-[50px] md:pr-[100px] md:rounded-[38px] lg:placeholder:text-[#65676B] lg:bg-[#DADADA] lg:w-full lg:placeholder:text-[20px] lg:outline-none lg:py-[12px] lg:pl-[50px] lg:pr-[100px] lg:rounded-[38px] ${isOpen ? 'rounded-bl-none rounded-br-none rounded-tl-[20px] rounded-tr-[20px]   sm:rounded-bl-none sm:rounded-br-none sm:rounded-tl-[20px] sm:rounded-tr-[20px] md:rounded-bl-none md:rounded-br-none md:rounded-tl-[20px] md:rounded-tr-[20px]   lg:rounded-bl-none lg:rounded-br-none lg:rounded-tl-[20px] lg:rounded-tr-[20px]' : ''}`}
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      ></input>
      {isOpen &&
        <div className="w-full absolute overflow-y-auto h-96" onMouseDown={handleMouseDown}>
          {
            searchResultsObj?.map((item, index) => {
              return (
                <div key={index}>
                  <SearchResult
                    item={item}
                    setInput={setInput}
                    setIsOpen={setIsOpen}
                  />
                </div>
              )
            })
          }
        </div>
      }
    </div>
  );
}

export default Search;