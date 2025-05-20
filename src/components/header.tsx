import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Center } from '@/components/layouts/center';
import A from '@/components/layouts/links';

export const Header = () => {
  return (
    <header className="sticky top-0 shadow-[0_6px_0_rgba(0,0,0,0.2)] z-100 bg-white">
      <Center>
        <div className="flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <A to="/">
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <span>Home</span>
                  </NavigationMenuLink>
                </A>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <A to="/about">
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <span>About</span>
                  </NavigationMenuLink>
                </A>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </Center>
    </header>
  );
};
