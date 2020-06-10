import React, { FC, useState } from "react";
import { fetchMany } from "fetch-hooks-react";
import Loader from "components/Loader";
import { config } from "config";
import ErrorNotice from "components/ErrorNotice";
import { MainWrapper } from "./styles";
import StarPower from "components/StarPower";
import Title from "./Title";
import Featured from "./Featured";
import Search from "./Search";
import { ISearchResult, IListResult, ITalent } from "types";
import SearchResults from "./SearchResults";
import Topics from "./Topics";

const topics = [
  "Innovators & Entrepreneurs",
  "Basketball Players & Coaches",
  "Social Media Influencers",
  "Artists & Entertainers",
];

const slugs = [
  "lin-manuel-miranda",
  "kevin-hart",
  "alex-rodriguez",
  "tyler-perry",
  "indra-nooyi",
  "venus-williams",
];

const Explore: FC = () => {
  const [searchResults, setSearchResults] = useState<ISearchResult<ITalent>[]>(
    []
  );

  const params = topics
    .map((x) => ({
      url: `${config.speakersTalentUrl}/v1/talents?limit=4&where=types.name:like:${x}`,
      key: x,
    }))
    .concat({
      url: `${
        config.speakersTalentUrl
      }/v1/talents?fields=name,id,slug,titles,media&where=slug:in:${slugs.join(
        ":"
      )}`,
      key: "featured",
    });
  const { data, error, isLoading } = fetchMany<{
    [key: string]: IListResult<ITalent>;
  }>(params);

  let components = <div />;

  if (isLoading) {
    components = <Loader />;
  } else if (error || !data) {
    components = <ErrorNotice />;
  } else {
    components = (
      <>
        <Featured data={data.featured} />
        <Topics data={data} />
        <StarPower />
      </>
    );
  }

  return (
    <MainWrapper>
      <Title
        tabs={topics}
        hasSearchResults={Boolean(searchResults.length)}
        goBack={() => setSearchResults([])}
      />
      <Search setSearchResults={setSearchResults} />
      {searchResults.length ? (
        <SearchResults
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
      ) : (
        components
      )}
    </MainWrapper>
  );
};

export default Explore;
