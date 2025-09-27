import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      duration={10000}
      visibleToasts={1}
      position="top-right"
      className="top-14! right-[calc((100vw-clamp(20rem,95%,90rem))/2+1rem)]! left-auto! select-none"
      {...props}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "w-80! ms-auto px-4 py-2 rounded-xl flex items-center gap-3 min-h-14",
          title:
            "text-sm font-serif tracking-tight font-medium text-foreground",
          description: "mt-2 text-sm font-sans text-foreground-muted",
          default: "bg-accent border border-border ",
        },
      }}
    />
  );
};

export default Toaster;
