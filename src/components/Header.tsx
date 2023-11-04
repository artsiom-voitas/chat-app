import { UserButton } from '@clerk/nextjs';
import { ThemeSwitcher } from '.';

export default function Header() {
    return (
        <header className="m-3 flex items-center justify-between">
            <ThemeSwitcher />
            <UserButton afterSignOutUrl="/" />
        </header>
    );
}
