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
import {AddPostActionType, NewPostTextActionType, StoreType} from "./redux/state";


type AppPropsType = {
    store: StoreType
    dispatch: (action: AddPostActionType | NewPostTextActionType) => void

}


function App(props: AppPropsType) {
    const state = props.store.getState()

    return (

        <div className={'app-wrapper'}>
            <Header/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
                <Route path={"/dialogs"}
                       render={() => <Dialogs
                           state={state.dialogsPage}/>}/>
                <Route path={"/profile"}
                       render={() => <Profile dispatch={props.dispatch}
                                              profilePageState={state.profilePage}/>}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
            </div>


        </div>

    );
}


export default App
