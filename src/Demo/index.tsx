import React, { FunctionComponent, useState } from "react";

export const Demo: FunctionComponent = () => {
  const [value, setValue] = useState(0);

  if (value > 0) {
    setValue(123);
  }

  return <div>{value}</div>;
};

Demo.propTypes = {};
