import React, { useState } from 'react';
import { Modal, Form, Row, Col, Input, DatePicker, Button, InputNumber } from 'antd';

interface PropsModal {
  title: string;
  visible: boolean;
  onCancel: () => void;
  onSubmit: (values: any, titleModal?: any) => void;
}
const ModalAddTask = ({ title, visible, onCancel, onSubmit }: PropsModal) => {
  const [form] = Form.useForm();

  const onCancelSubMit = () => {
    form.resetFields();
    onCancel();
  };

  const onFinish = (values: any) => {
    onSubmit(values, title);
    form.resetFields();
    onCancel();
  };

  return (
    <Modal
      title={
        <h3
          style={{
            textAlign: 'center',
            marginBottom: 15,
          }}
        >
          {title}
        </h3>
      }
      open={visible}
      onCancel={onCancel}
      footer={false}
    >
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        validateMessages={{ required: 'Vui lòng không để trống' }}
        onFinish={onFinish}
      >
        <Row>
          <Col span={24}>
            <Form.Item
              labelAlign="left"
              label="Tên công việc"
              name={'name'}
              rules={[{ required: true }]}
            >
              <Input placeholder="Nhập tên công việc" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              labelAlign="left"
              label="Hạn cuối"
              name={'dealine'}
              rules={[{ required: true }]}
            >
              <DatePicker
                placeholder="Chọn ngày"
                format={'YYYY-MM-DD HH:mm:ss'}
                showTime
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              labelAlign="left"
              label="Dự kiến"
              name={'expected'}
              rules={[{ required: true }]}
            >
              <InputNumber
                placeholder="Nhập thời gian dự kiến"
                style={{ width: '100%' }}
                addonAfter="giờ"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row justify={'end'}>
          <Col span={6}>
            <Row justify={'space-between'}>
              <Col span={12}>
                <Button htmlType="submit" type="primary">
                  OK
                </Button>
              </Col>
              <Col span={12}>
                <Button onClick={onCancelSubMit} type="primary" danger>
                  HỦY
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default ModalAddTask;
