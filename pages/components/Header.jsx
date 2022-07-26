import css from '../../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../../assets/Logo.png'
import {UilShoppingBag} from '@iconscout/react-unicons'
import Link from 'next/link'
import { useStore } from '../../store/store'

export default function Header() {

    console.log(useStore((state) => state))

    const items = useStore((state) => state.cart.pizzas.length)

    return (
        <div className={css.header}>
            {/* logo side */}
            <div className={css.logo}>
                <Image src={Logo} alt = "" width={50} height={50}/>
                <span>Fudo</span>
            </div>

            {/* menu side */}
            <ul className={css.menu}>
                <Link href='/'>
                    <li>Home</li>
                </Link>
                <li>Menu</li>
                <li>Contact</li>
            </ul>

            {/* right side */}
            <Link href="/cart">
                <div className={css.rightSide}>
                    <div className={css.cart}>
                        <UilShoppingBag size={35} color="2E2E2E" />
                        <div className={css.badge}>{items}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
