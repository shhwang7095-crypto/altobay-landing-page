import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <Logo />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Altobay.ai. All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground">
            Privacy
          </a>
          <a href="#" className="hover:text-foreground">
            Terms
          </a>
          <a href="mailto:hello@altobay.ai" className="hover:text-foreground">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
