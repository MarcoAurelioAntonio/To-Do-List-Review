/** * @jest-environment jsdom */
import addBtn, { deleteBtn } from './mock/function.js';

describe('Check if toDo is Added', () => {
  test('Adding a task', () => {
    expect(addBtn('Hi my name is Gustavo')).toEqual([
      { description: 'Hi my name is Gustavo', completed: false, index: 1 },
    ]);
    expect(addBtn('222222')).toEqual([
      { description: '222222', completed: false, index: 2 },
    ]);
    expect(addBtn('')).toEqual([]);
  });

  test('Deleting a task', () => {
    document.body.innerHTML = `
    <div id="1" class="divCont">
      <input type="checkbox" id="1" class="check">
      <input type="text" readonly="readOnly" class="descrption">
      <button id="1" class="tooltip">⁝</button>
      <button class="delete-btn" id="1">🗑️</button>
    </div>`;

    /* require('./mock/function.js'); */

    const div = document.getElementById('1');
    div.remove();

    expect(deleteBtn('🗑️')).toBeNull();
  });
});

/* '🗑️' */
