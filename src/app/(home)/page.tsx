import { Header } from '@/components';

export default function Home() {
    return (
        <main className="h-screen">
            <Header />
            <div className="flex h-full flex-col items-center justify-center text-4xl font-bold">
                Chat App with Prisma.
            </div>
        </main>
    );
}
