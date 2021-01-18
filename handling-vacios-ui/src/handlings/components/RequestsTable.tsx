import React from 'react';
import { Card, Table, Tag, Button } from 'antd';
import { FilePdfOutlined } from '@ant-design/icons'

interface RequestsTableProps {
    title: string;
    columns: string[];
}

export default function RequestsTable(props: RequestsTableProps) {

    const { columns, title } = props;

    return (
      <Card
        title={title}
        style={{ margin: '24px 0px 24px 24px' }}
      >
          <Table
            size="small"
            columns={
                requestColumns.filter(col => columns.indexOf(col.dataIndex) > 0 || col.required )
            }
            dataSource={fakeRequests}
          />
         
      </Card>
    );

}

const requestColumns = [
    {
        title:'No. Solicitud',
        dataIndex: 'id',
        key: 'id',
        required: true
    },
    {
        title: 'Cliente',
        dataIndex: 'agentClient',
        key: 'client'
    },
    {
        title: 'Agente Aduanal',
        dataIndex: 'agentName',
        key: 'agent'
    },
    {
        title: 'Bill Of Landing',
        dataIndex: 'blNumber',
        key: 'bl'
    },
    {
        title: 'Servicio',
        dataIndex: 'serviceDate',
        key: 'serviceDate'
    },
    {
        title: 'Estado',
        dataIndex: 'status',
        key: 'status',
        render: (t: string) => (<Tag>{t}</Tag>),
    },
    {
        title: 'Maniobra',
        dataIndex: 'file',
        key: 'file',
        render: (f: string) => (
            <Button disabled={f ? false : true} type={f ? 'link' : 'text'} icon={<FilePdfOutlined />} />
        )
    }
]

const fakeRequests = [{
    id: 'MV-00034',
    agentName: 'Andrea Ruiz',
    agentClient: 'Grupo ABC',
    blNumber: 'JP345JKS49LP',
    serviceDate: '2021/01/23',
    status: 'En Revision',
    file: 'file.pdf'
},
{
    id: 'MV-00124',
    agentName: 'Andrea Ruiz',
    agentClient: 'Grupo ABC',
    blNumber: 'FGLEKRNS49LP',
    serviceDate: '2021/01/09',
    status: 'En Revision',
    file: ''
}
]