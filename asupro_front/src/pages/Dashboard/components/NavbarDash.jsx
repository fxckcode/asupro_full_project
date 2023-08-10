import { Navbar, NavbarContent, NavbarMenuToggle, NavbarBrand, NavbarItem, NavbarMenu, NavbarMenuItem, Dropdown, DropdownTrigger, Avatar,
    DropdownMenu, DropdownItem } from '@nextui-org/react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function NavbarDash({user}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit text-3xl">Asupro</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="text-3xl font-bold">Asupro</p>
        </NavbarBrand>
        <NavbarItem isActive>
          <NavLink to="/dashboard" activeClassName='active'>
            Inicio
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/productos" activeClassName='active'>
            Productos
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end" >
        <span className='capitalize'>{user.nombre} - {user.rol}</span>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat" className='bg-slate-900 text-white rounded-lg'>
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Logeado como:</p>
              <p className="font-semibold">{user.email}</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu className='mt-5'>
          <NavbarMenuItem>
          </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}

export default NavbarDash