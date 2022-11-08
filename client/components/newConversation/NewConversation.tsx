import style from "./newConversation.module.css";
import { Select, Spin, Button, Space, message, Avatar, Typography, Input, Form, Checkbox } from "antd";
import React, { useContext, useState } from "react";
import { CheckOutlined } from "@ant-design/icons";
import axios from "@/config/axios";
import { UserType, ConversationsType, MessengerContextType } from "@/types/types";
import { MessengerContext } from "context/massengerContext";

// Usage of DebounceSelect
interface UserValue {
  label: JSX.Element;
  value: number;
}
const { Text } = Typography;

async function fetchUserList(username: string): Promise<UserValue[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = (await axios.get(`/users/all?findBy=${username}`)) as { data: UserType[] };
      const data: UserValue[] = res.data.map(({ username, img_url, intra_id }) => ({
        label: (
          <Space>
            <Avatar src={img_url} />
            <Text>{username}</Text>
          </Space>
        ),
        value: intra_id,
      }));
      return resolve(data);
    } catch (error) {
      return reject(error);
    }
  });
}

interface PropsType {
  setConversations: React.Dispatch<React.SetStateAction<ConversationsType[]>>;
  setCurrentConversation: React.Dispatch<React.SetStateAction<ConversationsType | undefined>>;
}

const NewConversation: React.FC = () => {
  const [fetching, setFetching] = useState<boolean>(false);
  const [value, setValue] = useState<UserValue[]>([]);
  const { newConversation } = useContext(MessengerContext) as MessengerContextType;

  const onFinish = async (values: { members: UserValue[]; title: string; public: boolean; password: string }) => {
    try {
      const members = values.members.map((i) => i.value);
      const data = { members, title: values.title, public: values.public, password: values.password };
      Object.assign(data, { members });
      const res = (await newConversation(data)) as string;
      message.success(res);
    } catch (error) {
      error instanceof Error && message.error(error.message);
    }
  };

  return (
    <Form
      name="create_new_group"
      onFinish={onFinish}
      style={{
        width: 350,
      }}
    >
      <Form.Item name="title" rules={[{ required: true, min: 3, max: 20 }]}>
        <Input placeholder="entry name of conversation" size="large" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: false, min: 6, max: 20 }]}>
        <Input placeholder="entre password" size="large" />
      </Form.Item>

      <Form.Item name="members" rules={[{ required: true, message: "Please select atlest on member!" }]}>
        <Select
          className={style.select}
          labelInValue
          placeholder="Select members"
          mode="multiple"
          options={value}
          filterOption={false}
          allowClear={true}
          notFoundContent={fetching ? <Spin size="small" /> : null}
          size="large"
          onSearch={(v) => {
            setFetching(true);
            fetchUserList(v)
              .then((res) => {
                setValue(res);
                setFetching(false);
              })
              .catch((e) => {
                setFetching(false);
                e instanceof Error && message.error(e.message);
              });
          }}
        />
      </Form.Item>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Form.Item noStyle>
          <Button type="primary" htmlType="submit">
            {"Submit"}
          </Button>
        </Form.Item>
        <Form.Item name="public" valuePropName="checked" initialValue={false}>
          <Checkbox>{"Public"}</Checkbox>
        </Form.Item>
      </div>
    </Form>
  );
};

export default NewConversation;
