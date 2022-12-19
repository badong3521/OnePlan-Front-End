import React, { useState } from 'react';
import { Modal, Form, Row, Col, Input } from 'antd';

interface PropsModal {
  visible: boolean;
  onCancel: () => void;
}
const ModalAddTask = ({ visible, onCancel }: PropsModal) => {
  const [form] = Form.useForm();

  return (
    <Modal visible={visible} onCancel={onCancel}>
      <Form form={form}>
        <Row>
          <Col span={18}>
            <Form.Item label="Tên công việc" name={'name'}>
              <Input placeholder="Nhập tên công việc" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default ModalAddTask;
