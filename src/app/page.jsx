import Image from 'next/image';
import styles from './home.module.css'





const Home = () => {
  return <div className={styles.container}>
    <div>
      <h1>HERE is the <br/>home page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aut voluptates<br/> enim vitae eius amet provident,<br/> itaque impedit neque, odit similique consectetur sunt illo sapiente suscipit corporis, in necessitatibus animi.</p>
      <button className={styles.btn}>Explore</button>
    </div>
    <div>
      <Image src='/balkan.png' alt='' width={400} height={400}/>
    </div>
    </div>;
};

export default Home;