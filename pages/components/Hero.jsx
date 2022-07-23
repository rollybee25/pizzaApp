import Image from 'next/image'
import css from '../../styles/Hero.module.css'
import Cherry from '../../assets/Cherry.png'
import HeroImage from '../../assets/HeroImage.png'
import {UilPhone} from '@iconscout/react-unicons'
import Pizza1 from '../../assets/p1.jpg'

export default function Hero() {
    return (
        <div className={css.container}>

            {/* Left side */}
            <div className={css.left}>
                <div className={css.cherryDiv}>
                    <span>More than Faster</span>
                    <Image src={Cherry} alt="" width={40} hidden={20}/>
                </div>
                <div className={css.heroText}>
                    <span>Be The Faster</span>
                    <span>In The Delivery</span>
                    <span>
                        Your <span style={{ color: "var(--themeRed)" }}>Pizza!</span>
                    </span>
                </div>

                <span className={css.miniText}>
                    Our Mission is to fill up your tummy with delicious food and with free fastest delivery
                </span>

                <button className={`btn ${css.btn}`}>
                    Get Started
                </button>
            </div>

            {/* Right side */}
            <div className={css.right}>
                <div className={css.imageContainer}>
                    <Image src={HeroImage} alt="" layout='intrinsic'/>
                </div>

                <div className={css.ContactUs}>
                    <span>Contact us</span>
                    <div>
                        <UilPhone color='white'/>
                    </div>
                </div>

                <div className={css.Pizza}>
                    <div>
                        <Image src={Pizza1} alt="" objectFit='cover' layout='intrinsic'/>
                    </div>
                    <div className={css.details}>
                        <span>Italian Pizza</span>
                        <span><span style={{ color: "var(--themeRed)" }}>$</span> 7.4</span>
                    </div>
                </div>
            </div>

            
        </div>

    )
}