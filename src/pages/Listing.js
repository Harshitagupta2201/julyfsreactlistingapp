import React ,{useEffect,useState} from 'react'
import { Space, Table,Tag } from 'antd';


const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];


const Listing = () => {
  const [data,setData]=useState([]);

useEffect(()=>{

  fetch('http://rustycoder.live:8000/listing')
  .then((response) => response.json())
  .then((result) => {
    console.log(result.data);

    setData(result.data);


  });




},[]);

  return (
    <div>

<Table columns={columns} dataSource={data} />


    </div>
  )
}

export default Listing