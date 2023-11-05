import { UserButton } from '@clerk/nextjs';
import { ThemeSwitcher } from '.';

export default function Header() {
    return (
        <header className="mx-2 my-3 flex items-center justify-between sm:mx-0">
            <ThemeSwitcher />
            <UserButton afterSignOutUrl="/" />
        </header>
    );
}
