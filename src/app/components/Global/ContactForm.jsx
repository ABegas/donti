'use client'

import Link from "next/link"
import { useState } from 'react'
import Spinner from '@public/icons/spinner.svg'
import { ButtonPrimary } from '../UI/Cta'

const ContactForm = () => {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phone: '',
        treatment: '',
        agree: false
    })

    const [alertShow, setAlertShow] = useState(false)
    const [overlayShow, setOverlayShow] = useState(false)
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
    
        if (!form.agree) {
            alert('You must agree to the privacy policy.')
            return
        }
    
        setOverlayShow(true)
        
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        })
    
        const data = await res.json()
        
        if (data.success) {
            setAlertShow(true)
            setOverlayShow(false)

            setTimeout(() => {
                setAlertShow(false)
            }, 10000)
            setForm({ fullName: '', email: '', phone: '', treatment: '', agree: false })
        } else {
            alert('Error sending message.')
        }
    }
    
    return (
        <>
            
            <div className={`${alertShow ? 'opacity-100 z-50' : 'opacity-0 z-[-1]'} transition fixed bottom-20 left-1/2 translate-[-50%] w-[350px] bg-[#32a852] p-3 text-brand text-center rounded-lg shadow-[0_0_15px_4px_rgba(0,0,0,0.4)]`}>
                Your inquiry has been successfully submitted and we will contact you shortly to arrange your appointment.
            </div>
            <form
                onSubmit={handleSubmit}
                className="
                    relative
                    p-8
                    lg:p-14
                    text-brand
                    bg-brand-dark
                    shadow-[0_0_15px_4px_rgba(0,0,0,0.4)]
                    before:absolute
                    before:left-[-100%]
                    before:top-0
                    before:bg-brand-dark
                    before:h-full
                    before:w-full"
            >
                
                <div data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-offset="-100">
                    <h3 className="mb-10">Schedule Your Appointment</h3>
                    {overlayShow && <div className="absolute left-0 top-0 w-full h-full z-20">
                            <Spinner className="animate-spin h-5 w-5 mr-2 text-white absolute left-1/2 top-1/2 translate-[-50%] translate-y-[-50%]" />
                        </div>
                    }
                    <div className={`${overlayShow ? 'opacity-20' : ''}`}>
                        {/* Full Name */}
                        <div className="o-input__wrapper">
                            <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                placeholder=" "
                                required
                                value={form.fullName}
                                onChange={handleChange}
                            />
                            <label htmlFor="fullName">
                                Full Name
                            </label>
                            
                        </div>

                        {/* Email */}
                        <div className="o-input__wrapper">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder=" "
                                required
                                value={form.email}
                                onChange={handleChange}
                            />
                            <label htmlFor="email">
                                Email
                            </label>
                        </div>

                        {/* Phone Number */}
                        <div className="o-input__wrapper">
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder=" "
                                required
                                value={form.phone}
                                onChange={handleChange}
                            />
                            <label htmlFor="phone">
                                Phone Number
                            </label>
                        </div>

                        {/* Treatment Type */}
                        <div className="o-input__wrapper">
                            <select
                                name="treatment"
                                id="treatment"
                                required
                                value={form.treatment}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Select treatment...</option>
                                <option value="Full Smile Makeover">Full Smile Makeover</option>
                                <option value="Ceramic Veneers">Ceramic Veneers</option>
                                <option value="Composite Bonding">Composite Bonding</option>
                                <option value="Porcelain Crowns & Bridges">Porcelain Crowns & Bridges</option>
                                <option value="Invisalign">Invisalign</option>
                                <option value="Teeth Whitening">Teeth Whitening</option>
                                <option value="Dental Implants">Dental Implants</option>
                                <option value="Tooth-coloured Fillings">Tooth-coloured Fillings</option>
                                <option value="Dental Hygiene">Dental Hygiene</option>
                                <option value="Dental Check-Up">Dental Check-Up</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="mb-6 flex space-x-2">
                        <input
                            type="checkbox"
                            name="agree"
                            id="agree"
                            checked={form.agree}
                            onChange={handleChange}
                            required
                            className="accent-[#c7caa8] w-4 h-4"
                        />
                        <label htmlFor="agree" className="text-sm">
                            By submitting your details you are agreeing to our <Link href="/privacy-policy" target="_blank" className="underline">privacy policy</Link>.
                        </label>
                        </div>

                        {/* Submit */}
                        <ButtonPrimary text="Send" type="submit" style="w-full" />
                    </div>
                </div>
            </form>
        </>
    )
}

export default ContactForm