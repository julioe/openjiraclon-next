import { DragEvent, FC, useContext, useMemo } from 'react';
import { Paper, List } from '@mui/material';

import { UIContext } from '../../context/ui';
import { EntriesContext } from '../../context/entries';

import { EntryStatus } from '../../interfaces';
import { EntryCard } from '.';

import styles from './EntryList.module.css';


interface Props {
  status: EntryStatus;
}

export const EntryList:FC<Props> = ({ status }) => {

  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDraging } = useContext( UIContext );

      //useMemo lo utilizamos para renderizar solo cunado cambian las entradas 
  const entriesByStatus = useMemo(() => entries.filter( entry => entry.status === status ), [entries]); 
  
  const allowDrop = ( event: DragEvent<HTMLDivElement> ) => { 
          event.preventDefault();
                  
  }
  const onDropEntry = ( event: DragEvent<HTMLDivElement> ) => { 
        const id = event.dataTransfer.getData('text');
        const entry = entries.find( e => e._id === id )!; //signo de admiración para decirle a typescript siempre va a tener un valor
        entry.status = status;
        updateEntry( entry );
        endDraging();
      }
  
    return (
// Todo: Aqui haremos drop

    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={ isDragging ? styles.dragging: ''}
    >
      <Paper sx={{height: 'calc(100vh - 180px)',
      overflow:'auto',
      backgroundColor: 'transparent', padding:'3px 8px'}} >
        {/* Todo: cambiara dependiendo si estoy haciendo drag o no */}
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>   
                {
                  entriesByStatus.map( entry => (
                    <EntryCard key={entry._id} entry={entry} />
                  ))
                }
         </List>
      </Paper>
    </div>
  )
}
