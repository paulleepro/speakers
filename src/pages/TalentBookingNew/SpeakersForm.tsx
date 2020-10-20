import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { Row, Col } from "components/Grid";
import colors from "styles/colors";

import QuestionHeader from "./common/QuestionHeader";
import InputText from "./common/InputText";
import Textarea from "./common/Textarea";
import SpeakersType from "./components/Topics";
import InputRadio from "./common/InputRadio";

const SpeakersForm = () => {
  const [searchInput, setSearchInput] = useState("");
  const [notes, setNotes] = useState("");
  const [favoritesList, setFavoritesList] = useState("");
  const [speakers, setSpeakers] = useState("");
  const [hosted, setHosted] = useState("");
  const [hostName, setHostName] = useState("");

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
      <Row>
        <Col>
          <QuestionHeader
            order={1}
            title="Add speakers you’d like for your event"
            description="Add speakers directly from your Favorites List or take a moment to search some more"
          />
          <QuestionHeader
            icon={
              <img src="/images/star.png" alt="star" width="24" height="23" />
            }
            title="Add from your Favorites List"
            description="Adding from this list will help you complete your booking request faster."
          />
          <InputText
            name="favoritesList"
            value={favoritesList}
            onChange={handleFavoritesChange}
            icon={
              <AddIcon style={{ color: colors.primaryPurple, fontSize: 34 }} />
            }
          />
          <QuestionHeader
            icon={
              <SearchIcon
                style={{ color: colors.primaryPurple, fontSize: 30 }}
              />
            }
            title="Add more speakers?"
            description="Have more speakers in mind? Add their name(s) below. "
          />
          <InputText
            name="search"
            value={searchInput}
            onChange={handleSearchChange}
            placeholder="Search by name…"
            icon={
              <SearchIcon style={{ color: colors.midGrey, fontSize: 30 }} />
            }
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <QuestionHeader
            order={2}
            title="Which types of speakers are you considering?"
            description="Select up to three."
          />
          <SpeakersType
            value={speakers}
            name="speakers"
            onChange={handleSpeakersChange}
            placeholder="Choose a Speaker Type"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <QuestionHeader
            order={3}
            title="Have you or your organization hosted speakers in the past?"
            description="Add any relevant past speakers you’ve hosted for your organization."
          />
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
            <Col>
              <InputText
                name="hostName"
                value={hostName}
                onChange={handleHostNameChange}
                placeholder="Add their name(s) here..."
                icon={
                  <HelpOutlineIcon
                    style={{ color: colors.primaryPurple, fontSize: 30 }}
                  />
                }
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <QuestionHeader
            order={4}
            title="Any additional notes or comments?"
            description="Take a moment to share any thoughts or special notes you have about your preferred speaker(s)."
          />
          <Textarea
            rows={3}
            name="notes"
            value={notes}
            onChange={handleNotesChange}
            placeholder="Additional notes..."
          />
        </Col>
      </Row>
    </>
  );
};

export default SpeakersForm;
