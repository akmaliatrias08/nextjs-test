"use client";

import React, { useEffect, useState } from "react";
import {Button, Card, Table, Tag} from "antd";
import {store} from "#/store";
import {sampleRepository} from "#/repository/sample";
import { useRouter } from "next/navigation";
import { ColumnsType } from "antd/es/table";
import { usersRepository } from "#/repository/user";

const Page = () => {
    const [user, setUser] = useState([])
    const {data}  = usersRepository.hooks.useGetAllUsers();
   
    useEffect(() => {
        setUser(data?.data)
    }, [data])

    const router = useRouter()
    const logout = () => {
        localStorage.removeItem("access_token")
        router.push('/login')
    }

    interface DataType {
        key: string;
        name: string;
        age: number;
        address: string;
        tags: string[];
      }
      
      const columns: ColumnsType<DataType> = [
        {
          title: 'First Name',
          dataIndex: 'firstName',
          key: 'firstName',
          render: (val) =>{ return <Tag color={'volcano'}>{val}</Tag>}
        },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          key: 'lastName',
        },
        {
          title: 'Username',
          dataIndex: 'username',
          key: 'username',
        },
      ];
    
    return <div>
        {/* <div>
            home: {store.ui.title}
        </div>
        <div>
            fact: {data?.setup}
        </div> */}
        <Button className={"ml-8"} onClick={logout}>Logout</Button>
        <Table columns={columns} dataSource={user} />
    </div>;
};

export default Page;

