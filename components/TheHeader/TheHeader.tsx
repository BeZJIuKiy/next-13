import Link from "next/link";
import styles from "./TheHeader.module.css";

export default function TheHeader() {
    return (
        <header>
            <Link className={styles.link} href="/">Home</Link>
            <Link className={styles.link} href="/blog">Blog</Link>
            <Link className={styles.link} href="/about">About</Link>
        </header>
    );
}