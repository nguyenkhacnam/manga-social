function SearchResult({ item }) {
    return (
        <>
            <div className="flex h-24 gap-2 bg-white hover:bg-[#e0e0e0] duration-200">
                <img src={item.image_poster_link_goc} alt="" className="w-14 h-14 object-cover" />
                <div>
                    <h2>{item.title_manga}</h2>
                </div>
            </div>
        </>

    );
}

export default SearchResult;