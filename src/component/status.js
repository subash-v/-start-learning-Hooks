import React, { useState, useEffect } from "react";

export default function status() {
  const [isOnline, setIsOnline] = useState("offline");

  function handleStatusChange(status) {
    if (status === "online") {
      setIsOnline(status);
    } else setIsOnline(status);
  }

  return (
    <div>
      <p>You friend is {isOnline}</p>
      <button onClick={() => handleStatusChange("online")}>Online</button>
      <button onClick={() => handleStatusChange("offline")}>Offline</button>
    </div>
  );
}
