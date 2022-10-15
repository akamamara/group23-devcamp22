import React from "react";
import airServis from "../../assets/kangAir.jpg";
import { servisBangunan } from "../../utils/dummyServis";
function MainContent({ type }) {
  const content = null;
  if (type === "servis") {
    return (
      <div className="grid grid-cols-3 gap-3 py-3 px-4">
        <div className="relative col-span-1">
          <img
            src={airServis}
            className="cursor-pointer hover:translate-y-[-10px] transition-all ease-in"
          />
        </div>
        <div className="relative col-span-1">
          <img
            src={airServis}
            className="cursor-pointer hover:translate-y-[-10px] transition-all ease-in"
          />
        </div>
        <div className="relative col-span-1">
          <img
            src={airServis}
            className="cursor-pointer hover:translate-y-[-10px] transition-all ease-in"
          />
        </div>
      </div>
    );
  }
  if (type === "currentProject") {
    return (
      <div className="max-w-full overflow-scroll flex gap-6 scrollbar-hide">
        {servisBangunan.map((servis, ind) => (
          <div key={ind} className="relative flex-1 min-w-[300px]">
            <img
              src="https://i.ytimg.com/vi/5UPdRF5xpVM/maxresdefault.jpg"
              className="w-full h-auto"
            />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full text-center">
              <h1 className="text-green-300">{servis.name}</h1>
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (type === "history") {
    return (
      <div className="max-w-full overflow-scroll flex gap-6 scrollbar-hide">
        {servisBangunan.map((servis, ind) => (
          <div key={ind} className="relative flex-1 min-w-[300px]">
            <img
              src="https://i.ytimg.com/vi/5UPdRF5xpVM/maxresdefault.jpg"
              className="w-full h-auto"
            />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full text-center">
              <h1 className="text-green-300">{servis.name}</h1>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return <div>{content}</div>;
}

export default MainContent;