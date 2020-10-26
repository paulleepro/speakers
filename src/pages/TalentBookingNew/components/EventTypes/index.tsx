import React, { FC } from "react";

import { Row, Col } from "components/Grid";
import {
  EventTypeWrapper,
  ImageWrapper,
  FeaturesList,
  ImageOverlay,
} from "./styles";

const EVENT_TYPES = [
  {
    type: "Live Drop-In",
    name: "Live Drop-In",
    imageUrl: "/images/hero-img-1.png",
    features: ["Up to 30 minutes", "Inspire your team", "One speaker"],
  },
  {
    type: "Interactive Q&A",
    name: "Interactive Q&A",
    imageUrl: "/images/hero-img-2.png",
    features: ["Up to 1 hour", "Take audience questions", "One speaker"],
  },
  {
    type: "Deep Dive",
    name: "Deep Dive",
    imageUrl: "/images/hero-img-3.png",
    features: [
      "45-min keynote ",
      "In-Depth discussion with experts",
      "15-minute Q&A",
    ],
  },
  // {
  //   id: 3,
  //   type: 'multiple_speakers',
  //   name: "Multiple Speakers",
  //   imageUrl: "/images/panel-discussion.png",
  //   features: ["Select your timeframe", "Pick a format", "Add speakers"],
  // },
];

interface IEventTypeProps {
  type: string;
  name: string;
  onSelect: (type: string) => void;
  selected: string | undefined;
  features: Array<string>;
  imageUrl: string;
}

interface IEventTypes {
  selected: string;
  onSelect: (value: string) => void;
}

const EventType: FC<IEventTypeProps> = ({
  type,
  name,
  onSelect,
  selected,
  features,
  imageUrl,
}) => {
  return (
    <EventTypeWrapper>
      <ImageWrapper onClick={() => onSelect(type)} active={selected === type}>
        <img src={imageUrl} alt="event type" />
        <ImageOverlay />
        <h4>
          <p />
          {name}
        </h4>
      </ImageWrapper>
      <FeaturesList active={selected === type}>
        {features.map((item: string, idx: number) => (
          <li key={idx}>{item}</li>
        ))}
      </FeaturesList>
    </EventTypeWrapper>
  );
};

const EventTypes: FC<IEventTypes> = ({ selected, onSelect }) => {
  const handleSelect = (type: string) => {
    onSelect(type);
  };

  return (
    <Row>
      {EVENT_TYPES.map((item, idx) => (
        <Col
          key={idx}
          sm={6}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <EventType
            key={item.type}
            {...item}
            selected={selected}
            onSelect={handleSelect}
          />
        </Col>
      ))}
    </Row>
  );
};

export default EventTypes;
