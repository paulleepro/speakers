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
import { useTalents } from "../../../../hooks/api/talent";
import Loader from "../../../../components/Loader";
import { useUpdateFavoritesList } from "../../../../hooks/api/booking";

interface IProps {
  favorites: any; // TODO define favorite type
}

const FavoritesList: FC<IProps> = ({ favorites }) => {
  const {
    data: talents,
    isLoading: areTalentsLoading,
  }: any = useTalents(favorites.talent_ids, { keepPreviousData: true });

  const [
    doUpdateList,
    { isLoading: isUpdatingList },
  ] = useUpdateFavoritesList();

  const [listName, setListName] = useState<string>(favorites.name);
  const [isEditingListName, setIsEditingListName] = useState<boolean>(false);
  const [showShareForm, setShowShareForm] = useState<boolean>(false);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const screenSize = useScreenClass();
  const isNarrowScreen = ["xs", "sm"].includes(screenSize);

  useEffect(() => {
    if (isEditingListName && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [isEditingListName]);

  const onSaveTitleClicked = async (
    evt: React.MouseEvent<HTMLButtonElement>
  ) => {
    evt.stopPropagation();
    if (isUpdatingList || !listName) {
      return;
    }
    setIsEditingListName(false);
    if (listName !== favorites.name) {
      await doUpdateList({
        id: favorites.id,
        data: { ...favorites, name: listName },
      });
    }
  };

  return (
    <div>
      <StyledContainer fluid>
        <Row>
          <Col offset={{ lg: 1 }} md={12} lg={10}>
            <HeaderWrapper>
              <TitleWrapper onClick={() => setIsEditingListName(true)}>
                <EditIcon
                  src="/images/edit.png"
                  width="24"
                  height="24"
                  alt="Edit icon"
                />
                {isEditingListName ? (
                  <InputText
                    ref={titleInputRef}
                    name="listTitle"
                    value={listName}
                    onChange={(evt) => setListName(evt.target.value)}
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
                    {favorites.name}
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
      {areTalentsLoading ? (
        <Loader />
      ) : (
        <StyledContainer fluid>
          <Row>
            <Col offset={{ lg: 1 }} md={12} lg={10}>
              <SpeakersWrapper>
                <Row>
                  {talents?.data.map((talent: any) => (
                    <Col
                      md={3}
                      sm={4}
                      xs={6}
                      key={`featured-talent-${talent.id}`}
                    >
                      <SpeakerCard
                        id={talent.id}
                        name={talent.name}
                        imageUrl={`${config.imageProxyUrl}${talent.media.images[0]?.url}`}
                        slug={talent.slug}
                        description={talent.titles[0]}
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
      )}
    </div>
  );
};

export default FavoritesList;
