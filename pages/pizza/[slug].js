import css from '../../styles/Pizza.module.css'
import Image from 'next/image'
import {client, urlFor} from '../../lib/client'
import LeftArrow from '../../assets/arrowLeft.png'
import RightArrow from '../../assets/arrowRight.png'
import Layout from '../components/Layout'
import { useState } from 'react'
export default function Pizza({pizza}) {

    const src = urlFor(pizza.image).url()

    const [Size, setSize] = useState(1)
    const [Quantity, setQuantity] = useState(1)

    const handleQuantity = (type) => {
        type === 'inc'
        ? setQuantity((prev) => prev + 1)
        : Quantity === 1 
        ? null
        : setQuantity((prev) => prev - 1)
    }

    return (
        <Layout>
            <div className={css.container}>
                <div className={css.ImageWrapper}>
                    <Image loader={() => src}
                        src={src}
                        alt=""
                        objectFit="cover"
                        layout='fill'
                        unoptimized/>
                </div>

                {/* right side */}
                <div className={css.right}>
                    <span>{pizza.name}</span>
                    <span>{pizza.details}</span>
                    <span><span style={{ color: "var(--themeRed)" }}>$</span> {pizza.price[Size]}</span>
                    <div className={css.size}>
                        <span>Size</span>
                        <div className={css.SizeVariants}>
                            <div onClick={()=>setSize(0)} className={Size === 0? css.selected : ''} >Small</div>
                            <div onClick={()=>setSize(1)} className={Size === 1? css.selected : ''} >Medium</div>
                            <div onClick={()=>setSize(2)} className={Size === 2? css.selected : ''} >Large</div>
                        </div>
                    </div>

                    {/* Quantity Counter */}
                    <div className={css.quantity}>
                        <span>Quantity</span>
                        <div className={css.counter}>
                            <Image src={LeftArrow} height={20} width={20} alt="" objectFit='contain' onClick={() =>handleQuantity('dec')}/>
                        </div>
                        <span>{Quantity}</span>
                        <div className={css.counter}>
                            <Image src={RightArrow} height={20} width={20} alt="" objectFit='contain' onClick={() =>handleQuantity('inc')}/>
                        </div>
                    </div>

                    {/* button */}
                    <div className={`btn ${css.btn}`}>
                        Add to Cart
                    </div>
                </div>

                

            </div>

        </Layout>
    )
}


export async function getStaticPaths() {
    const paths = await client.fetch(`*[_type=="pizza" && defined(slug.current)][].slug.current`)

    return {
        paths: paths.map((slug) => ({params: {
                slug
            }})),
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const {
        slug = ""
    } = context.params
    const pizza = await client.fetch(`*[_type=="pizza" && slug.current == '${slug}'][0]`)

    return {props: {
            pizza
        }}
}
