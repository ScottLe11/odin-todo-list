import { Project } from './project.js'

export const ProjectManager = () =>{

    let _projects = [Project("Home")];
    let _currentProjectIndex = 0;

    const add = (name) =>{
        const newProject = Project(name);
        _projects.push(newProject);
    };

    const getCurrentProject = () => {
        return _projects[_currentProjectIndex];
    };

    const getAll = ()=>{
        return[..._projects];
    };

    const setCurrentProject = (index) => {
        _currentProjectIndex = index;
    };

    return { add, getCurrentProject, setCurrentProject, getAll};
}