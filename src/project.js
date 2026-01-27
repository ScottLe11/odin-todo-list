export const Project = (projectName) => {
  let _todoList = [];
  //let currProject =  projectName;

  const getName = () => projectName;

  const add = (newtoDo) => {
    _todoList.push(newtoDo);
  };

  const remove = (index) => {
    _todoList.splice(index, 1);
  };

  const getAll = () => {
    return [..._todoList];
  };

  return { getName, add, remove, getAll };
};
