import React, { useState, lazy, useContext } from "react";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { Row, Col } from "components/Grid";
import colors from "styles/colors";
import { fetchSingle } from "fetch-hooks-react";
import { IType, IListResult, IFavoriteList, ITalent } from "types";
import { config } from "config";
import LazyWrapper from "components/LazyWrapper";
import Loader from "components/Loader";
import { Visible } from "components/Grid";
import SearchIcon from "assets/icons/Search";

import { useFavoritesLists } from "../../../../hooks/api/booking";
import QuestionHeader from "../../common/QuestionHeader";
import QuestionContent from "../../common/QuestionContent";
import InputText from "../../common/InputText";
import Textarea from "../../common/Textarea";
import InputRadio from "../../common/InputRadio";
import SpeakersType from "../../components/Topics";
import SearchTalents from "../../common/SearchTalents";
import SelectedTalent from "../../common/SelectedTalent";
import Select from "../../common/Select";
import { BookingInquiryContext } from "../../BookingInquiryContext";

const ReactTooltip = lazy(() => import("react-tooltip"));
const ErrorNotice = lazy(() => import("components/ErrorNotice"));

const SpeakersForm = () => {
  const { bookingInquiry, setBookingInquiry } = useContext(
    BookingInquiryContext
  );

  const {
    data: favoritesLists,
    isLoading: areFavoritesListsLoading,
  } = useFavoritesLists();

  const [favoritesList, setFavoritesList] = useState("");
  const [talents, setTalents] = useState<any[]>([]);
  const [favoritesTalents, setFavoritesTalents] = useState<any[]>([]);

  const { data, isLoading, error } = fetchSingle<IListResult<IType>>(
    `${config.speakersTalentUrl}/v1/talents/metadata/types?order=name:asc`
  );

  if (isLoading) {
    return <Loader />;
  } else if (error || !data) {
    return (
      <LazyWrapper>
        <ErrorNotice />
      </LazyWrapper>
    );
  }

  const handleSelectTalent = (talent: any): void => {
    setTalents([...talents, talent]);
    setBookingInquiry({
      ...bookingInquiry,
      talent_ids: [...(bookingInquiry?.talent_ids || []), talent.id], // TODO talent id
    });
  };

  const handleRemoveFavoritesTalent = (talent: any): void => {
    setFavoritesTalents(favoritesTalents.filter((x) => x.id !== talent.id));
    setBookingInquiry({
      ...bookingInquiry,
      talent_ids: bookingInquiry?.talent_ids?.filter((x) => x !== talent.id),
    });
  };

  const handleRemoveTalent = (talent: any): void => {
    setTalents(talents.filter((x) => x.id !== talent.id));
    setBookingInquiry({
      ...bookingInquiry,
      talent_ids: bookingInquiry?.talent_ids?.filter((x) => x !== talent.id),
    });
  };

  const handleFavoritesListChange = (e: any): void => {
    setFavoritesList(e.target.value);
    const favoriteList = favoritesLists.data.find(
      (data: IFavoriteList) => data.id === e.target.value
    ) as IFavoriteList;
    if (favoriteList) {
      fetch(
        `${
          config.speakersTalentUrl
        }/v1/talents/?fields=name,id,slug,titles,media&where=id:in:${favoriteList.talent_ids.join(
          ":"
        )}`
      ).then(async (res) => {
        const json = await res.json();
        setFavoritesTalents(json.data);
        setBookingInquiry({
          ...bookingInquiry,
          talent_ids: [
            ...(bookingInquiry?.talent_ids || []),
            ...json.data.map((t: ITalent) => t.id),
          ], // TODO talent id,
        });
      });
    } else {
      setBookingInquiry({
        ...bookingInquiry,
        talent_ids: bookingInquiry?.talent_ids?.filter(
          (x) => !favoritesTalents.find((t) => t.id === x)
        ),
      });
      setFavoritesTalents([]);
    }
  };

  const handleSpeakersChange = (list: string[]): void => {
    setBookingInquiry({
      ...bookingInquiry,
      considered_talent_types: list,
    });
  };

  const handleInputChange = (e: any, fieldName: string) => {
    setBookingInquiry({
      ...bookingInquiry,
      [fieldName]: e.target.value,
    });
  };

  const renderFavoritesLists = () => {
    if (areFavoritesListsLoading) {
      return <Loader />;
    } else if (!favoritesLists.data || !favoritesLists.data.length) {
      return <span>Empty</span>;
    }
    return (
      <Select
        options={favoritesLists.data.map((data: IFavoriteList) => ({
          value: data.id,
          label: data.name,
        }))}
        onChange={handleFavoritesListChange}
        value={favoritesList}
        name="favorite_list"
        placeholder="Select Your Favorite List"
        hasMargin
      />
    );
  };

  return (
    <>
      <h3>Add Your Speaker Preferences</h3>
      <QuestionHeader
        order={1}
        title="Add speakers you’d like for your event"
        description="Add speakers directly from your Favorites List or take a moment to search some more"
      />
      <QuestionHeader
        icon={<img src="/images/star.png" alt="star" width="24" height="23" />}
        title="Add from your Favorites List"
        description="Adding from this list will help you complete your booking request faster."
      />
      <QuestionContent>
        {renderFavoritesLists()}
        <Row>
          {favoritesTalents.map((x, idx) => (
            <Col md={6} key={idx}>
              <SelectedTalent
                talent={x}
                onRemove={handleRemoveFavoritesTalent}
                variant="outline"
              >
                {x.name}
              </SelectedTalent>
            </Col>
          ))}
        </Row>
      </QuestionContent>
      <QuestionHeader
        icon={<SearchIcon />}
        title="Add more speakers?"
        description="Have more speakers in mind? Add their name(s) below. "
      />
      <QuestionContent>
        <SearchTalents onSelectTalent={handleSelectTalent} />
        <Row>
          {talents.map((x, idx) => (
            <Col md={6} key={idx}>
              <SelectedTalent talent={x} onRemove={handleRemoveTalent}>
                {x.name}
              </SelectedTalent>
            </Col>
          ))}
        </Row>
      </QuestionContent>

      <QuestionHeader
        order={2}
        title="Which types of speakers are you considering?"
        description="Select up to three."
      />
      <QuestionContent>
        <SpeakersType
          type="speakerType"
          list={data?.data}
          activeItems={bookingInquiry.considered_talent_types || []}
          name="speakers"
          onChange={handleSpeakersChange}
          placeholder="Choose a Speaker Type"
        />
      </QuestionContent>

      <QuestionHeader
        order={3}
        title="Have you or your organization hosted speakers in the past?"
        description="Add any relevant past speakers you’ve hosted for your organization."
      />
      <QuestionContent>
        <Row>
          <InputRadio
            options={[
              { id: "yes", value: true, label: "Yes" },
              { id: "no", value: false, label: "No" },
            ]}
            name="hosted"
            selected={bookingInquiry.have_hosted_speakers}
            onChange={(value: any) => {
              setBookingInquiry({
                ...bookingInquiry,
                have_hosted_speakers: value,
              });
            }}
          />
        </Row>
        <InputText
          name="hostName"
          value={bookingInquiry.hosted_speakers}
          onChange={(e) => handleInputChange(e, "hosted_speakers")}
          placeholder="Add their name(s) here..."
          icon={
            <>
              <HelpOutlineIcon
                data-tip
                data-for="host-organization-name"
                style={{ color: colors.primaryPurple, fontSize: 30 }}
              />
              <Visible md lg>
                <LazyWrapper>
                  <ReactTooltip
                    id="host-organization-name"
                    place="right"
                    type="dark"
                    effect="float"
                    className="tooltip"
                    backgroundColor={colors.black}
                    border
                    borderColor={colors.primaryPurple}
                  >
                    <b>Why do you need this information?</b>
                    <br />
                    By providing prior speaker information, our agents can
                    better understand your preferences. These details will then
                    help them tailor speakers that best match your event needs.
                  </ReactTooltip>
                </LazyWrapper>
              </Visible>
            </>
          }
        />
      </QuestionContent>

      <QuestionHeader
        order={4}
        title="Any additional notes or comments?"
        description="Take a moment to share any thoughts or special notes you have about your preferred speaker(s)."
      />
      <QuestionContent>
        <Textarea
          rows={3}
          name="notes"
          value={bookingInquiry.notes}
          onChange={(e) => handleInputChange(e, "notes")}
          placeholder="Additional notes..."
        />
      </QuestionContent>
    </>
  );
};

export default SpeakersForm;
