import React from "react";
import RequestForm from "../../components/RequestForm";
import RequestsTable from "../../components/RequestsTable";
import { Layout, Space, Typography } from "antd";

function AgentPage() {

  const sendHandlingRequest = (data: any) => {
      console.log('send request with this data : ', data);
  }

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
          <RequestsTable
            title="Solicitud de Maniobras"
            columns={['id', 'agentClient', 'blNumber', 'serviceDate', 'status', 'file']}
          />
          <RequestForm
            title="Crear Solicitud"
            submitText="Enviar Solicitud"
            onSubmit={sendHandlingRequest}
          />
        </div>
      </Layout.Content>
    </Layout>
  );
}

export default AgentPage;
