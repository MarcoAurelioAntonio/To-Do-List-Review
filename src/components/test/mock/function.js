let id = 1;
const addBtn = (addText) => {
  const listArray = [];
  if (addText !== '') {
    const task = {
      description: `${addText}`,
      completed: false,
      index: id,
    };
    listArray.push(task);
    const tasks = localStorage.getItem('data')
      ? JSON.parse(localStorage.getItem('data'))
      : [];
    tasks.push(task);
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].index = i + 1;
    }
    localStorage.setItem('data', JSON.stringify(tasks));
  }
  id += 1;
  return listArray;
};

const deleteBtn = () => {
  const delBtn = document.createElement('button');
  if (delBtn) {
    /* const div = delBtn.parentElement.remove(); */
  }
  /* return div; */
};

export { deleteBtn };
export default addBtn;
