import React from 'react';
import {useState} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Paper, IconButton} from '@mui/material';
import {Search} from '@mui/icons-material';

const SearchBar = () => {
    
  return (
    <Paper
    component="form"
    onSubmit={()=> {}}
    sx={{
        float:"right",
        borderRadius:20,
        border:"1px solid #e3e3e3",
        pl:2,
        bodxShadow:'none',
        mr:{sm:5}
    }}>SearchBar
    <input
    className='search-bar'
    placeholder='Search...'
    value=""
    onChange={(e) => {}}
  />
        <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar