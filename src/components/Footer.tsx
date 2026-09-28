import Logo from "./Logo";
import { getDictionary } from "@/i18n/server";

export default async function Footer() {
  const { footer } = await getDictionary();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <Logo />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Altobay.ai. {footer.rights}
        </p>
        <div className="flex items-center gap-5 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground">
            {footer.privacy}
          </a>
          <a href="#" className="hover:text-foreground">
            {footer.terms}
          </a>
          <a href="mailto:hello@altobay.ai" className="hover:text-foreground">
            {footer.contact}
          </a>
        </div>
      </div>
    </footer>
  );
}
