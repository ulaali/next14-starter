import Image from 'next/image'
import React from 'react'
import styles from './About.module.css'
export default function About() {
  return (
    <div className={styles.container}>
      <div>
        <h2>About us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis delectus quas,<br/> culpa laudantium rem ipsum nobis.<br/> A eligendi quasi, adipisci ex eius maxime eos fuga laudantium rem recusandae officia. Nihil.</p>
      <br/>
      <div className={styles.table}>
        <p><span>+500K</span><br/> people</p><br/>
        <p><span>+50K</span> <br/>download</p><br/>
        <p><span>+100K</span><br/> Daily visit</p>

      </div>
      </div>
      <Image src='/balkan.png' width={400} height={400} alt='alt'/>
    </div>
  )
}
