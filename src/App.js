import './App.css';
import Header from "./header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ViewContainer from "./views/client-views/ViewContainer";
import AdminHeader from "./header/AdminHeader";
import AdminViewContainer from "./views/admin-views/AdminViewContainer";
import LoginView from "./views/client-views/login-view/LoginView";

function AdminView() {
    return (
        <>
            <div className={'default-layout'}>
                <AdminHeader/>
                <AdminViewContainer/>
            </div>
        </>
    )
}

function ClientView() {
    return (
        <div className={'default-layout'}>
            <Header/>
            <ViewContainer/>
        </div>
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
