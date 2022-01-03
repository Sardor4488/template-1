import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import MapGrid from "./mapgrid";
import Maplist from "./maplist";
import Searchmentors from "./searchmentors";
import BookingsMentee from "./bookingsmentee";
import MenteeDashboard from "./menteedashboard";
import Booking from "./booking";
import Checkout from "./checkout";
import BookingSuccess from "./bookingsuccess";
import Chatmentee from "./chatmentee";
import Favorites from "./favorites";
import Invoice from "./invoice";
import Changepassword from "./changepassword";
import Invoiceview from "./invoice-view";
import MenteeProfile from "./menteeprofile";
import ProfileSettingMentee from "./profilesettingmentee";
import Share from "./shareWebsite";
import { useSelector } from "react-redux";

const Menteeroute = ({ match }) => {
  const role = localStorage.getItem("role");

  if (role == "mentee") {
    return (
      <>
        <Switch>
          <Redirect
            exact
            from={`${match.url}/`}
            to={`${match.url}/mentor-profile`}
          />
          <Route
            path={`${match.url}/mentee-profile`}
            component={MenteeProfile}
          />
          <Route path={`${match.url}/map-list`} component={Maplist} />
          <Route path={`${match.url}/search/:id`} component={Searchmentors} />
          <Route
            path={`${match.url}/bookings-mentee`}
            component={BookingsMentee}
          />
          <Route path={`${match.url}/dashboard`} component={MenteeDashboard} />
          <Route path={`${match.url}/booking`} component={Booking} />
          <Route path={`${match.url}/checkout`} component={Checkout} />
          <Route
            path={`${match.url}/booking-success`}
            component={BookingSuccess}
          />
          <Route path={`${match.url}/chat-mentee`} component={Chatmentee} />
          <Route path={`${match.url}/share-friends`} component={Share} />
          <Route path={`${match.url}/invoices`} component={Invoice} />
          <Route path={`${match.url}/invoice-view`} component={Invoiceview} />
          <Route
            path={`${match.url}/profile-settings`}
            component={ProfileSettingMentee}
          />
          <Route path={`${match.url}/favourites`} component={Favorites} />
          <Route
            path={`${match.url}/change-password`}
            component={Changepassword}
          />
          <Route>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </>
    );
  } else {
    return (
      <Switch>
        <Route
          path={`${match.url}/search/:id`}
          component={Searchmentors}
        />
        <Route>
          <Redirect to="/404" />
        </Route>
      </Switch>
    );
  }
};
export default Menteeroute;
