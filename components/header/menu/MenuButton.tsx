import { useEffect, useState } from "react";
import {
  CheckBadgeIcon,
  Cog6ToothIcon,
  EllipsisVerticalIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";

import { MenuItem as IMenuItem } from "../../../types/menu";
import { useVerification } from "../../../contexts/Verification";
import MenuItem from "./MenuItem";
import { useConfig } from "../../../contexts/Config";
import { GiOstrich } from "react-icons/gi";
import { useAccount } from "../../../contexts/Account";

interface MenuButtonProps {
  className?: string;
}

export const MenuButton = ({ className }: MenuButtonProps) => {
  const { showModal } = useVerification();
  const { config } = useConfig();
  const { userData } = useAccount();

  console.info("userData:");
  console.dir(userData);

  const [menuItems, setMenuItems] = useState<IMenuItem[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !config) {
      return;
    }

    const _menuItems: IMenuItem[] = [];

    if (!config?.verified) {
      _menuItems.push({
        label: "Verificar",
        icon: CheckBadgeIcon,
        onClick: () => {
          showModal();
        },
      });
    } else {
      // Already Verified

      // Already has npub assigned
      if (userData?.npub) {
        _menuItems.push({
          label: "Configurar",
          icon: Cog6ToothIcon,
          onClick: () => {
            alert("En contrucción");
          },
        });
      } else {
        // User is not registered

        // Nostr pub detected on config
        if (config.nostr?.npub) {
          _menuItems.push({
            label: "Registrar npub (Nostr)",
            icon: UserCircleIcon,
            onClick: () => {
              alert("En contrucción");
            },
          });
        } else {
          _menuItems.push({
            label: "Configurar Nostr",
            icon: GiOstrich,
            onClick: () => {
              alert("En contrucción");
            },
          });
        }
      }
    }

    console.dir(userData);

    setMenuItems(_menuItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);

  return menuItems.length > 0 ? (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex w-full justify-center rounded-full bg-black/10 bg-opacity-20 p-2 text-xs font-medium hover:bg-black/25 active:bg-black/50 text-white/50 hover:text-white/75 active:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
          <EllipsisVerticalIcon className='h-5 w-5' aria-hidden='true' />
        </Menu.Button>
      </div>
      <Transition
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='px-1 py-1 '>
            {menuItems.map((item, k) => (
              <MenuItem key={k} item={item} />
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  ) : (
    <></>
  );
};

export default MenuButton;
