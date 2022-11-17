import { FC, PropsWithChildren, useReducer } from 'react';
import { UIContext, uiReducer } from './';


export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = { 
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
}

export const UIProvider:FC<PropsWithChildren> = ({children}) => {
const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE,);
   const openSideMenu = () => {
        dispatch({type: 'UI - Open Sidebar'});
      }
   const closeSideMenu = () => {
    dispatch({type: 'UI - Close Sidebar'});
   }   

   const setAddingEntry = (isAdding: boolean) => {
    dispatch({type: 'UI - Set isAddingEntry', payload: isAdding});
   }

    const startDraging = () => { 
      dispatch({type: 'UI - Start Dragging'});
    }
    const endDraging = () => { 
      dispatch({type: 'UI - End Dragging'});
    }

  return (
    <UIContext.Provider value={{
      ...state,

      //Methods
      openSideMenu,
      closeSideMenu,
      
      setAddingEntry,
      
      endDraging,
      startDraging,
    }}>
        {children}
    </UIContext.Provider>
  )
}