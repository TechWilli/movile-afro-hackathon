import  React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"; 
import Home from './pages/Home/';
import Match from './pages/Match';
import Login from './pages/Login';
import CadastroMentor from './pages/CadastroMentor';
import CadastroMentorado from './pages/CadastroMentorado';
import MentorProfile from './pages/MentorProfile';

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/match" component={Match} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro-mentor" component={CadastroMentor} />
                <Route exact path="/cadastro-mentorado" component={CadastroMentorado} />
                <Route exact path="/perfil-mentor" component={MentorProfile} />
            </Switch>
        </BrowserRouter>
    ); 
}

export default Routes; 