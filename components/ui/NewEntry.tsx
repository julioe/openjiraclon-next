import { ChangeEvent, useContext, useState } from 'react';

import { Box, Button, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import AddCommentIcon from '@mui/icons-material/AddComment';

import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui/UIContext';

// sx = extra style


export const NewEntry = () => {
  
  const { addNewEntry   } = useContext( EntriesContext );
  const {isAddingEntry, setAddingEntry} = useContext(UIContext)
    
  // const [isAdding, setIsAdding] = useState(false); refactorizacion


    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const onTextFieldCnahge = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue( event.target.value );
    };

    const onSave = ( ) => { ;
        if (inputValue.length === 0) return;
          addNewEntry(inputValue);
          setAddingEntry( false );
          setTouched( false );
          setInputValue('');
    }

  return (
    <Box sx={{marginBottom: 2, paddingX: 1 }}>
        {
          isAddingEntry 
          ? (
                <>
                  <TextField 
                    fullWidth
                    sx={{ marginTop: 2, marginBottom: 1}}
                    placeholder='Nueva Entrada'
                    autoFocus
                    multiline
                    label='Nueva entrada'
                    helperText={ inputValue.length <= 0 && touched && 'Ingrese un valor'}
                    error= {inputValue.length <= 0 && touched}
                    value={ inputValue }
                    onChange={ onTextFieldCnahge }
                    onBlur={ () => setTouched(true) }
                  />
                  <Box display='flex' justifyContent='space-between' >
                    <Button
                     color='secondary' 
                    endIcon={ <CancelPresentationIcon />}
                    onClick={() => setAddingEntry(false) }
                    >
                      Cancelar
                    </Button>
                    <Button
                    variant='outlined'
                    color='secondary' 
                    endIcon={ <SaveIcon />}
                    onClick={ onSave }
                    >
                      Guardar
                    </Button>
                
                  </Box>
                </>
          ) : (
            <Button
              startIcon={<AddCommentIcon/>}
              fullWidth
              variant='outlined'
              onClick={() => setAddingEntry(true) }
            >
                  Agregar tarea
            </Button>

          )
        }


    </Box>
  )
}
