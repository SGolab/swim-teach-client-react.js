import {Route, Routes} from "react-router-dom";
import AdminView from "./admin-view/AdminView";

function AdminViewContainer() {

    return (
        <div className='view-container'>
            <Routes>
                <Route exact path='/' element={<AdminView/>}/>
                <Route path='swimmers/:swimmerId/skillTree' element={<h1>TODO IMPLEMENT swimmer with id skillTree</h1>}></Route>
                <Route path='swimmers/:swimmerId/lessonHistory' element={<h1>TODO IMPLEMENT swimmer with id lesson history</h1>}></Route>
                <Route path='swimmers/:swimmerId/createLesson' element={<h1>TODO IMPLEMENT create lesson</h1>}></Route>
            </Routes>
        </div>
    )

}

export default AdminViewContainer;