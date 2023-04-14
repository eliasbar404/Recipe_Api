import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
    <form className='flex'>
        {/* select catetory */}
        <FormControl sx={{ m: 0, minWidth: 150 ,maxHeight:50}}>
            <Select className='tablet:hidden' value={age} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                <MenuItem value="">
                    <em>All</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>

        <input type="text" name="" id="" placeholder='I am Searching for....' className='h-[55px] w-[300px] rounded-sm'/>

        <button className='bg-[#f97316] h-[55px] px-3  rounded-sm' type="submit">
            <SearchIcon className='text-slate-200 font-bold' fontSize='large'/>
        </button>

    </form>
)
}

export default Search;