import {Route, Routes} from "react-router-dom";
import AdminIndexView from "./admin-index-view/AdminIndexView";
import UserDetailsView from "../client-views/user-details-view/UserDetailsView";
import AdminCreateLessonView from "./admin-create-lesson-view/AdminCreateLessonView";
import AdminLessonHistoryView from "./admin-lesson-history-view/AdminLessonHistoryView";
import AdminSkillTreeView from "./admin-skill-tree-view/AdminSkillTreeView";
import AdminSwimmerDetailsView from "./admin-user-details-view/AdminSwimmerDetailsView";
import AdminCreateNewSwimmerView from "./admin-create-new-swimmer-view/AdminCreateNewSwimmerView";

function AdminViewContainer() {

    return (
        <div className='view-container'>
            <Routes>
                <Route exact path='' element={<AdminIndexView/>}/>
                <Route path='userDetails' element={<UserDetailsView/>}></Route>
                <Route path='swimmers/:swimmerId/skillTree' element={<AdminSkillTreeView/>}></Route>
                <Route path='swimmers/:swimmerId/skillTree/:skillDetailsId' element={<AdminSkillTreeView/>}></Route>
                <Route path='swimmers/:swimmerId/lessonHistory' element={<AdminLessonHistoryView/>}></Route>
                <Route path='swimmers/:swimmerId/createLesson' element={<AdminCreateLessonView/>}></Route>
                <Route path='swimmers/:swimmerId/details' element={<AdminSwimmerDetailsView/>}></Route>
                <Route path='swimmers/new' element={<AdminCreateNewSwimmerView/>}></Route>
            </Routes>
        </div>
    )

}

export default AdminViewContainer;