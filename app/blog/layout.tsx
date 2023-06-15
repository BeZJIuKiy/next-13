import './BlogLayout.css';

interface Props {
    children: React.ReactNode
}

export default function AboutLayout({ children }: Props) {
    return (
        <div className='container'>
            {children}
        </div>
    );
}