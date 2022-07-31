import * as React from "react";
import { Link } from "react-router-dom";

import PupApiService from "../../services/thing-api-service";
import NavBar from "../NavigationBar/NavigationBar";

import DogTag from "./Dogtag";
import Map from "./Map";

import "../Home/Home.css";
import "./Find.css";
import "./DogTags.css";

export default function Find() {
  const [dogTags, setDogTags] = React.useState([]);
  const [filter, setFilter] = React.useState(null);
  const [filterName, setFilterName] = React.useState("");
  const [filterZip, setFilterZip] = React.useState(null);
  const [filterZipValue, setFilterZipValue] = React.useState("");

  // CATEGORY FILTER
  function filterResults(ev: any) {
    const { value } = ev.target;

    setFilter(true);
    setFilterName(value);

    renderDogTags();
  }

  // ZIPCODE FILTER
  function filterByZip(ev: any) {
    const { value } = ev.target;

    setFilterZip(true);
    setFilterZipValue(value);

    renderDogTags();
  }

  // CLEARS FILTERS

  function clearFilter() {
    setFilter(false);
    setFilterName("");
    setFilterZip(false);
    setFilterZipValue("");
  }

  // FETCHES INFORMATION NEEDED TO RENDER THE DOGTAGS
  React.useEffect(() => {
    PupApiService.getpups().then((resJSON) => {
      setDogTags(resJSON);
    });
  }, []);

  // RENDERS OUT THE DOGS CARDS THAT WILL BE PASSED INTO MAP

  function renderDogTags() {
    let filteredResults = dogTags;

    if (filter) {
      filteredResults = filteredResults.filter(
        (dogCard) => dogCard.category === filterName
      );
    }

    if (!filterByZip) {
      return filteredResults.map((dogCard) => {
        return (
          <DogTag
            name={dogCard.name}
            img={dogCard.image}
            description={dogCard.description}
            category={dogCard.category}
            dateCreated={dogCard.date_created}
            lat={dogCard.lat}
            long={dogCard.long}
            id={dogCard.id}
            key={dogCard.id}
            owner={dogCard.owner}
          />
        );
      });
    }

    if (filterZip) {
      // eslint-disable-next-line eqeqeq
      filteredResults = filteredResults.filter(
        (dogCard) => dogCard.zipcode === filterZipValue
      );
    }

    return filteredResults.map((dogCard) => {
      return (
        <DogTag
          name={dogCard.name}
          img={dogCard.image}
          description={dogCard.description}
          category={dogCard.category}
          dateCreated={dogCard.date_created}
          lat={dogCard.lat}
          long={dogCard.long}
          id={dogCard.id}
          key={dogCard.id}
          owner={dogCard.owner}
        />
      );
    });
  }

  // MAKES SURE THAT ZIPCODES DONT REPEAT

  function zipOptions() {
    const dogZips = dogTags.map((dog) => dog.zipcode);
    const newArray = dogZips.filter((elem, i, arr) => {
      if (arr.indexOf(elem) === i) {
        return elem;
      }

      return null;
    });

    return (
      <select className="zipCodes" name="category" onChange={filterByZip}>
        {newArray.map((dog) => {
          return (
            <option key={dog} value={dog}>
              {dog}
            </option>
          );
        })}
      </select>
    );
  }

  return (
    <div>
      <NavBar />

      <div className="findContainer">
        <div className="sidebar">
          <h2>Sort</h2>
          <div>
            <form className="dogSizeFilter">
              <label>Dog Size</label>
              <div>
                <input
                  type="radio"
                  name="size"
                  onChange={filterResults}
                  value="Small"
                  checked={filterName === "Small"}
                />
                <label htmlFor="small">Small</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="size"
                  onChange={filterResults}
                  value="Medium"
                  checked={filterName === "Medium"}
                />
                <label htmlFor="medium">Medium</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="size"
                  onChange={filterResults}
                  value="Large"
                  checked={filterName === "Large"}
                />
                <label htmlFor="large">Large</label>
              </div>
              <div>
                <input
                  type="button"
                  id="filterButton"
                  name="size"
                  onClick={clearFilter}
                  value="Clear"
                />
              </div>
            </form>
          </div>
          <div>
            {/* <label className="AreaCode">Area Code</label> */}
            {zipOptions()}
          </div>
          <div className="addPup">
            <Link to="/create">+ Add Pup</Link>
          </div>
        </div>

        <div className="map">
          <Map dogTags={dogTags} />
        </div>
      </div>

      <footer>&#169; EJ Gonzalez 2019</footer>
    </div>
  );
}
