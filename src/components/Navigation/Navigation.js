import React from "react";

const Navigation = ({ onRouteChange, isSignedIn, currentRoute }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signout")}
          className="f3 link dim black underlined pa3 pointer ma5 mt2 br-pill shadow-5 b ba b--solid bw2"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        {currentRoute === "signin" ? (
          <p
            onClick={() => onRouteChange("register")}
            className="f3 link dim black underlined pa3 pointer ma5 mt2 br-pill shadow-5 b ba b--solid bw2"
          >
            Register
          </p>
        ) : (
          <p
            onClick={() => onRouteChange("signin")}
            className="f3 link dim black underlined pa3 pointer ma5 mt2 br-pill shadow-5 b ba b--solid bw2"
          >
            Sign In
          </p>
        )}
      </nav>
    );
  }
};

export default Navigation;
