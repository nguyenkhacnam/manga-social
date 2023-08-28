
import { useNavigate } from "react-router-dom";
function SearchResult({ item, setInput, setIsOpen }) {
  const navigate = useNavigate();
  const urlParts = item.url_manga?.split("/");
  // console.log('urlParts', urlParts)
  const mangaSlug = urlParts?.slice(urlParts?.indexOf("manga")).join("/");
  console.log('mangaSlug', mangaSlug)
  const handleResultClick = () => {
    // Chuyển đổi địa chỉ URL và xóa giá trị tìm kiếm
    setInput("")
    setIsOpen(false)
    navigate(`/${mangaSlug}`);
  };
  
  return (
      <div className="w-full" onClick={handleResultClick} >
        <div className="flex w-full py-4 px-4 gap-2  border-t-[1px] border-solid h-24 bg-white hover:bg-[#e0e0e0] duration-200 cursor-pointer">
          <img src={item.image_poster_link_goc} alt="" className="block object-cover" />
          <div className="overflow-hidden">
            <h2>{item.title_manga}</h2>
          </div>
        </div>
      </div>
  );
}

export default SearchResult;