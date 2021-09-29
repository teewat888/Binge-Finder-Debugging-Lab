import React from "react";

const Episode = (props) => {
  let { eachEpisode } = props;

  console.log("my episode->  ", eachEpisode);

  return (
    <div>
      Episode {eachEpisode.number} - {eachEpisode.name}
    </div>
  );
};

export default Episode;
