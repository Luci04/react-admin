import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Topbar } from "./screen/global/Topbar";
// import { Sidebar } from "./screen/global/Sidebar";
import { Dashboard } from './screen/dashboard'
// import Team from './screen/team'
// import Invoices from './screen/invoices'
// import Contact from './screen/contact'
// import Bar from './screen/bar'
// import Form from './screen/form'
// import Line from './screen/line'
// import Pie from './screen/pie'
// import FAQ from './screen/faq'
// import Geography from './screen/geography'
// import Calendar from './screen/calendar'

import { Route, Routes } from "react-router-dom";




function App() {

  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <div className="app">

          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={Dashboard} />
              {/* <Route path="/team" element={Team} /> */}
              {/* <Route path="/contact" element={Contact} /> */}
              {/* <Route path="/invoices" element={Invoices} /> */}
              {/* <Route path="/form" element={Form} /> */}
              {/* <Route path="/bar" element={Bar} /> */}
              {/* <Route path="/pie" element={Pie} /> */}
              {/* <Route path="/line" element={Line} /> */}
              {/* <Route path="/faq" element={FAQ} /> */}
              {/* <Route path="/calendar" element={Calendar} /> */}
              {/* <Route path="/geography" element={Geography} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
