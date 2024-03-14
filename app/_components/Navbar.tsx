'use client'

import { Button } from '@/app/_components/ui/button';
import Link from 'next/link';
import navigationProps from '@/config/navigation';


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
      <div className='mt-5 mb-5'>
        <Button
          variant={isActiveRoute(firstNavigationItem.href) ? 'secondary' : 'ghost' as ButtonVariant}
          asChild
          className="w-60 h-30 flex flex-row items-start justify-start"
        >
          <Link href={firstNavigationItem.href}>
            <firstNavigationItem.icon className='w-4 h-4 mr-2' />
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
          <Link href={props.href}>
            <props.icon className='w-4 h-4 mr-2' />
            {props.name}
          </Link>
        </Button>
      ))}
    </>
  );
};

export default Navbar;
