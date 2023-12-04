import Stack from '@mui/material/Stack';
import React from 'react';
import Item from './Item';

const List = () => {
  return (
    <>
      <Stack direction="column">
        <Item />
        <Item />
      </Stack>
    </>
  );
}

export default List;