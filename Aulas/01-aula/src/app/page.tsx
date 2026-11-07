import styles from './page.module.css'


console.log("STYLES:", styles);
console.log("CLASSE PAGE:", styles.page);

export default function Home() {
  return (
    // <div className={styles.page}>
      
    //   <header className={styles.header}>
    //     <nav>
    //       <ul>
    //         <li><a href="#">Link 1</a></li>
    //         <li><a href="#">Link 2</a></li>
    //         <li><a href="#">Link 3</a></li>
    //       </ul>
    //     </nav>
    //   </header>
    //   <main className={styles.main}>
    //     <h1>Olá, Next.js!</h1>
    //     <p>Lore ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

    //     <ul>
    //       <li>Item 1</li>
    //       <li>Item 2</li>
    //       <li>Item 3</li>
    //     </ul>
        
    //   </main>
    // </div>

    <div className={styles.page}>
      TESTE DE CSS MODULES
    </div>
  )
}