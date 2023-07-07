import * as React from "react";
import {
  StandardFacets,
  ResultsCount,
  AppliedFilters,
  LocationBias,
  SearchBar,
  onSearchFunc,
} from "@yext/search-ui-react";
import AssetCard from "./assetCard";
import { useSearchActions, useSearchState } from "@yext/search-headless-react";
import { useEffect, useState } from "react";

const SearchResults = () => {
  const searchActions = useSearchActions();
  const offSet = useSearchState((state) => state.vertical.offset) || 0;
  const resultsSize = useSearchState((state) => state.vertical.resultsCount);
  const loading = useSearchState((state) => state.searchStatus.isLoading);
  const [divs, setDivs] = useState<JSX.Element[]>([]);
  const query = useSearchState((state) => state.query.input);
  const filters = useSearchState((state) => state.filters.facets);

  const loadMore = () => {
    query && searchActions.setQuery(query);
    searchActions.setOffset(offSet + 20);
    searchActions
      .executeVerticalQuery()
      .then((res) =>
        setDivs((prevDivs) => [
          ...prevDivs,
          addDiv(res?.verticalResults.results, false),
        ])
      );
  };

  useEffect(() => {
    query && searchActions.setQuery(query);
    searchActions
      .executeVerticalQuery()
      .then((res) =>
        setDivs((prevDivs) => [
          ...prevDivs,
          addDiv(res?.verticalResults.results, false),
        ])
      );
  }, []);
  const handleSearch: onSearchFunc = (searchEventData) => {
    setDivs([]);
    const { query } = searchEventData;
    query && searchActions.setQuery(query);
    searchActions
      .executeVerticalQuery()
      .then((res) =>
        setDivs((prevDivs) => [
          ...prevDivs,
          addDiv(res?.verticalResults.results, true),
        ])
      );
  };

  const addDiv = (res: any, isSearch: boolean) => {
    return (
      <>
        {!loading && res ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {res.map((item: any, index: any) => (
              <AssetCard key={index} result={item} />
            ))}
          </div>
        ) : (
          <div>loading</div>
        )}
      </>
    );
  };

  return (
    <div className="w-full">
      <SearchBar onSearch={handleSearch}></SearchBar>
      <div className="flex">
        <div
          className=" shrink-0 px-5  pt-5 mr-4"
          style={{ maxWidth: "18rem" }}
        >
          <StandardFacets />
        </div>
        <div className="flex-grow">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline">
              <ResultsCount />
              <AppliedFilters />
            </div>
          </div>
          <div>
            {divs.map((div, index) => (
              <React.Fragment key={index}>{div}</React.Fragment>
            ))}
          </div>

          <div className="mt-16">
            {offSet + 20 < resultsSize! && (
              <div
                className="mx-auto my-3 border py-2 text-center bg-gray-100 flex justify-center"
                onClick={loadMore}
              >
                {loading ? (
                  <div
                    className="w-4 h-4 rounded-full  animate-spin
                border border-solid border-gray-600 border-t-transparent"
                  ></div>
                ) : (
                  "Load More"
                )}
              </div>
            )}
            <LocationBias />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
