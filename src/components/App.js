import UseProfil from '../components/UseProfil'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageNotFound from '../components/PageNotFound'


function App() {

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path='/user/:id'>
                        <UseProfil />
                    </Route>
                    <Route path='/'>
                        <PageNotFound />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
