import './App.css';
import Header from "./header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ViewContainer from "./views/ViewContainer";
import AdminHeader from "./header/AdminHeader";
import AdminViewContainer from "./views/AdminViewContainer";
import LoginView from "./views/login-view/LoginView";

function AdminView() {
    return (
        <>
            <AdminHeader/>
            <AdminViewContainer/>
        </>
    )
}

function ClientView() {
    return (
        <>
            <Header/>
            <ViewContainer/>
        </>
    )
}

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/login'} element={<LoginView/>}/>
                <Route path={'/admin/*'} element={<AdminView/>}/>
                <Route path={'/*'} element={<ClientView/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
