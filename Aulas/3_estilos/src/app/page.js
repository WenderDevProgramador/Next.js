
import ComponentTaillwind from './components/ComponentTaillwind';
import styles from './page.module.css'

export default function Home() {



  return (

    <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

      {/* CSS Global */}

      <h1>Meu título</h1>

      {/* CSS Modules */}

      <h2 className={styles.heading_module}>Meu título com CSS Modules</h2>

      <h3 className={styles.teste}>
        Testando CSS Modules
      </h3>

      <div className={styles.container}>
        <p>Testando CSS Modules</p>
      </div>

      {/* 3- Tailwind */}

      <ComponentTaillwind/>

    </main>

  );
}
