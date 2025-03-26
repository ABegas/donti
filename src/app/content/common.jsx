import { v4 as uuidv4 } from 'uuid'

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
        name: 'Maria L.',
        text: `I've always been nervous about going to the dentist, but the team here completely changed that. They were gentle, explained everything clearly, and made me feel comfortable the entire time. Highly recommended!`
    },
    {
        id: uuidv4(),
        name: 'James T.',
        text: `From the moment I walked in, I felt welcomed and well cared for. The clinic is spotless, the technology is modern, and the staff are incredibly professional. My teeth have never looked better!`
    },
    {
        id: uuidv4(),
        name: 'Sophie K.',
        text: `Excellent service from start to finish. I had a full cleaning and whitening done, and I couldn’t be happier with the results. I actually look forward to my next visit!`
    }
]