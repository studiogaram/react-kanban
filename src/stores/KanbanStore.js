import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import KanbanConstants from '../constants/KanbanConstants';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

var items = {
  "currentFilterState": [
    {
      "name": "improvement",
      "state": true
    },
    {
      "name": "defect",
      "state": true
    }
  ],
  "teams": {
    "name": "spoqa",
    "boards": [
      {
        "name": "boardName",
        "lists": {
        }
      }
    ]
  }
};

const createList = (text, boardID) => {
  const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(32);
  const list = {
    id,
    name: id+id,
    cards: {
    }
  };

  items.teams.boards[boardID].lists[id] = list;
  console.log(items);
};

const createCard = (text, listID) => {
  const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(32);
  const boardID=0;
  console.log(listID);
  const card = {
    id,
    title: id+id,
    completed: false,
    type: 'defect',
    content: id+id+id,
    birthTime: '04-14 12:48',
  };
  items.teams.boards[0].lists[listID].cards[id] = card;
};
const KanbanStore = assign({}, EventEmitter.prototype, {

  getAll() {
    return items;
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
});

AppDispatcher.register((action) => {
  let text;

  switch (action.actionType) {
  case KanbanConstants.LIST_CREATE :
    text = action.text.trim();
    if (text !== '') {
      createList(text, action.boardID);
      KanbanStore.emitChange();
    }
    break;
  case KanbanConstants.CARD_CREATE :
    text = action.text.trim();
    if (text !== '') {
      createCard(text, action.listID);
      KanbanStore.emitChange();
    }
    break;
  case KanbanConstants.SET_FILTER :
    let states = items.currentFilterState;
    for (let i = 0; i < states.length; i++) {
      if(states[i].name === action.filterName){
        states[i].state = !states[i].state;
      }
    }
    KanbanStore.emitChange();
    break;
  default:
    break;
  }
});

module.exports = KanbanStore;
