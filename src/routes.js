import  React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"; 
import Home from './pages/Home/';
import Match from './pages/Match';
import Login from './pages/Login';
import CadastroMentor from './pages/CadastroMentor';
import CadastroMentor2 from './pages/CadastroMentor/CadatstroMentor2';
import CadastroMentor3 from './pages/CadastroMentor/CadatstroMentor3';
import CadastroMentor4 from './pages/CadastroMentor/CadatstroMentor4';
import CadastroMentorado from './pages/CadastroMentorado';

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/match" component={Match} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro-mentor" component={CadastroMentor} />
                <Route exact path="/cadastro-mentorado" component={CadastroMentorado} />
                <Route exact path="/cadastro-mentor-2" component={CadastroMentor2} />
                <Route exact path="/cadastro-mentor-3" component={CadastroMentor3} />
                <Route exact path="/cadastro-mentor-4" component={CadastroMentor4} />
            </Switch>
        </BrowserRouter>
    ); 
}

export default Routes; 