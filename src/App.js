import './App.css';
import Header from "./header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ViewContainer from "./views/ViewContainer";
import SkillTreeView from "./views/SkillTreeView";
import NotFoundView from "./views/NotFoundView";
import LessonHistoryView from "./views/lesson-history-view/LessonHistoryView";
import OptionsView from "./views/options-view/OptionsView";
import LoginView from "./views/LoginView";

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <ViewContainer>
                <Routes>
                    <Route path='login' element={<LoginView/>}/>
                    <Route path='skillTree' element={<SkillTreeView/>}></Route>
                    <Route path='lessonHistory' element={<LessonHistoryView/>}></Route>
                    <Route path='options' element={<OptionsView/>}></Route>
                    <Route path='*' element={<NotFoundView/>}></Route>
                </Routes>
            </ViewContainer>
        </BrowserRouter>
    );
}

export default App;
