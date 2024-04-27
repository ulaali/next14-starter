'use client'
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import NavLink from "./NavLink/NavLink";
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links=[{
    title:'home',
    path:'/'
  },
  {
    title:'contact',
    path:'/contact'
  },
  {
    title:'about',
    path:'/About'
  },
  {
    title:'blog',
    path:'/Bolg'
  }]
   //temporary
   const session=true
   const isAdmin=true
 
  return (
    <div className={styles.container}>
      <div>
        <h2>Logo</h2>
      </div>
      <div className={styles.Link}>
        {links.map((link=>(
          <NavLink item={link} setOpen={setOpen} key={link.title}/>
        )))} 
        {session ? 
          isAdmin?<>
           <NavLink item={{ title:'admin',
          path:'/Admin'}} />
          <button className={styles.btn}>log out</button>
          </> 
         
        :<button className={styles.btn}>log out</button>:<NavLink item={{title:'login',
        path:'/login/Login'}}/>}
      </div>
      {/* // ------------------------------ responsive navbar ------------------------ */}
      <button className={`${styles.btn} ${styles.respbtn}`} onClick={()=>setOpen(prev=>!prev)}>menu</button>
      {
        open && <div className={styles.resLink}>
        {links.map((link=>(
          <NavLink item={link} key={link.title}/>
        )))} 
        {session ? 
          isAdmin?<>
           <NavLink item={{ title:'admin',
          path:'/Admin'}} setOpen={setOpen}/>
          <button className={styles.btn}>log out</button>
          </> 
         
        :<button className={styles.btn}>log out</button>:<NavLink item={{title:'login',
        path:'/login/Login'}}/>}
      </div>
      }
    </div>
  );
}
