import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import KanbanConstants from '../constants/KanbanConstants';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';
const BOARDID = 0;

const items = {
  currentFilterState: [
    {
      name: 'improvement',
      state: true,
    },
    {
      name: 'defect',
      state: true,
    },
  ],
  teams: {
    name: 'spoqa',
    boards: [
      {
        name: 'boardName',
        listOrder: [],
      },
    ],
  },
  lists: {},
  cards: {},
};

const createList = (text, boardID) => {
  const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(32);
  const list = {
    id,
    name: id + id,
    cardOrder: [],
  };

  items.lists[id] = list;
  items.teams.boards[boardID].listOrder.push(id);
};

const removeList = (target) => {
  const listHasTarget = items.teams.boards[0].listOrder;
  delete items.lists[target];
  listHasTarget.splice(listHasTarget.indexOf(target), 1);
};

const sortList = (order, target) => {
  items.teams.boards[target].listOrder = order;
};

const createCard = (text, filterName, listID) => {
  const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(32);

  const card = {
    id,
    title: text,
    completed: (+new Date()%2) ? true : false,
    type: filterName,
    content: id+id+id,
    birthTime: (+new Date()),
  };
  items.cards[id] = card;
  items.lists[listID].cardOrder.push(id);
};

const sortCard = (order, target) => {
  items.lists[target].cardOrder = order;
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
  let states;

  switch (action.actionType) {
  case KanbanConstants.LIST_CREATE :
    text = action.text.trim();
    if (text !== '') {
      createList(text, action.boardID);
      KanbanStore.emitChange();
    }
    break;
  case KanbanConstants.LIST_REMOVE :
    removeList(action.target);
    KanbanStore.emitChange();
    break;
  case KanbanConstants.LIST_SORT :
    sortList(action.order, action.target);
    KanbanStore.emitChange();
    break;
  case KanbanConstants.CARD_CREATE :
    text = action.text.trim();
    if (text !== '') {
      createCard(text, action.filterName, action.listID);
      KanbanStore.emitChange();
    }
    break;
  case KanbanConstants.CARD_SORT :
    sortCard(action.order, action.target);
    KanbanStore.emitChange();
    break;
  case KanbanConstants.SET_FILTER :
    states = items.currentFilterState;
    for (let i = 0; i < states.length; i++) {
      if (states[i].name === action.filterName) {
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
