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

      <div
        className="vh-95 p-5 d-flex flex-row"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="mx-2 w-25 h-100">
          <h2
            style={{
              fontSize: "3rem",
              color: "#c23a57",
              textDecoration: "underline",
              textUnderlineOffset: 20,
              marginBottom: 40,
            }}
          >
            Sort
          </h2>

          <div>
            <form className="w-100 p-2 d-flex flex-column">
              <div>
                <input
                  type="radio"
                  name="size"
                  className="me-2"
                  onChange={filterResults}
                  value="Small"
                  checked={filterName === "Small"}
                />
                <label>Small</label>
              </div>

              <div className="mt-2">
                <input
                  type="radio"
                  name="size"
                  className="me-2"
                  onChange={filterResults}
                  value="Medium"
                  checked={filterName === "Medium"}
                />
                <label htmlFor="medium">Medium</label>
              </div>

              <div className="my-2">
                <input
                  type="radio"
                  name="size"
                  className="me-2"
                  onChange={filterResults}
                  value="Large"
                  checked={filterName === "Large"}
                />
                <label htmlFor="large">Large</label>
              </div>

              <div className="mt-2 d-flex flex-column">
                <label className="mb-1" style={{ fontWeight: "600" }}>
                  Zipcode
                </label>
                <input type="text" placeholder="ex. 90250" className="w-50" />
              </div>

              <div className="mt-2">
                <input
                  type="button"
                  id="filterButton"
                  name="size"
                  className="w-50 btn btn-primary"
                  onClick={clearFilter}
                  value="Clear"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="w-100 h-100">
          <Map dogTags={dogTags} />
        </div>
      </div>

      <footer>&#169; EJ Gonzalez 2019</footer>
    </div>
  );
}
