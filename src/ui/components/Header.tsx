import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="flex items-center justify-center h-40 sm:h-48 bg-customGray700">
      <Logo className="object-cover max-w-[126px] w-full h-full" />
    </header>
  );
}
