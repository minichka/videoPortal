import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import VideoCardContainer from "./components/videoCardContainer";
import VideoListContainer from "./components/videoListContainer";
import NotFound from "./components/notFound";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={VideoListContainer}></Route>
        <Route path="/search" component={VideoListContainer}></Route>
        <Route
          path="/film/:id"
          render={props => (
            <VideoCardContainer videoID={props.match.params.id} {...props} />
          )}
          // component={VideoCardContainer}
        ></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  );
};
