import React, { FC, lazy } from "react";
import { config } from "config";
import { ITalent } from "types";
import Swiper from "react-id-swiper";
import { useScreenClass } from "components/Grid";
import LazyWrapper from "components/LazyWrapper";

const SpeakerCard = lazy(() => import("components/SpeakerCard"));

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
            <LazyWrapper>
              <SpeakerCard
                id={x.id}
                name={x.name}
                imageUrl={`${config.imageProxyUrl}${x.media.images[0]?.url}`}
                slug={x.slug}
                description={x.titles[0]}
              />
            </LazyWrapper>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default SwipeableCards;
