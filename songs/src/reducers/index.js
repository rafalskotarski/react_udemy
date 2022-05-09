import { combinedReducers, combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Smells Like Teen Spirit",
      duration: "5:01",
    },
    {
      title: "In Bloom",
      duration: "4:11",
    },
    {
      title: "Come as You Are",
      duration: "3:38",
    },
    {
      title: "Breed",
      duration: "3:03",
    },
    {
      title: "Lithium",
      duration: "4:17",
    },
    {
      title: "Something in the Way",
      duration: "3:52",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
