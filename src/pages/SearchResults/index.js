import { useLocation } from "react-router-dom";
import CardManga from "../../components/cardManga";
function SearchResults() {
  const location = useLocation()
  const { searchResultsObj } = location.state || {};

  console.log('searchResultsObj',searchResultsObj)
  return (
    <div className="flex flex-col justify-between bg-black pt-4">
      <h1 className="text-[14px] font-semibold sm:text-[18px] md:text-[24px] lg:text-[50px] flex items-center justify-between px-[16px] pb-[16px] sm:px-[20px] md:px-[25px] text-white self-center">Search Results</h1>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-[10px] gap-y-[20px] lg:gap-[20px] px-[16px] pb-[16px] sm:px-[20px] md:px-[25px] lg:px-[60px] lg:pb-[60px] lg:pt-[30px]">
        {
          searchResultsObj.map((result,index) => (
            <CardManga
                    key={index}
                    poster={result?.image_poster_link_goc}
                    title={result?.title_manga}
                    rate={result?.rate}
                    update={result.time_release}
                    url_manga={result.url_manga}
                />
          ))
        }
      </div>
    </div>
  );
}

export default SearchResults;