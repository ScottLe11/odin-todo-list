import { Project } from './project.js'

export const ProjectManager = () =>{

    let _projects = [];
    let _currentProjectIndex = 0;

    const add = (name) =>{
        const newProject = Project(name);
        _projects.push(newProject);
    };
    add("Home");

    const reset = () =>{
        _projects = [];
        _currentProjectIndex = 0;
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

    return { add, getCurrentProject, setCurrentProject, getAll, reset};
}