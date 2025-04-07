'use client'

import { useState } from 'react'
import { ButtonPrimary } from '../UI/Cta'

const ContactForm = () => {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phone: '',
        treatment: '',
        agree: false
    })
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
    
        //if (!form.agree) {
          //  alert('You must agree to the privacy policy.')
            //return
        //}
    
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        })
    
        const data = await res.json();
        
        if (data.success) {
            alert('Message sent successfully!');
            setForm({ fullName: '', email: '', phone: '', treatment: '', agree: false });
        } else {
            alert('Error sending message.');
        }
    }
    
    return (
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
                <h3 className="mb-10">Schadule Your Appointment</h3>

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
                        <option value="cleaning">Full Smile Makeover</option>
                        <option value="whitening">Ceramic Veneers</option>
                        <option value="implants">Composite Bonding</option>
                        <option value="braces">Porcelain Crowns & Bridges</option>
                        <option value="checkup">Invisalign</option>
                        <option value="checkup">Teeth Whitening</option>
                        <option value="checkup">Dental Implants</option>
                        <option value="checkup">Tooth-coloured Fillings</option>
                    </select>
                </div>

                {/* Privacy Policy Agreement 
                <div className="mb-6 flex items-center space-x-2">
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
                    I agree to the <a href="/privacy-policy" className="underline">privacy policy</a>.
                </label>
                </div>*/}

                {/* Submit */}
                <ButtonPrimary text="Send" type="submit" style="w-full" />
            </div>
        </form>
    )
}

export default ContactForm