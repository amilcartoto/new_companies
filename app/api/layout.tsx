import {Logo} from '@/components/Logo/Logo';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <header className="mb-4">
                <Logo/>
            </header>
            <main className="w-full max-w-md p-4">
                {children}
            </main>
        </div>
    );
}
