import React, { FC } from "react";
import { config } from "config";
import { ITalent } from "types";
import Swiper from "react-id-swiper";
import SpeakerCard from "components/SpeakerCard";
import { useScreenClass } from "react-grid-system";

interface IProps {
  talentList: ITalent[];
}

const SwipeableCards: FC<IProps> = ({ talentList }) => {
  const screenClass = useScreenClass();

  return (
    <div style={{ maxWidth: "calc(100vw - 24px)" }}>
      <Swiper
        {...{
          slidesPerView: screenClass === "xs" ? 2.2 : 4.2,
          spaceBetween: 15,
        }}
        rebuildOnUpdate
      >
        {talentList.map((x, i) => (
          <div key={`featured-talent-${i}-${x.name.replace(/ /g, "-")}`}>
            <SpeakerCard
              name={x.name}
              imageUrl={`${config.imageProxyUrl}${x.media.images[0]?.url}`}
              slug={x.slug}
              description={x.titles[0]}
            />
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default SwipeableCards;
