import { Modal, useMantineTheme } from "@mantine/core"
import { useState } from "react";
import { createOrder } from "../../lib/orderHandler";
import css from '../../styles/OrderModal.module.css';
import toast, { Toaster } from 'react-hot-toast'
import { useStore } from "../../store/store";
import {useRouter} from 'next/router';

export default function OrderModal({opened, setOpened, PaymentMethod}) {
    const theme = useMantineTheme();
    const router = useRouter();
    const [FormData, setFormData] = useState({})
    const resetCart = useStore((state) => state.resetCart)

    const handleInput = (e) => {
        setFormData({...FormData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const id = await createOrder({...FormData, total, PaymentMethod})
        {
            typeof window !== undefined && localStorage.setItem('order', id)
            setOpened(null)
        }
        toast.success("Order Placed")
        resetCart()
        router.push(`/order/${id}`)
    }

    const total = typeof window !== 'undefined' && localStorage.getItem('total')
    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            opened = {opened}
            onClose = {() => setOpened(null)}
        >
        {/* Modal content */}

        <form onSubmit={handleSubmit} className={css.formContainer}>
            <input onChange={handleInput} type="text" name="name" placeholder="Name" required />
            <input onChange={handleInput} type="text" name="phone" placeholder="Phone Number" required />
            <textarea onChange={handleInput} name="address" rows={3} placeholder="Address"></textarea>
            <span>
                You will pay <span>$ {total}</span> on delivery
            </span>
            <button type="submit" className="btn">Place Order</button>
        </form>
        <Toaster />
        </Modal>
    )
}