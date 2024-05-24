import { MenuProps, Space, Dropdown } from "antd";
import Link from "next/link";

function DropdownNav() {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href="/add-found-item">Add found item</Link>,
    },
    {
      key: "2",
      label: <Link href="/add-lost-item">Add lost item</Link>,
    },
  ];
  return (
    <div>
      <Dropdown menu={{ items }} placement="bottom" arrow>
        <Space wrap size={16}>
          <p className="cursor-pointer">Add new</p>
        </Space>
      </Dropdown>
    </div>
  );
}

export default DropdownNav;
