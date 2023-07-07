import { Image } from "@yext/pages/components";
import { CardProps } from "@yext/search-ui-react";
import * as React from "react";

const AssetCard = (props: CardProps<any>) => {
  const { result } = props;
  const { name } = result;
  const { c_image, landingPageUrl, c_assetType } = result.rawData;

  return (
    <a href={landingPageUrl}>
      <div className="m-1 relative group">
        <Image image={c_image} className="!max-w-none " />
        <div className="absolute  bg-transparent bottom-5 right-5">
          {c_assetType[0].toLowerCase() === "video" && (
            <img
              src="https://www.dvidshub.net/images/video-icon.svg"
              alt=""
              className="h-10 w-10"
            />
          )}
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50"></div>
        <div className="absolute bottom-0 left-0 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
          {name}
        </div>
      </div>
    </a>
  );
};

export default AssetCard;
