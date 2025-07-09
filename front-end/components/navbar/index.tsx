"use client";
import React from "react";
import {
  Navbar,
  DarkThemeToggle,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavbarLink,
  Button,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
export const navigation = [
  { name: "Projekty", href: "/p/projects" },
  { name: "O nas", href: "/p/about" },
  { name: "Kontakt", href: "/p/contact" },
];
export const NavigationBar = () => {
  return (
    <Navbar
      fluid
      rounded
      className="fixed w-full z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600"
    >
      <NavbarBrand as={Link} href="/">
        <Image
          src="/static/logo.png"
          alt="Multi‑Efekt logo"
          width={32}
          height={32}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Multi‑Efekt
        </span>
      </NavbarBrand>
      <div className="flex items-center md:order-2 space-x-2">
        <DarkThemeToggle />
        <Button as={Link} href="/auth/login">
          Zaloguj się
        </Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        {navigation.map((item) => (
          <NavbarLink key={item.name} as={Link} href={item.href} active={false}>
            {item.name}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
};
