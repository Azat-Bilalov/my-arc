import { cn } from "@heroui/theme";
import { memo } from "react";

type HeaderProps = React.PropsWithChildren<{
  icon: React.ReactNode;
  title: string;
  description: string;
}>;

const HeaderUnwrapped: React.FC<HeaderProps> = ({
  icon,
  title,
  description,
  children,
}) => {
  return (
    <div className="sticky top-0 z-10 pt-4 pb-2 bg-gray-50">
      <div className={cn("flex items-center gap-2", children && "mb-4")}>
        {icon}
        <div className="flex flex-col ">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-sm text-gray-600 ml-auto">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export const Header = memo(HeaderUnwrapped);
