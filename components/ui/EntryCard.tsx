import { DragEvent, FC, useContext } from 'react';
import { Card, CardActionArea, Typography, CardContent, CardActions } from '@mui/material';

import { UIContext } from '../../context/ui/UIContext';
import { Entry } from '../../interfaces';

interface Props {
    entry: Entry
}

export const EntryCard:FC<Props> = ({entry}) => {

    const {startDraging, endDraging} = useContext(UIContext)
        
    const onDragStart = ( event: DragEvent ) => { 
            event.dataTransfer.setData('text', entry._id)
      // todo: modificar el estado para saber donde estoy haciendo drag
      startDraging();
          
    }
    const onDragEnd = ( ) => { 
            //todo: cancelar el drag
            endDraging();
        }


  return (
    <Card
    sx={{marginBottom: 1}}
      draggable  // Eventos de drag}
      onDragStart={onDragStart} 
      onDragEnd={onDragEnd}
    >
        <CardActionArea>
          <CardContent>
            <Typography sx={{whiteSpace: 'pre-line'}}>{ entry.description}</Typography>
          </CardContent>
          
          <CardActions sx={{display: 'flex', justifyContent: 'end', paddingRight: 2}}>
            <Typography variant='body2'>hace 30 minutos</Typography>
          </CardActions>
        </CardActionArea>
      </Card>
    )
  };
