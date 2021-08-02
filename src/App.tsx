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
import {appStoreType} from "./redux/reduxStore";
import {Dispatch, Store} from "redux";


type AppPropsType = {
    store: Store & appStoreType
    dispatch: Dispatch


}


function App(props: AppPropsType) {


    return (

        <div className={'app-wrapper'}>
            <Header/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
                <Route path={"/dialogs"}
                       render={() => <Dialogs
                           store={props.store.dialogsPage} dispatch={props.dispatch} />
                       }/>
                <Route path={"/profile"}
                       render={() => <Profile store={props.store} dispatch={props.dispatch}/>
                       }/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
            </div>


        </div>

    );
}


export default App
