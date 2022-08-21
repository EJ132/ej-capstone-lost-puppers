import React from "react";

import PupApiService from "../../services/thing-api-service";
import TokenService from "../../services/token-service";
import DogTag from "../LostDogs/Dogtag";
import NavigationBar from "../NavigationBar/NavigationBar";

import "./Profile.css";

export default function Profile() {
  const [user, setUser] = React.useState(null);
  const [userPost, setUserPost] = React.useState(null);

  // FILTERS ONLY TO THE CARDS NEEDED(OWNED BY USER)
  const setCards = React.useCallback(() => {
    return PupApiService.getpups().then((resJSON) => {
      // eslint-disable-next-line array-callback-return, consistent-return
      const userPups = resJSON.filter((dog) => {
        if (dog.owner === user.id) {
          return dog;
        }
      });

      setUserPost(userPups);
    });
  }, [user]);

  // FETCHES THE CARDS AND USER
  React.useEffect(() => {
    PupApiService.getProfile().then((resJSON) => {
      setUser(resJSON);

      TokenService.saveUserId(user.id);
      setCards();
    });
  }, [setCards, user]);

  return (
    <div>
      <NavigationBar />
      <div className="profile_page">
        <div className="profile">
          <h2>WELCOME</h2>
          <h3>{user.fullname}</h3>
        </div>

        <div className="Post">
          <h2 id="yourPost">Your Posts ({userPost.length})</h2>
          <div className="userPosts">
            {userPost.map((dogCard) => {
              return (
                <DogTag
                  name={dogCard.name}
                  img={dogCard.image}
                  description={dogCard.description}
                  category={dogCard.category}
                  dateCreated={dogCard.date_created}
                  id={dogCard.id}
                  key={dogCard.id}
                  owner={dogCard.owner}
                />
              );
            })}
          </div>
        </div>
      </div>

      <footer>&#169; EJ Gonzalez 2019</footer>
    </div>
  );
}
