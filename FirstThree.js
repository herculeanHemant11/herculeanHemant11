import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "!!! Stranger Things happen to Strangers !!!"
);

const headingJSX = (
  <h1>
    A JSX heading. This is HTML like code but not an html. This js JS. Babel
    will convert it into browser readable Code.
  </h1>
);

const Title = () => {
  return <h1>This is a Functional Component</h1>;
};

const HeadingComponent = () => {
  return (
    <div>
      {/* We can easily write Js in these {} braces */}
      {heading}
      {/*3 Types to call a Component */}

      <Title />
      <Title></Title>
      {Title()}
      <p>You can easily works with Functional Component</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
