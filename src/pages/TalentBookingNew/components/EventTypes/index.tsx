import React, { useState, FC } from "react";

import { Row, Col } from "components/Grid";
import {
  EventTypeWrapper,
  ImageWrapper,
  FeaturesList,
  ImageOverlay,
} from "./styles";

const EVENT_TYPES = [
  {
    id: 0,
    name: "Live Drop-In",
    imageUrl: "/images/hero-img-1.png",
    features: ["Up to 30 minutes", "Inspire your team", "One speaker"],
  },
  {
    id: 1,
    name: "Interactive Q&A",
    imageUrl: "/images/hero-img-2.png",
    features: ["Up to 1 hour", "Take audience questions", "One speaker"],
  },
  {
    id: 2,
    name: "Deep Dive",
    imageUrl: "/images/hero-img-3.png",
    features: [
      "45-min keynote ",
      "In-Depth discussion with experts",
      "15-minute Q&A",
    ],
  },
  {
    id: 3,
    name: "Multiple Speakers",
    imageUrl: "/images/panel-discussion.png",
    features: ["Select your timeframe", "Pick a format", "Add speakers"],
  },
];

interface IEventTypeProps {
  id: number;
  name: string;
  onSelect: (id: number) => void;
  selected: number | undefined;
  features: Array<string>;
  imageUrl: string;
}

const EventType: FC<IEventTypeProps> = ({
  id,
  name,
  onSelect,
  selected,
  features,
  imageUrl,
}) => {
  return (
    <EventTypeWrapper>
      <ImageWrapper onClick={() => onSelect(id)} active={selected === id}>
        <img src={imageUrl} alt="event type" />
        <ImageOverlay />
        <h4>
          <p />
          {name}
        </h4>
      </ImageWrapper>
      <FeaturesList active={selected === id}>
        {features.map((item: string, idx: number) => (
          <li key={idx}>{item}</li>
        ))}
      </FeaturesList>
    </EventTypeWrapper>
  );
};

const EventTypes = () => {
  const [selected, setSelected] = useState<number>();

  const handleSelect = (id: number) => {
    setSelected(id);
  };

  return (
    <Row>
      {EVENT_TYPES.map((item) => (
        <Col sm={6} style={{ display: "flex", justifyContent: "center" }}>
          <EventType
            key={item.id}
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
