import React from 'react';
import { Divider, List } from 'antd';
import styled from 'styled-components';

const languages = ['HTML', 'CSS', 'JavaScript (ES6+)', 'ReactJS'];
const technologies= ['Git','Chrome Developer Tools', 'Bootstrap', 'Material UI', 'Vercel']

const ListItemStyled = styled(List.Item)`
    height: 20px;
   
`


const ListComponent = () => (
  <>  
    <List
      size="small"
      header="Languages"
      bordered
      style={{ width: '50%' ,backgroundColor: '#c2e6d1', marginTop: '20px'}}
      dataSource={languages}
      renderItem={(item) => <ListItemStyled>{item}</ListItemStyled>}
    />

    <Divider />

<List
      size="small"
      header="Technologies"
      bordered
      style={{ width: '50%' ,backgroundColor: '#c2e6d1', marginTop: '20px'}}
      dataSource={technologies}
      renderItem={(item) => <ListItemStyled>{item}</ListItemStyled>}
    />
  </>
);

export default ListComponent;