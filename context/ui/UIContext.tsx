import { createContext } from 'react'


interface ContextProps {
  //Propiedades
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean

  //Methods
  openSideMenu: () => void;
  closeSideMenu: () => void;

  setAddingEntry: (isAdding: boolean) => void;
  
  endDraging: () => void;
  startDraging: () => void;
}


export const UIContext = createContext({} as ContextProps );