import { v4 as uuidv4 } from 'uuid'
import Instagram from '@public/icons/instagram.svg'
import Facebook from '@public/icons/facebook.svg'
import Whatsapp from '@public/icons/whatsapp.svg'
import Phone from '@public/icons/phone.svg'
import Mail from '@public/icons/mail.svg'

export const AboutDonti = {
    title: 'Welcome to Donti Dental Clinic',
    text: `<p>Located in the heart of the City of London, just steps from Bank Underground Station (Exit 6), 
            Donti Dental Clinic is a premier destination for advanced, high-quality dental treatments. 
            Our state-of-the-art clinic is equipped with the latest advancements in dentistry, 
            ensuring precision, comfort, and long-lasting results.</p>
            <p>From routine hygiene appointments to advanced cosmetic and restorative treatments—including dental implants, 
            composite bonding, Invisalign, teeth whitening, ceramic veneers, and full smile makeovers—we tailor every treatment 
            to your unique needs and goals.</p><p> At Donti, we combine expertise with a warm, welcoming atmosphere, 
            making your dental experience as seamless and stress-free as possible. Whether you’re looking to enhance your 
            smile or maintain optimal oral health, our dedicated team is here to guide you every step of the way.</p>
            <p> Get in touch today to schedule your consultation—we can’t wait to meet you!</p>`,
    imgSrc: '/images/about.jpg',
    imgAlt: 'Donti Dental Clinic',
    btnText: 'More About Donti',
    btnSrc: '/about'
}

export const AboutDoctor = {
    title: `Dr. Konstantinos Kanaridis`,
    text: `is a twice - Award winning Dentist qualified with Doctor of Dental
            Medicine degree (MDDr.). Since qualifying, he has always maintained a keen interest in continual Postgraduate training and
            education, which has broadened his horizons and skill sets into carrying out advanced restorative
            work, smile makeovers with composite/ceramic veneers, Invisalign, dental implants. Alongside
            general dentistry, he offers his patients the best possible care with impressive results. He has
            attended multiple Postgraduate courses including the Oral Implantology programme (PgCert.) by
            the London College of Oral Implantology (LCOI).`,
    imgSrc: '/images/doctor.jpg',
    imgAlt: 'Dt. Konstantinos Kanaridis',
    btnText: 'Learn More',
    btnSrc: '/doctor'
}

export const FeedbacksContent = [
    {
        id: uuidv4(),
        name: 'Peter McDermott',
        text: `Had my composite bonding done here by Dr Konstantinos and Sheila very very happy with the outcome always getting compliments. Get your self down there.`
    },
    {
        id: uuidv4(),
        name: 'Catherina Kyriacou',
        text: `I had an amazing experience in Donti clinic London. I would recommend Dr.Konstantinos for his professionalism, quality of care & outstanding premises. I had composite bonding done, and many people complimented me about them. I am absolutely delighted with the end result and really couldn’t have asked for more...`
    },
    {
        id: uuidv4(),
        name: 'Alina Putrya',
        text: `I had a great experience in Donti clinic London. Dr. Konstantinos is very professional, and what was very important for me, taking care of the smaller details and patient’s preferences. I highly recommend him!`
    }
]

export const SocialsLinksContent = [
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
    },
    {
        id: uuidv4(),
        text: 'Call us',
        linkSrc: 'tel:02035769700',
        iconComponent: <Phone />
    },
    {
        id: uuidv4(),
        text: 'Mail us',
        linkSrc: 'mailto:info@dontidentalclinic.co.uk',
        iconComponent: <Mail />
    }
]