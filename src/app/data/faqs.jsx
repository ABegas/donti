import { v4 as uuidv4 } from 'uuid'

export const FaqsContent = {
    title: `Frequently Asked Questions`,
    subtitle: `Everything You Want to Know Before Your Visit`,
    bannerImgSrc: '/images/faqs_banner.jpeg',
    imgAlt: 'Book your appointment',
}

export const FaqsListContent = [
    {
        id: uuidv4(),
        title: "GENERAL QUESTIONS",
        items: [
            { 
                question: "1. Are you currently accepting new patients?",
                answer: `Yes, Donti Dental Clinic is open to new patients. Whether you're looking for routine dental
                        care or a specific treatment, our experienced team is here to help. Contact us to arrange your
                        first appointment.`
            },
            { 
                question: "2. How can I book an appointment?",
                answer: `Booking is simple – you can call us, email us, or use the online system for your inquiry on
                        our website. Our team will help you find a suitable time.`
            },
            { 
                question: "3. Where is Donti Dental Clinic located?",
                answer: `We’re located in Central London, making us easily accessible by public transport. Due to
                        limited parking in the area, we highly recommend using the London Underground. The
                        closest tube stations are Bank (Exit 6) and Cannon Street, both just a short walk from the
                        clinic. If you're unsure about directions, feel free to contact us and our team will be happy to
                        help.`
            },
            { 
                question: "4. Do you provide virtual consultations?",
                answer: `Yes, we offer free virtual consultations to discuss your concerns and treatment goals before
                        visiting the clinic. It’s a convenient way to get started on your dental journey.`
            },
            { 
                question: "5. What is your cancellation policy?",
                answer: `We do charge a cancellation fee if you do not show up for your appointment or fail to
                        reschedule at least 48 hours in advance. We kindly ask that you give us enough notice if you
                        need to cancel or change your appointment, so we can offer the time to another patient in
                        need.`
            },
            { 
                question: "6. What payment options are available for treatments?",
                answer: `We offer flexible payment options, including interest-free finance.`
            },
            { 
                question: "7. Do you offer finance options?",
                answer: `Yes, we offer finance options for treatments, with a maximum term of up to 12 months at
                        0% interest (subject to approval). This allows you to spread the cost of your dental care
                        comfortably.`
            },
            { 
                question: "8. Do you offer in-house instalment plans?",
                answer: `No, we do not offer in-house instalment plans. However, we do have external finance
                        options available.`
            },
            { 
                question: "9. What is your policy for rescheduling or canceling an appointment?",
                answer: `We kindly ask that you provide at least 48 hours' notice if you need to cancel or reschedule your
                        appointment. This allows us to offer the time slot to another patient in need. Failure to give 48
                        hours' notice may result in a cancellation fee.`
            },
            ,
            { 
                question: "10. Do you offer cosmetic dentistry services?",
                answer: `Yes, we offer a full range of cosmetic treatments, including teeth whitening, composite bonding,
                        Invisalign, and porcelain veneers. Each treatment is tailored to your needs, and we’ll discuss your
                        options in a consultation to ensure the best fit for you.`
            },
        ],
        isOpen: true
    },
    {
        id: uuidv4(),
        title: "Composite Bonding",
        items: [
            { 
                question: "1. What is composite bonding?",
                answer: `Composite bonding is a cosmetic dental procedure that uses a tooth-coloured resin material to
                        improve the shape, size, or colour of teeth. It’s ideal for repairing chips, closing small gaps, and
                        enhancing your smile without invasive treatment.`
            },
            { 
                question: "2. Is composite bonding painful?",
                answer: `No, composite bonding is generally a pain-free procedure. In most cases, it doesn’t require any
                        drilling or anaesthesia, making it a comfortable option for many patients.`
            },
            { 
                question: "3. How long does composite bonding last?",
                answer: `With proper care, composite bonding can last between 3 to 7 years. Its longevity depends on factors
                        like oral hygiene, dietary habits, and whether you grind your teeth.`
            },
            { 
                question: "4. Can bonding stain or discolour over time?",
                answer: `Yes, composite material is more prone to staining than natural teeth, especially with frequent
                        consumption of coffee, tea, red wine, or smoking. Regular hygiene appointments and avoiding
                        staining foods can help maintain their appearance.`
            },
            { 
                question: "5. How long does the procedure take?",
                answer: `In most cases, composite bonding can be completed in two visit, depending on how many teeth are
                        being treated.`
            },
            { 
                question: "6. Is composite bonding reversible?",
                answer: `In most cases, composite bonding can be completed in one or two visits, depending on the number
                        of teeth treated and the complexity of the procedure.`
            },
            { 
                question: "7. Can I whiten bonded teeth?",
                answer: `No, composite material does not respond to whitening treatments. If you're considering whitening,
                        it's best to do this before bonding so we can match the composite to your newly whitened teeth.`
            },
            { 
                question: "8. How do I take care of my bonded teeth?",
                answer: `Care for bonded teeth just like your natural ones: brush twice daily, floss regularly, and avoid biting
                        hard objects. Routine dental check-ups will help keep your bonding in great condition.`
            },
            { 
                question: "9. Is composite bonding suitable for everyone?",
                answer: `While composite bonding is a great option for many people, it may not be suitable for those with
                        extensive dental damage or misalignment. A full consultation will help us assess your smile and
                        recommend the most suitable solution for your needs.`
            },
            { 
                question: "10. How much does composite bonding cost?",
                answer: `The cost of composite bonding depends on how many teeth are being treated and the complexity of
                        the case. At Donti Dental Clinic, we frequently run special offers and promotions, so we
                        recommend contacting us directly to find out our current pricing and any available discounts. We
                        also offer flexible finance options to help spread the cost of treatment.`
            },
        ]
    },
    {
        id: uuidv4(),
        title: "Ceramic & Ultra-Thin Porcelain Veneers",
        items: [
            { 
                question: "1. What are ceramic veneers?",
                answer: `Ceramic veneers are thin, custom-made shells crafted from high-quality porcelain that are bonded to
                        the front surface of your teeth to improve their shape, size, colour, or alignment. They’re a popular
                        option for achieving a natural-looking, long-lasting smile transformation.`
            },
            { 
                question: "2. What are ultra-thin porcelain veneers?",
                answer: `Ultra-thin veneers are a more conservative alternative to traditional ceramic veneers. Made from
                        advanced, durable porcelain, they require little to no tooth reduction, making them ideal for patients
                        who want a minimally invasive smile enhancement.`
            },
            { 
                question: "3. What’s the difference between ceramic and ultra-thin veneers?",
                answer: `The main difference is the thickness and how much natural tooth structure needs to be removed.
                        Ultra-thin veneers often require no or very minimal enamel removal, while traditional ceramic
                        veneers usually involve a small amount of tooth preparation for a perfect fit.`
            },
            { 
                question: "4. Are veneers painful to get?",
                answer: `Getting veneers is typically not painful. We use local anaesthetic during the preparation phase (if
                        needed) to ensure you're completely comfortable. Ultra-thin veneers may not require any
                        anaesthetic at all, depending on the case. Some mild discomfort or sensitivity may occur after the
                        procedure, but it usually subsides within a few days.`
            },
            { 
                question: "5. How long do veneers last?",
                answer: `With good care, ceramic and ultra-thin veneers can last 10–15 years or longer. Regular dental
                        check-ups, proper oral hygiene, and avoiding habits like biting hard objects can help extend their
                        lifespan.`
            },
            { 
                question: "6. Can veneers stain like natural teeth?",
                answer: `Porcelain veneers are highly resistant to staining compared to natural teeth. However, maintaining
                        good oral hygiene and limiting consumption of staining substances like coffee, tea, and red wine is
                        still recommended.`
            },
            { 
                question: "7. Who is a good candidate for veneers?",
                answer: `Veneers are ideal for patients looking to improve the appearance of chipped, discoloured, uneven, or
                        slightly misaligned teeth. We’ll assess your suitability during a personalised consultation to ensure
                        veneers are the right option for your smile goals.`
            },
            { 
                question: "8. How many appointments are needed for veneers?",
                answer: `The process typically involves 2–3 appointments: an initial consultation, a preparation appointment
                        (if needed), and a final fitting.`
            },
            { 
                question: "9. Are veneers permanent?",
                answer: `Yes, veneers are considered a permanent treatment because a small layer of enamel is usually
                        removed to place them securely. This means the process is not reversible.`
            },
            { 
                question: "10. How much do veneers cost?",
                answer: `Veneer pricing depends on the number of teeth involved and the type of veneer chosen. At Donti
                        Dental Clinic, we regularly offer cosmetic packages — please get in touch with us for our current
                        offers and finance plans.`
            },
        ]
    },
    {
        id: uuidv4(),
        title: "Invisalign",
        items: [
            { 
                question: "1. What is Invisalign?",
                answer: `Invisalign is a modern orthodontic treatment that uses a series of custom-made, clear aligners to
                        gradually straighten your teeth. It’s a discreet alternative to traditional metal braces and is
                        removable, making it ideal for adults and teens alike.`
            },
            { 
                question: "2. How does Invisalign work?",
                answer: `You’ll receive a series of clear aligners that you wear for 1–2 weeks at a time. Each set gently
                        moves your teeth closer to their final position. You’ll visit us every few weeks so we can monitor
                        your progress and provide your next sets of aligners.`
            },
            { 
                question: "3. Is Invisalign painful?",
                answer: `Invisalign is generally comfortable, though you may experience mild pressure when switching to a
                        new set of aligners. This is a sign that the treatment is working. Any discomfort typically fades
                        within a day or two.`
            },
            { 
                question: "4. How long does Invisalign treatment take?",
                answer: `Treatment time varies depending on your specific case, but most patients complete Invisalign in 6 to
                        18 months. You’ll receive a personalised treatment plan during your consultation.`
            },
            { 
                question: "5. How often do I need to wear the aligners?",
                answer: `For best results, you should wear your aligners for 20–22 hours per day, only removing them for
                        eating, drinking (except water), brushing, and flossing.`
            },
            { 
                question: "6. Can I eat and drink with the aligners in?",
                answer: `No — you should remove your aligners before eating or drinking anything besides water. This helps
                        prevent staining and damage. Always brush your teeth before putting the aligners back in.`
            },
            { 
                question: "7. Is Invisalign suitable for everyone?",
                answer: `Invisalign can treat most mild to moderate alignment issues, including gaps, crowding, and bite
                        problems. However, treatment suitability depends on individual cases, and we will assess your
                        needs during your consultation to determine if Invisalign is the right choice for you.`
            },
            { 
                question: "8. How do I clean my aligners?",
                answer: `Clean your aligners daily using lukewarm water and a soft toothbrush. Avoid hot water, which can
                        warp the plastic. Invisalign also offers cleaning crystals for a deeper clean.`
            },
            { 
                question: "9. Will I need retainers after Invisalign?",
                answer: `Yes, wearing retainers after treatment is essential to maintain your new smile. We’ll provide you
                        with custom retainers and instructions on how often to wear them to prevent teeth from shifting.`
            },
            { 
                question: "10. How much does Invisalign cost?",
                answer: `The cost of Invisalign varies depending on the complexity of your case. After your consultation,
                        we’ll provide a personalised treatment plan and a more accurate quote. We also offer free initial
                        video consultations, flexible payment plans, and run regular promotions, so contact us to learn about
                        our current offers.`
            },
        ]
    },
    {
        id: uuidv4(),
        title: "Dental Implants",
        items: [
            { 
                question: "1. What are dental implants?",
                answer: `Dental implants are a long-term solution for replacing missing teeth. They consist of a titanium post
                        that’s placed in the jawbone to act as a root, topped with a natural-looking crown. Implants look,
                        feel, and function like real teeth.`
            },
            { 
                question: "2. Who is a suitable candidate for dental implants?",
                answer: `Most healthy adults with one or more missing teeth can be candidates for implants. During your
                        consultation, we will assess your oral health, bone density, and any other factors that might affect
                        suitability. If bone loss is an issue, bone grafting may be recommended.`
            },
            { 
                question: "3. What are the benefits of dental implants?",
                answer: `Implants are strong, durable, and help maintain jawbone health. They restore full chewing function,
                        prevent bone loss, and don’t affect surrounding teeth like traditional bridges. Plus, they offer a
                        highly natural appearance.`
            },
            { 
                question: "4. How long does the dental implant process take?",
                answer: `The process typically takes several months, but treatment time may vary depending on your specific
                        case. Some patients may be eligible for same-day implants, while others may require additional
                        procedures, like bone grafting.`
            },
            { 
                question: "5. Is getting a dental implant painful?",
                answer: `The implant procedure is performed under local anaesthetic, so it’s generally not painful. Mild
                        discomfort or swelling is normal in the days following surgery and can be managed with over-the-
                        counter pain relief.`
            },
            { 
                question: "6. How long do dental implants last?",
                answer: `With proper care, dental implants can last 10–20 years or even a lifetime. Regular check-ups, good
                        oral hygiene, and avoiding smoking all contribute to long-term success.`
            },
            { 
                question: "7. How do I care for dental implants?",
                answer: `Implants should be brushed and flossed like natural teeth. Routine check-ups and hygienist visits
                        will help keep the implant and surrounding gum healthy.`
            },
            { 
                question: "8. What’s the difference between implants and dentures or bridges?",
                answer: `Unlike dentures, implants are fixed in place and don’t move or need adhesives. Compared to
                        bridges, implants don’t require altering neighbouring teeth. They’re considered the most durable
                        and natural-feeling solution.`
            },
            { 
                question: "9. Are there risks or complications with implants?",
                answer: `As with any surgical procedure, dental implants carry some risks, including infection, implant
                        failure, or nerve damage. However, these complications are rare. During your consultation, we will
                        thoroughly assess your case to ensure you're fully informed of the risks and to discuss all treatment
                        options. We use advanced techniques to minimise complications and ensure the highest standard of
                        care.`
            },
            { 
                question: "10. How much do dental implants cost?",
                answer: `The cost of dental implants depends on the number of implants needed, any additional treatments
                        (such as bone grafting), and the final restoration. After a consultation, we’ll provide a tailored
                        treatment plan with an accurate cost estimate. We also offer flexible finance options and occasional
                        promotions, so contact us to learn about current pricing.`
            },
        ]
    },
    {
        id: uuidv4(),
        title: "Teeth Whitening",
        items: [
            { 
                question: "1. What types of teeth whitening do you offer?",
                answer: `At Donti Dental Clinic, we offer two professional whitening options:
                        <ul>
                        <li>• Philips Zoom In-Surgery Whitening – a fast, powerful treatment performed in the clinic
                        for instant results.</li>
                        <li>• Boutique Whitening – a customised at-home system that allows you to whiten your teeth
                        gradually over 1–2 weeks.</li></ul>`
            },
            { 
                question: "2. What’s the difference between in-surgery and at-home whitening?",
                answer: `Philips Zoom offers immediate results in a single appointment using a special light-activated gel.
                        Boutique Whitening, on the other hand, uses custom trays and gel you wear at home, usually
                        overnight or for a few hours a day. Both deliver excellent results – the right option depends on your
                        lifestyle and preferences.`
            },
            { 
                question: "3. Is teeth whitening safe?",
                answer: `Teeth whitening is generally safe when carried out by a dental professional. However, a full
                        consultation and assessment of your oral health are required before proceeding, as whitening may
                        not be suitable for everyone.`
            },
            { 
                question: "4. Will whitening make my teeth sensitive?",
                answer: `Some patients may experience temporary sensitivity, especially during or just after treatment. This
                        usually subsides within 24–48 hours. We provide advice and products to help reduce sensitivity if
                        needed.`
            },
            { 
                question: "5 How white will my teeth get?",
                answer: `The degree of whitening will vary depending on your tooth structure and the type of staining. Your
                        dentist will discuss expected results and assess what is achievable during your consultation.`
            },
            { 
                question: "6. How long do results last?",
                answer: `With good oral hygiene and occasional top-ups, your whitening results can last 6–12 months or
                        longer. Avoiding staining foods, drinks, and smoking can help maintain your brighter smile.`
            },
            { 
                question: "7. Can I whiten crowns, veneers, or fillings?",
                answer: `No, whitening products only work on natural teeth. If you have visible dental work, we’ll discuss
                        how to match the shade for a consistent smile.`
            },
            { 
                question: "8. How soon can I eat or drink after whitening?",
                answer: `After whitening (especially Zoom), we recommend avoiding strongly coloured foods and drinks
                        (like coffee, red wine, or curry) for 24–48 hours while your enamel is more porous and prone to
                        staining.`
            },
            { 
                question: "9. Is Boutique Whitening better than over-the-counter kits?",
                answer: `Yes – Boutique Whitening is prescribed by a dentist and uses a stronger, clinically tested gel
                        tailored to your needs. It's safer and far more effective than shop-bought products.`
            },
            { 
                question: "10. How much does teeth whitening cost?",
                answer: `Our whitening treatments are competitively priced and we often run special offers. Contact us to
                        learn more about current prices and promotions for both in-surgery and at-home whitening options.`
            },
        ]
    },
]