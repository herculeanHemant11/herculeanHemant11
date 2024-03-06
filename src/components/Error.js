import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>
        {useRouteError().status} - {useRouteError().statusText}
      </h1>
      <p>Oops! It looks like you're lost in space.</p>
      <p>Let's get you back to the GalacticSips universe:</p>
      <Link to="/">Go to GalacticSips Home</Link>
    </div>
  );
};

export default Error;
