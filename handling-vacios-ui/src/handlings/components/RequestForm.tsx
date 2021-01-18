import React from "react";
import { Card, Form, Input, Button, DatePicker, Space, Select } from "antd";
import { MinusCircleOutlined } from '@ant-design/icons'

interface RequestFormProps {
  title: string;
  submitText: string;
  onSubmit?: (data: any) => void;
}

function RequestForm(props: RequestFormProps) {
  const { onSubmit, title, submitText } = props;
  const [form] = Form.useForm();

  const handleSubmit = () => {
      const data = form.getFieldsValue()
      console.log(data);
      if (onSubmit)
        onSubmit(data);
  }

  return (
    <Card title={title} style={{ width: 400, margin: 24 }}>
      <Form
        form={form}
        layout="horizontal"
        labelCol={{ span: 13 }}
        //wrapperCol={{ span: 14 }}
        //style={{ width: 360 }}
        colon={false}
      >
        <Form.Item name="agent_name" label="Agente Aduanal">
          <Input />
        </Form.Item>
        <Form.Item name="agent_client" label="Razón social del Cliente">
          <Input />
        </Form.Item>
        <Form.Item name="agent_client_rfc" label="RFC del Cliente">
          <Input />
        </Form.Item>
        <Form.Item name="service_date" label="Fecha de Servicio">
          <DatePicker />
        </Form.Item>
        <Form.Item name="bl_number" label="Número de BL">
          <Input />
        </Form.Item>
        <Form.List name="containers">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space
                  size="small"
                  key={field.key}
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "flex-end",
                  }}
                  align="baseline"
                >
                  <Form.Item
                    {...field}
                    name={[field.name, "num"]}
                    fieldKey={[field.fieldKey, "num"]}
                  >
                    <Input placeholder="Num contenedor" />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, "type"]}
                    fieldKey={[field.fieldKey, "type"]}
                  >
                    <Select
                      placeholder="Tipo / Tamaño"
                      options={[
                        { value: "40HC", label: "40 High Cube" },
                        { value: "20STD", label: "20 Standard" },
                      ]}
                    />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Space align="end">
                <Button onClick={() => add()}>Agregar Contenedor</Button>
              </Space>
              <Form.Item></Form.Item>
            </>
          )}
        </Form.List>
        <Button type="primary" htmlType="button" onClick={handleSubmit}>
          { submitText }
        </Button>
      </Form>
    </Card>
  );
}

export default RequestForm;
