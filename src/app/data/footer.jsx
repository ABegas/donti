import { v4 as uuidv4 } from 'uuid'
import Instagram from '@public/icons/instagram.svg'
import Facebook from '@public/icons/facebook.svg'
import Whatsapp from '@public/icons/whatsapp.svg'

export const Copyright = {
    text: 'Copyright © 2025 Donti Dental Clinic. All Rights Reserved.'
}

export const AddressInfoContent = [
    {
        title: 'Our Address:',
        text: `King William 1,<br/>
                City of London EC4N 7AR, <br/>
                United Kingdom 
                <a href="https://www.google.com/maps/dir/?api=1&destination=51.51255121018994,-0.08840383539213438" target="_blank" rel="noopener noreferrer" style="display:inline-block; transform: translateY(7px)" title="Go to Google Map">
                    <img src="/icons/google_map.svg" width="25px" height="25px">
                </a><br/>
                just steps from Bank Underground Station (Exit 6)`
    },
    {
        title: 'Contact Us:',
        text: `<span>Tel.</span>: <a href="tel:020 3576 9700" target="_blank" rel="noopener noreferrer">020 3576 9700</a><br/>
                <span>Email</span>: <a href="mailto:info@dontidentalclinic.co.uk" target="_blank" rel="noopener noreferrer">info@dontidentalclinic.co.uk</a><br/>`
    },
]

export const AddressInfoContentSocials = [
    {
        id: uuidv4(),
        text: 'instagram',
        linkSrc: 'https://www.instagram.com/dontilondon',
        iconComponent: <Instagram />
    },
    {
        id: uuidv4(),
        text: 'Facebook',
        linkSrc: 'https://www.facebook.com/dontilondon',
        iconComponent: <Facebook />
    },
    {
        id: uuidv4(),
        text: 'WhatsApp',
        linkSrc: 'https://wa.me/00447384223449',
        iconComponent: <Whatsapp />
    }
]
