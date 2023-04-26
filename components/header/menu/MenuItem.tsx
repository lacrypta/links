import { Menu } from "@headlessui/react";
import { MenuItem as IMenuItem } from "../../../types/menu";

interface MenuItemProps {
  item: IMenuItem;
}

export const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={`${
            active ? "bg-blue-400 text-white" : "text-gray-900"
          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
          onClick={item.onClick}
        >
          <item.icon className='mr-2 h-5 w-5' aria-hidden='true' />
          {item.label}
        </button>
      )}
    </Menu.Item>
  );
};

export default MenuItem;
