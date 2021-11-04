import { Dropdown, Menu, Avatar } from "antd";
import { BellOutlined } from '@ant-design/icons' 

export default () => {
    const menu = (
        <Menu>
            <Menu.Item>
                <BellOutlined />
            </Menu.Item>
        </Menu>
    );

    return (<Dropdown overlay={menu}>
        <Avatar
        style={{
          backgroundColor: '#00a2ae',
          cursor: 'pointer',
        }}
        size={26}
      >
        ccc
      </Avatar>
    </Dropdown>)
}