import { Menu, MenuItemsProps } from "@headlessui/react";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import { MenuItem } from "../../../types/menu";

export const MenuItems = (props: MenuItemsProps<typeof Menu.Items>) => {
  // Menu Items
  const menuItems: MenuItem[] = [
    {
      label: "Verificar",
      icon: CheckBadgeIcon,
      onClick: () => {
        alert("Under construction");
      },
    },
  ];

  return (
    <Menu.Items
      {...props}
      className='absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
    >
      <div className='px-1 py-1 '>
        {menuItems.map((item) => (
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-[#ff7070] text-white" : "text-gray-900"
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                onClick={item.onClick}
              >
                <item.icon className='mr-2 h-5 w-5' aria-hidden='true' />
                {item.label}
              </button>
            )}
          </Menu.Item>
        ))}
      </div>
    </Menu.Items>
  );
};

export default MenuItems;
