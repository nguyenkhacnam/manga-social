import React, { useState } from "react";

const Nhap = () => {
  const [showAll, setShowAll] = useState(false);

  const handleSeeAllClick = () => {
    setShowAll(true);
  };
  return (
    <div>
      <div className="flex ga-10 ">
        <div>dalksjhgdasjkhdasd</div>
        <div>
          <div>djkalsghdkalshjdgajd</div>
          <div className="min-h-[20px] w-[200px] bg-black text-white">
            <div>dakjshkgda</div>
            <div>dlkjahkgsjdaksd</div>
            <div>
              <div>
                {showAll
                  ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis blanditiis cum a exercitationem facere iusto, at culpa debitis itaque non accusamus ipsum ut sequi eligendi quibusdam soluta? Sed, commodi laborum."
                  : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis blanditiis..."}
                {!showAll && (
                  <button onClick={handleSeeAllClick}>See All</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ut
        cupiditate rem. Deserunt voluptatem non voluptas quis minima architecto
        eaque, enim nulla incidunt obcaecati, rerum porro rem quo corporis
        excepturi!
      </div>
    </div>
  );
};

export default Nhap;
