
export const Storage = () =>{

    const saveData = (data) =>{
        localStorage.setItem('todoAppData', JSON.stringify(data));
    };

    const loadData = () =>{
        const data = localStorage.getItem('todoAppData');
        return data ? JSON.parse(data) : null;
    };

    return {saveData, loadData};
}