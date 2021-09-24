import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from "./components/Dialogs/DialogsContainer";
import HeaderContainer from './components/Header/HeaderContainer';
import { Login } from './components/Login/Login';
import Music from "./components/Music/Music";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from "./components/Settings/Settings";
import UsersApiComponent from "./components/Users/UsersContainer";





function App() {


    return (

        <div className={'app-wrapper'}>
            <HeaderContainer />
            <NavBar />
            <div className={'app-wrapper-content'}>
                <Route path={"/dialogs"}
                    render={() => <Dialogs />
                    } />
                <Route path={"/profile/:userId?"}
                    render={() => <ProfileContainer />
                    } />

                <Route path={"/news"} render={() => <News />} />
                <Route path={"/music"} render={() => <Music />} />
                <Route path={"/settings"} render={() => <Settings />} />
                <Route path={"/users"} render={() => <UsersApiComponent />} />
                <Route path={"/login"} render={() => <Login />} />
            </div>


        </div>

    );
}


export default App
