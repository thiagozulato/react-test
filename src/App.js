import React, { Component, Suspense } from 'react';
import routes from './Routes';
import { BrowserRouter } from 'react-router-dom';

const MasterLayout = React.lazy(() => import('./Layouts/MasterLayout'));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={null}>
          <MasterLayout route={routes} />
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;

// backup
// <Router>
//         <Route key="rootroute" path="/" render={props => {
//           return (
//             <Suspense fallback={null}>
//               <MasterLayout {...props} route={routes} />
//             </Suspense>
//           )
//         }} />
//       </Router>