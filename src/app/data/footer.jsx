import { v4 as uuidv4 } from 'uuid'

export const Copyright = {
    text: 'Copyright © 2025 Donti Dental Clinic. All Rights Reserved.'
}

export const FooterUtitlityLinks = [
    {
        id: uuidv4(),
        text: 'Terms & Conditions',
        url: '/terms-conditions'
    },
    {
        id: uuidv4(),
        text: 'Privacy Policy',
        url: '/privacy-policy'
    },
    {
        id: uuidv4(),
        text: 'Cookie Policy',
        url: '/cookie-policy'
    }
]

export const AddressInfoContent = [
    {
        title: 'Our Address:',
        text: `King William 1,<br/>
                City of London EC4N 7AR, <br/>
                United Kingdom 
                <a href="https://www.google.com/maps/dir/?api=1&destination=51.51255121018994,-0.08840383539213438" target="_blank" rel="noopener noreferrer" style="display:inline-block; transform: translateY(7px)" title="Go to Google Map">
                    <img src="/icons/google_map.svg" width="25px" height="25px">
                </a>`
    },
    {
        title: 'Contact Us:',
        text: `<a href="tel:020 3576 9700" target="_blank" rel="noopener noreferrer">020 3576 9700</a><br/>
                <a href="mailto:info@dontidentalclinic.co.uk" target="_blank" rel="noopener noreferrer">info@dontidentalclinic.co.uk</a>`
    }
]
