import React, { FC, useEffect, useRef, useState } from "react";
import { Row, Col, useScreenClass } from "components/Grid";
import {
  HeaderWrapper,
  TitleWrapper,
  EditIcon,
  HeaderButtons,
  SpeakersWrapper,
} from "./styles";
import { HeaderText, Button, StyledContainer } from "styles/components";
import { config } from "../../../../config";
import CreateBookingRequestCard from "../CreateBookingRequestCard";
import SpeakerCard from "../../../../components/SpeakerCard";
import InputText from "../InputText";
import ShareForm from "../ShareForm";

interface IProps {
  favorites: any[]; // TODO define favorite type
}

const FavoritesList: FC<IProps> = ({ favorites }) => {
  const [listTitle, setListTitle] = useState<string>("September's Short List");
  const [isEditingTitle, setIsEditingTitle] = useState<boolean>(false);
  const [showShareForm, setShowShareForm] = useState<boolean>(false);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const screenSize = useScreenClass();
  const isNarrowScreen = ["xs", "sm"].includes(screenSize);

  useEffect(() => {
    if (isEditingTitle && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [isEditingTitle]);

  const onSaveTitleClicked = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    setIsEditingTitle(false);
  };

  return (
    <div>
      <StyledContainer fluid>
        <Row>
          <Col offset={{ lg: 1 }} md={12} lg={10}>
            <HeaderWrapper>
              <TitleWrapper onClick={() => setIsEditingTitle(true)}>
                <EditIcon
                  src="/images/edit.png"
                  width="24"
                  height="24"
                  alt="Edit icon"
                />
                {isEditingTitle ? (
                  <InputText
                    ref={titleInputRef}
                    name="listTitle"
                    value={listTitle}
                    onChange={(evt) => setListTitle(evt.target.value)}
                    icon={
                      <Button
                        padding="4px 12px"
                        margin="0 -8px 0 0"
                        onClick={onSaveTitleClicked}
                      >
                        Save
                      </Button>
                    }
                    dense
                  />
                ) : (
                  <HeaderText
                    noCenterAlign
                    smallerOnMobile
                    useEllipsis
                    margin="0"
                  >
                    {listTitle}
                  </HeaderText>
                )}
              </TitleWrapper>
              <HeaderButtons>
                <Button
                  variant="outline"
                  onClick={() => setShowShareForm(true)}
                >
                  {isNarrowScreen ? "Share Your Favorites" : "Share"}
                </Button>
                <Button>Request Your Favorites</Button>
              </HeaderButtons>
            </HeaderWrapper>
          </Col>
        </Row>
      </StyledContainer>
      <ShareForm show={showShareForm} onClose={() => setShowShareForm(false)} />
      <StyledContainer fluid>
        <Row>
          <Col offset={{ lg: 1 }} md={12} lg={10}>
            <SpeakersWrapper>
              <Row>
                {favorites.map((x) => (
                  <Col md={3} sm={4} xs={6} key={`featured-talent-${x.id}`}>
                    <SpeakerCard
                      name={x.name}
                      imageUrl={`${config.imageProxyUrl}${x.media.images[0]?.url}`}
                      slug={x.slug}
                      description={x.titles[0]}
                    />
                  </Col>
                ))}
                <Col md={3} sm={4} xs={12}>
                  <CreateBookingRequestCard />
                </Col>
              </Row>
            </SpeakersWrapper>
          </Col>
        </Row>
      </StyledContainer>
    </div>
  );
};

export default FavoritesList;
