import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import TVShow from "./TVShow";

class TVShowList extends Component {
  mapAllShows = () => {
    if (!!this.props.searchTerm) {
      return this.props.shows.map((s) => {
        if (s.name.toLowerCase().includes(this.props.searchTerm)) {
          console.log("showsc list after put search term ", s.name);
          return (
            <TVShow show={s} key={s.id} selectShow={this.props.selectShow} />
          );
        }
      });
    } else {
      return this.props.shows.map((s) => (
        <TVShow show={s} key={s.id} selectShow={this.props.selectShow} />
      ));
    }
  };

  render() {
    return (
      <div className="TVShowList">
        <Grid>{this.mapAllShows()}</Grid>
      </div>
    );
  }
}

export default TVShowList;
