import React from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Remove = ({toggle}) => {
    return (
    <div className='cursor-pointer' onClick={toggle}>
        <HighlightOffIcon fontSize='large' className='w-[50px] h-[50px]'/>
    </div>
)
}

export default Remove