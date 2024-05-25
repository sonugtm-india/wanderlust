import styled from '@emotion/styled';
import { InputBase, Box, ListItem, List, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
import {Link} from 'react-router-dom';

const SearchContainer = styled(Box)`
  background-color: white;
  width: 38%;
  border-radius: 2px;
  display: flex;
  font-size: 10px;
  margin-left: 20px;
`;

const SearchInputBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
`;

const SearchIconWrapper = styled(Box)`
  color: #2874f0;
  padding: 5px;
  display: flex;
`;

const ListWrapper = styled(List)`
   position: absolute;
   background:#FFFFFF;
   color:black;
   margin-top:36px;
   width:31%;

`
const Search = () => {
  const [text, setText] = useState('');
  const { products } = useSelector(state => state.getProducts);
  const dispatch = useDispatch();

  const getText = (text) => {
    setText(text);
  };

  useEffect(() => {
    // Dispatch getProducts only when text changes
    dispatch(getProducts());
  }, [dispatch, text]); // Update when text changes

  return (
    <SearchContainer>
      <SearchInputBase
        placeholder='Search for products, brands and more...'
        onChange={(e) => getText(e.target.value)}
        value ={text}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {text && (
        <ListWrapper>
          {products
            .filter((product) =>
              product.title.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
             <Link to ={`/product/${product.id}`} onClick={()=> setText('')} style={{textDecoration:'none'}}> <Typography style ={ {fontSize:12,color:'inherit'}}><ListItem key={product.id}>{product.title}</ListItem></Typography>
             </Link>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;
