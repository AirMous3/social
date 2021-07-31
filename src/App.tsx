import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { RootStateType} from "./redux/state";



type AppPropsType = {
    appState: RootStateType
    addPost: (message: string) => void
    newPostText: (text: string) => void

}


function App(props: AppPropsType) {
    return (

            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Route path={"/dialogs"}
                           render={() => <Dialogs
                               state={props.appState.dialogsPage}/>}/>
                    <Route path={"/profile"}
                           render={() => <Profile addPost={props.addPost}
                               profilePageState={props.appState.profilePage} newPostText={props.newPostText}/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                </div>


            </div>

    );
}


export default App
