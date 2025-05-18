import { Link } from 'waku';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export const Header = () => {
  return (
    <header className="sticky top-0 center shadow-[0_6px_0_rgba(0,0,0,0.2)] flex items-center gap-4 lg:left-0 lg:top-0 z-100 bg-white">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <span>Home</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/about">
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <span>About</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
