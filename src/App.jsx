import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  NavLink
} from "react-router-dom";

//components
import Start from './Components/Start'
import Team from './Components/Team'
import Works from './Components/Works'
import Project from './Components/Project'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col} from 'react-bootstrap'

//css
import './App.css'

//images
import tesseract from './Assets/tesseract.png'

function App() {
  return (
    <Router >
      <Container id="App">
          <Row className="row row-cols-2">
            <Col id="navigator"className="col-sm-2">
              <img className="mx-auto d-block" src={tesseract} />
              <h5 id="title"><p>Computacion Visual</p></h5>
              <hr/>
              <ul class="nav flex-column">
                <li class="nav-item">
                  <NavLink to="/" className="btn btn-block active">Inicio</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/team" className="btn btn-block" activeClassName="active">Integrantes</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/works" className="btn btn-block" activeClassName="active">Trabajos</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/project" className="btn btn-block" activeClassName="active">Proyecto</NavLink>
                </li>
              </ul>
            </Col>
            <Col id="fullcontent" className="col-sm-10">
              <Switch>
                <Route path="/" exact>
                  <Start/>
                </Route>
                <Route path="/team" exact>
                  <Team/>
                </Route>
                <Route path="/works" exact>
                  <Works/>
                </Route>
                <Route path="/project" exact>
                  <Project/>
                </Route>
              </Switch>
            </Col>
          </Row>
          
      </Container>
    </Router>
  );
}

export default App;
