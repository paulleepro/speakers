import React, { useState, lazy } from "react";
import AddIcon from "@material-ui/icons/Add";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { Row } from "components/Grid";
import colors from "styles/colors";
import { fetchSingle } from "fetch-hooks-react";
import { IType, IListResult } from "types";
import { config } from "config";
import LazyWrapper from "components/LazyWrapper";
import Loader from "components/Loader";
import { Visible } from "components/Grid";
import QuestionHeader from "./common/QuestionHeader";
import QuestionContent from "./common/QuestionContent";
import InputText from "./common/InputText";
import Textarea from "./common/Textarea";
import SpeakersType from "./components/Topics";
import InputRadio from "./common/InputRadio";
import SearchIcon from "../../assets/Icons/Search";

const ReactTooltip = lazy(() => import("react-tooltip"));
const ErrorNotice = lazy(() => import("components/ErrorNotice"));

const SpeakersForm = () => {
  const [searchInput, setSearchInput] = useState("");
  const [notes, setNotes] = useState("");
  const [favoritesList, setFavoritesList] = useState("");
  const [speakers, setSpeakers] = useState("");
  const [hosted, setHosted] = useState("");
  const [hostName, setHostName] = useState("");

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

  const handleSearchChange = (e: any): void => {
    setSearchInput(e.target.value);
  };

  const handleNotesChange = (e: any): void => {
    setNotes(e.target.value);
  };

  const handleFavoritesChange = (e: any): void => {
    setFavoritesList(e.target.value);
  };

  const handleSpeakersChange = (e: any): void => {
    setSpeakers(e.target.value);
  };

  const handleHostNameChange = (e: any): void => {
    setHostName(e.target.value);
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
        <InputText
          name="favoritesList"
          value={favoritesList}
          onChange={handleFavoritesChange}
          icon={
            <AddIcon style={{ color: colors.primaryPurple, fontSize: 34 }} />
          }
        />
      </QuestionContent>
      <QuestionHeader
        icon={<SearchIcon />}
        title="Add more speakers?"
        description="Have more speakers in mind? Add their name(s) below. "
      />
      <QuestionContent>
        <InputText
          name="search"
          value={searchInput}
          onChange={handleSearchChange}
          placeholder="Search by name…"
          icon={<SearchIcon fill={colors.midGrey} />}
        />
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
          value={speakers}
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
              { id: "yes", value: "yes", label: "Yes" },
              { id: "no", value: "no", label: "No" },
            ]}
            name="hosted"
            selected={hosted}
            onChange={(value: any) => setHosted(value)}
          />
        </Row>
        <InputText
          name="hostName"
          value={hostName}
          onChange={handleHostNameChange}
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
          value={notes}
          onChange={handleNotesChange}
          placeholder="Additional notes..."
        />
      </QuestionContent>
    </>
  );
};

export default SpeakersForm;
