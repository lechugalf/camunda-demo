import React from "react";
import { Layout, Space, Typography } from "antd";
import RequestForm from "../../components/RequestForm";
import RequestsTable from "../../components/RequestsTable";

function ManagerPage() {
  return (
    <Layout style={{ height: "-webkit-fill-available"}}>
      <Layout.Header>
        <Typography.Text
          style={{ color: "white", fontSize: 22, fontWeight: "bold" }}
        >
          Maniobras de Vacios
        </Typography.Text>
      </Layout.Header>
      <Layout.Content>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
          <div>
            <RequestsTable title="Solicitudes pendientes" columns={['id', 'agentName', 'agentClient', 'blNumber', 'serviceDate', 'file']}/>
            <RequestsTable title="Solicitudes aprobadas" columns={['id', 'agentName', 'agentClient', 'blNumber', 'serviceDate', 'file']}/>
          </div>
          <RequestForm title="Aprobar Maniobra" submitText="Aprobar Maniobra" />
        </div>
      </Layout.Content>
    </Layout>
  )
}

export default ManagerPage;
