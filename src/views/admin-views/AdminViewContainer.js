import {Route, Routes} from "react-router-dom";
import AdminIndexView from "./admin-index-view/AdminIndexView";
import UserDetailsView from "../client-views/user-details-view/UserDetailsView";
import AdminCreateLessonView from "./admin-create-lesson-view/AdminCreateLessonView";

function AdminViewContainer() {

    return (
        <div className='view-container'>
            <Routes>
                <Route exact path='' element={<AdminIndexView/>}/>
                <Route path='userDetails' element={<UserDetailsView/>}></Route>
                <Route path='swimmers/:swimmerId/skillTree' element={<h1>TODO IMPLEMENT swimmer with id skillTree</h1>}></Route>
                <Route path='swimmers/:swimmerId/lessonHistory' element={<h1>TODO IMPLEMENT swimmer with id lesson history</h1>}></Route>
                <Route path='swimmers/:swimmerId/createLesson' element={<AdminCreateLessonView/>}></Route>
            </Routes>
        </div>
    )

}

export default AdminViewContainer;