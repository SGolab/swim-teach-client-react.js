import {Route, Routes} from "react-router-dom";
import IndexView from "./index-view/IndexView";
import LoginView from "./login-view/LoginView";
import SkillTreeView from "./skill-tree-view/SkillTreeView";
import LessonHistoryView from "./lesson-history-view/LessonHistoryView";
import OptionsView from "./options-view/OptionsView";
import NotFoundView from "./not-found-view/NotFoundView";

function ViewContainer() {

    return (
        <div className='view-container'>
            <Routes>
                <Route exact path='/' element={<IndexView/>}/>
                <Route path='skillTree' element={<SkillTreeView/>}></Route>
                <Route path='skillTree/:skillDetailsId' element={<SkillTreeView/>}></Route>
                <Route path='lessonHistory' element={<LessonHistoryView/>}></Route>
                <Route path='options' element={<OptionsView/>}></Route>
                <Route path='*' element={<NotFoundView/>}></Route>
            </Routes>
        </div>
    )

}

export default ViewContainer;