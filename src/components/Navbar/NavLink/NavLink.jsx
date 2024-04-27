"use client";
import Link from "next/link";
import React from "react";
import styles from "./NavLink.module.css";
import { usePathname } from "next/navigation";
export default function NavLink({ item ,setOpen}) {
  const pathName = usePathname();
 
  return (
    <Link
      onClick={()=>setOpen(false)}
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path ? styles.active : null
      }`}
    >
      {item.title}
    </Link>
    
  );
}
