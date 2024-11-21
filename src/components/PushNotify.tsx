import React from "react";

const PushNotify: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="push-notify">{children}</div>;
};

export default PushNotify;
