import { Box, Card, Heading } from "@radix-ui/themes";
import styles from "./page.module.scss";
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Card>
          <Box p="5">
            <Heading>Olá, Next.js!</Heading>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ul>
              <li>
                <div>Via Lactea</div>
                <Image src={"/via-lactea.jpg"} alt="Via Lactea" width={400} height={225} />
              </li>
              <li>
                <div>Andromedra</div>
                <Image src={'https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA15416.jpg'} alt="Andromedra" width={400} height={225} style= {{objectFit: 'cover'}}/>
              </li>
              <li>Item 3</li>
            </ul>
          </Box>
        </Card>
      </main>
    </div>
  );
}
