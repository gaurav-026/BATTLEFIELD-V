import { BrowserRouter, Route, Routes } from "react-router-dom";
import BattlefieldV from "./pages/BattlefieldV";
import Dashboard from "./pages/Dashboard";
import Battlefield4 from "./pages/Battlefield4";
import Battlefield1 from "./pages/Battlefield1";
import BattlefieldHardline from "./pages/BattlefieldHardline";
import Career from "./pages/Career";
import Watch from "./pages/Watch";
import News from "./pages/News";
import Help from "./pages/Help";
import Logout from "./pages/Logout";
import ServerBrowser from "./pages/ServerBrowser";
import ServerInfo from "./pages/ServerInfo";
import QuickMatch from "./pages/QuickMatch";
import SquadJoin from "./pages/SquadJoin";
import TestRange from "./pages/TestRange";
import Campaign from "./pages/Campaign";



function App() {
  return (
    <>
      <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route index element={<BattlefieldV />} />
              <Route path="/category/battlefield4" element={<Battlefield4 />} />
              <Route path="/category/battlefield5" element={<BattlefieldV />} />
              <Route path="/category/battlefield1" element={<Battlefield1 />} />
              <Route path="/category/battlefield-hardline" element={<BattlefieldHardline />} />
              <Route path="/category/career" element={<Career />} />
              <Route path="/category/watch" element={<Watch />} />
              <Route path="/category/news" element={<News />} />
              <Route path="/category/help" element={<Help />} />
              
              <Route path="/server-browser" element={<ServerBrowser />} />
              <Route path="/server-info" element={<ServerInfo />} />
              <Route path="/battlefield4/quick-match" element={<QuickMatch />} />
            </Route>
          
          </Routes>
          <Routes>
          <Route path="/category/logout" element={<Logout />} />
          <Route path="/test-range" element={<TestRange />} />
          <Route path="/campaign" element={<Campaign />} />
          
          <Route path="/battlefield4/squad-join" element={<SquadJoin />} />
          </Routes>
      

      </BrowserRouter>
    </>
  );
}

export default App;
