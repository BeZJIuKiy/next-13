import { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import TheHeader from '@/components/TheHeader/TheHeader';
import TheFooter from '@/components/TheFooter/TheFooter';
import styles from './Layout.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'NextJS',
	description: 'Generated by create next app',
};

interface LayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en" className={styles.html}>
			<body className={inter.className}>
				<TheHeader />

				<main className={'container'}>{children}</main>

				<TheFooter />
			</body>
		</html>
	);
}
