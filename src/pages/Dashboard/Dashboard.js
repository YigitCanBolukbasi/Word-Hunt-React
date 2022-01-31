import React from "react";

import UserStats from "../../components/UserStats/UserStats";
import Footer from "../../components/Footer/Footer";
import Games from "../../components/Games/Games";
import Translate from "../../components/Translate/Translate";

function Dashboard() {
  return (
    <body>
      <Translate />
      <Games />
      <UserStats />
      <Footer />
    </body>
  );
}

export default Dashboard;
