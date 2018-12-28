import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import BookList from './components/BookList/BookList';


const Root = () => (
    
    <Router>
        <React.Fragment>
            <Switch>
                <Route component={BookList} exact path="/"></Route>
            </Switch>
        </React.Fragment>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();


//Hot reloading - allows page to be updated without a full page reload
if (module.hot) {
    module.hot.accept();
}
