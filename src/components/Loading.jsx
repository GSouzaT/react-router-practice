import * as React from "react";

function Delayed({ children, wait = 500 }) {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const delay = window.setTimeout(() => {
      setShow(true);
    }, wait);

    return () => window.clearTimeout(delay);
  });

  return show === true ? children : null;
}

export default function Loading() {
  return (
    <Delayed>
      <div className="loading center" />
    </Delayed>
  );
}
