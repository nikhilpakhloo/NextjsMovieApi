import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/navbar.module.css'

export default function Navbar() {
    return (
        <>
            <div className={styles.navbar}>
                <header className={styles.header}>
                    <Link href='/'>
                        <Image src='/next.svg' alt='logo' width={100} height={50} />
                    </Link>
                </header>
                <nav className={styles.nav}>

                    <ul className={styles.ul} >
                        
                        <Link className={styles.a} href='/'>Home</Link>
                        <Link href='/about'>About</Link>
                        <Link href='/movie'>Movie</Link>
                        <Link href='/contact'>Contact</Link>
                    </ul>

                </nav>
            </div>


        </>
    )
}
