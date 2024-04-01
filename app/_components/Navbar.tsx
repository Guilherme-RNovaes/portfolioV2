'use client'

import { Button } from '@/app/_components/ui/button';
import Link from 'next/link';
import navigationProps from '@/config/navigation';
import UserAvatar from './UserAvatar';


const firstNavigationItem = navigationProps[0];
const otherNavigationItems = navigationProps.slice(1);

type NavbarProps = {
  isActiveRoute: (route: string) => boolean;
};

const Navbar = ({ isActiveRoute }: NavbarProps) => {
  // Tipo para a propriedade 'variant' do botão
  type ButtonVariant = 'secondary' | 'ghost';

  return (
    <>
      <div className='flex items-start justify-center mt-8 -ml-1'>
        {isActiveRoute('/') ? ' ' : <UserAvatar />}
      </div>
      <div className='mt-5 mb-5'>
        <Button
          variant={isActiveRoute(firstNavigationItem.href) ? 'secondary' : 'ghost' as ButtonVariant}
          asChild
          className="w-60 h-30 flex flex-row items-start justify-start"
        >
          <Link href={firstNavigationItem.href} className='flex items-center justify-start'>
            <firstNavigationItem.icon className={`${isActiveRoute(firstNavigationItem.href) ? 'text-blue-400' : ''} w-4 h-4 mr-2`} />
            {firstNavigationItem.name}
          </Link>
        </Button>
      </div>
      <p className="pl-4 text-zinc-400 text-sm mb-4">Navegação</p>
      {otherNavigationItems.map((props, index) => (
        <Button
          key={index}
          variant={isActiveRoute(props.href) ? 'secondary' : 'ghost' as ButtonVariant}
          asChild
          className="w-60 h-30 flex flex-row items-start justify-start"
        >
          <Link href={props.href} className='flex items-center justify-start'>
            <props.icon className={`${isActiveRoute(props.href) ? 'text-blue-400' : ''} w-4 h-4 mr-2`} />
            {props.name}
          </Link>
        </Button>
      ))}
    </>
  );
};

export default Navbar;
