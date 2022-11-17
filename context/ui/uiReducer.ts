  import { UIState } from './'

  type UIActionType = 
    | { type: 'UI - Open Sidebar'}
    | { type: 'UI - Close Sidebar'}
    | { type: 'UI - Set isAddingEntry', payload: boolean}
    | { type: 'UI - Start Dragging' }
    | { type: 'UI - End Dragging' }
    
  export const uiReducer = (state: UIState, action: UIActionType): UIState => {

      switch (action.type) {
        case 'UI - Open Sidebar':
          return {
            ...state,
            sidemenuOpen: true,
          }
          case 'UI - Close Sidebar':
            return {
              ...state,
              sidemenuOpen: false,
            }
      case 'UI - Set isAddingEntry':
        return {
          ...state,
          isAddingEntry: action.payload
        }
      case 'UI - Start Dragging':
        return {
          ...state,
          isDragging: true
        }
      case 'UI - End Dragging':
        return {
          ...state,
          isDragging: false
        }


        default:
          return state;
      }
  }


// 1o crea,os el action type ej: | {type: 'UI - Set isAddingEntry'}  y recive un payload
//2o DEfinirlo en el state export interface UIState { ... isAddingEntry: boolean;  
// 3o valor por defevto ej: const UI_INITIAL_STATE: UIState = { ...   isAddingEntry: false,
// 4o ahora se puede poner en el reducer ej:  isAddingEntry: action.payload
// 5o en el Context poner la nueva propiedad ej:  isAddingEntry: boolean
//6o Tengo que hacer una funcion para hacer ese cambio ej: const setAddingEntry = (isAdding: boolean) => {
// 7o se agrega el metodo añ context ej <UIContext.Provider value={{ ... setAddingEntry
// 8o Adicionar al context props ej: setAddingEntry: (isAdding: boolean) => void;