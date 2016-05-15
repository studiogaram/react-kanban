import AppDispatcher from '../dispatcher/AppDispatcher';
import KanbanConstants from '../constants/KanbanConstants';

const KanbanActions = {
  createList(text, boardID) {
    AppDispatcher.dispatch({
      actionType: KanbanConstants.LIST_CREATE,
      boardID,
      text,
    });
  },
  removeList(target) {
    AppDispatcher.dispatch({
      actionType: KanbanConstants.LIST_REMOVE,
      target,
    });
  },
  sortList(order, target) {
    AppDispatcher.dispatch({
      actionType: KanbanConstants.LIST_SORT,
      target,
      order,
    });
  },
  createCard(text, listID) {
    AppDispatcher.dispatch({
      actionType: KanbanConstants.CARD_CREATE,
      listID,
      text,
    });
  },
  sortCard(order, target) {
    AppDispatcher.dispatch({
      actionType: KanbanConstants.CARD_SORT,
      target,
      order,
    });
  },
  toggleFilter(filterName) {
    AppDispatcher.dispatch({
      actionType: KanbanConstants.SET_FILTER,
      filterName,
    });
  },
};

module.exports = KanbanActions;
