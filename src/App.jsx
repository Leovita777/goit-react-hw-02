// import React, { useEffect, useState } from "react";
// import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
// import Notification from "./components/Notification/Notification";
// import css from "./App.module.css";

function App() {
  const updateFeedbackCount = (feedbackType) => {
    console.log("feedbackType: ", feedbackType);
  };

  return (
    <div>
      <Options updateFeedbackCount={updateFeedbackCount} />
      <Feedback />
    </div>
  );
}

export default App;
