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
import Workshop2 from './Components/Workshop2'
import Project from './Components/Project'
import Workshop1 from './Components/Workshop1'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Dropdown} from 'react-bootstrap'

//css
import './Styles/App.css'

//images
import tesseract from './Assets/tesseract.png'

function App() {
  return (
    <Router >
      <Container id="App">
          <Row className="row row-cols-2">
            <Col id="navigator"className="col-sm-2">
              <a href="https://visual-computing-unal-2020.github.io/VisualC2020/ "><img className="mx-auto d-block" src={tesseract} /></a>
              <h5 id="title"><p>Computacion Visual</p></h5>
              <hr/>
              <ul class="nav flex-column">
                <li class="nav-item">
                  <NavLink to="/" className="btn btn-block active">Inicio</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/team" className="btn btn-block" activeClassName="active">Integrantes</NavLink>
                </li>
                <li class="nav-item dropdown">
                    <NavLink to="/works" className="btn btn-block dropdown-toggle" data-toggle="dropdown" activeClassName="active">Talleres</NavLink>
                  <div id="talleresmenu"className="dropdown-menu btn-block">
                    <NavLink to="/workshop-1" className="btn btn-block"activeClassName="active">Taller # 1</NavLink>
                    <NavLink to="/workshop-2" className="btn btn-block"activeClassName="active">Taller # 2</NavLink>
                  </div>
 
                </li>
                <li class="nav-item">
                  <NavLink to="/project" className="btn btn-block" activeClassName="active">Proyecto</NavLink>
                </li>
              </ul>
            </Col>
            <Col id="fullcontent" className="col-sm-10">
              <Switch>
                <Route path="/" exact component={Start}></Route>
                <Route path="/team" exact component={Team}></Route>
                <Route path="/workshop-1" exact component={Workshop1}></Route>
                <Route path="/workshop-2" exact component={Workshop2}></Route>
                <Route path="/project" exact component={Project}></Route>
              </Switch>
            </Col>
          </Row>
          
      </Container>
    </Router>
  );
}

export default App;