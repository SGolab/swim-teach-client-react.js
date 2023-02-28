import {Route, Routes} from "react-router-dom";
import IndexView from "./index-view/IndexView";
import SkillTreeView from "./skill-tree-view/SkillTreeView";
import LessonHistoryView from "./lesson-history-view/LessonHistoryView";
import NotFoundView from "./not-found-view/NotFoundView";
import HomeworkView from "./homework-view/HomeworkView";
import UserDetailsView from "./user-details-view/UserDetailsView";
import ChangePasswordView from "./change-password-view/ChangePasswordView";

function ViewContainer() {

    return (
        <div className='view-container'>
            <Routes>
                <Route exact path='/' element={<IndexView/>}/>
                <Route path='skillTree' element={<SkillTreeView/>}></Route>
                <Route path='skillTree/:skillDetailsId' element={<SkillTreeView/>}></Route>
                <Route path='lessonHistory' element={<LessonHistoryView/>}></Route>
                <Route path='homework' element={<HomeworkView/>}></Route>
                <Route path='homework/:homeworkId' element={<HomeworkView/>}></Route>
                <Route path='userDetails' element={<UserDetailsView/>}></Route>
                <Route path='changePassword' element={<ChangePasswordView/>}></Route>
                <Route path='*' element={<NotFoundView/>}></Route>
            </Routes>
        </div>
    )

}

export default ViewContainer;