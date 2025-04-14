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
    btnText: 'Read More',
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

export const ServiceLinksContent = [
    {
        id: uuidv4(),
        title: 'Terms & Conditions',
        url: '/terms-conditions',
        dateStart: '5th of April 2025',
        dateUpdate: '12th of April 2025',
        text: `<ul>
                    <li>
                        <h4>1. Introduction</h4>
                        <div><p>These terms and conditions govern your use of the website <a href="https://dontidentalclinic.co.uk" title="DontiDentalClinic">https://dontidentalclinic.co.uk</a> ("the
                            Website"). By accessing or using the Website, you agree to comply with and be bound by these
                            terms and conditions. If you do not agree with these terms, please do not use the Website.</p>
                        </div>
                    </li>
                    <li>
                        <h4>2. Use of Website</h4>
                        <div><p>You agree to use this Website in accordance with applicable laws and regulations. You must not:</p>
                            <ul>
                                <li>Use the Website for any unlawful or malicious purposes.</li>
                                <li>Attempt to gain unauthorised access to any servers or systems.</li>
                                <li>Misrepresent yourself as another person or entity.</li>
                                <li>Upload or distribute harmful code, viruses, or other malicious content.</li>
                            </ul>
                            <p>We reserve the right to suspend or terminate your access to the Website at any time if we believe
                            you have violated these terms.</p>
                        </div>
                    </li>
                    <li>
                        <h4>3. Accuracy of Information</h4>
                        <div><p>While we strive to ensure that the information on our Website is accurate, complete, and up to date,
                            we do not guarantee the accuracy, reliability, or completeness of the content. The information
                            provided on the Website is for general informational purposes only and should not be considered a
                            substitute for professional dental or medical advice. Always seek professional dental advice and
                            guidance directly from us for any clinical concerns.</p>
                        </div>
                    </li>
                    <li>
                        <h4>4. Intellectual Property</h4>
                        <div><p>All content available on the Website, including but not limited to logos, text, images, graphics,
                            designs, videos, and software, is the property of <strong>Donti Dental Clinic</strong> or its licensors. You may not
                            copy, modify, distribute, or use any of the materials on the Website without prior written consent
                            from <strong>Donti Dental Clinic</strong>.</p>
                        </div>
                    </li>
                    <li>
                        <h4>5. Appointments</h4>
                        <div><p>Submitting a booking request through our Website does not guarantee an appointment. Your
                            appointment will only be confirmed once we contact you directly to verify and confirm the booking.
                            We recommend checking your confirmation email for details on the confirmed appointment.</strong>.</p>
                        </div>
                    </li>
                    <li>
                        <h4>6. Cancellation and Rescheduling Policy</h4>
                        <div><p>We require <strong>48 hours' notice</strong> for any cancellations or changes to your appointment. If you cancel or
                            reschedule your appointment with less than <strong>48 hours' notice</strong>, or fail to attend your appointment,
                            you may be charged a cancellation fee, which will be communicated at the time of booking.</p>
                            <p>We understand that unexpected circumstances can arise, and we will do our best to accommodate
                            changes to your appointment whenever possible. However, the 48-hour notice period ensures that
                            we can offer appointments to other patients who may need them.</p>
                        </div>
                    </li>
                    <li>
                        <h4>7. Liability</h4>
                        <div><p>To the fullest extent permitted by law, <strong>Donti Dental Clinic</strong> shall not be liable for any:</p>
                            <ul>
                                <li>Loss or damage arising from the use of or reliance on any content or information provided on the Website.</li>
                                <li>Loss or damage resulting from your inability to access the Website, errors or omissions in
                                    the content, or interruptions in service.</li>
                                <li>Loss or damage arising from third-party websites linked to our Website.</li>
                            </ul>
                            <p><strong>Donti Dental Clinic</strong> does not guarantee uninterrupted or error-free access to the Website and will
                            not be held responsible for any disruptions in service.</p>
                        </div>
                    </li>
                    <li>
                        <h4>8. Third-Party Links</h4>
                        <div><p>Our Website may contain links to third-party websites. These links are provided for your
                            convenience and informational purposes only. <strong>Donti Dental Clinic</strong> does not control, monitor, or
                            endorse the content, accuracy, or privacy practices of any third-party websites. We are not
                            responsible for any content or services offered by these external sites.</p>
                        </div>
                    </li>
                    <li>
                        <h4>9. Changes to Terms</h4>
                        <div><p>We may amend or update these Terms and Conditions at any time, and such changes will be
                            effective immediately upon posting to the Website. We encourage you to review this page
                            periodically to stay informed of any updates. Your continued use of the Website after any
                            modifications to these terms constitutes your acceptance of those changes.</p>
                        </div>
                    </li>
                    <li>
                        <h4>10. Governing Law</h4>
                        <div><p>These Terms and Conditions are governed by the laws of <strong>England and Wales</strong>. Any disputes arising
                            out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of
                            <strong>England and Wales</strong>.</p>
                        </div>
                    </li>
                </ul>
                <div>
                    <h5>Contact Information:</h5>
                    <p>If you have any questions about these Terms and Conditions or need assistance, please contact us at:</p>
                    <ul>
                        <li><strong>Email: <a href="mailto:info@dontidentalclinic.co.uk" target="_blank">info@dontidentalclinic.co.uk</a></strong></li>
                        <li><strong>Phone: <a href="tel:020 3576 9700" target="_blank">020 3576 9700</a></strong></li>
                        <li><strong>Website: <a href="https://dontidentalclinic.co.uk" target="_blank">www.dontidentalclinic.co.uk</a></strong></li>
                    </ul>
                </div>`
    },
    {
        id: uuidv4(),
        title: 'Privacy Policy',
        url: '/privacy-policy',
        dateStart: '5th of April 2025',
        dateUpdate: '12th of April 2025',
        text: `<div>
                    <p><strong>Donti Dental Clinic</strong> ("we", "our", or "us") is committed to protecting and respecting your privacy.
                        This Privacy Policy explains how we collect, use, and protect personal information obtained from
                        visitors to our website: <a href="https://dontidentalclinic.co.uk">www.dontidentalclinic.co.uk</a> ("the Website").</p>
                        <p>By using our Website, you agree to the terms outlined in this Privacy Policy. If you do not agree
                        with these terms, please do not use our Website.</p>
                </div>
                <ul>
                    <li>
                        <h4>1. Information We Collect</h4>
                        <div><p>When you use our Website, we may collect the following types of information:</p>
                            <ul>
                                <li><strong>Personal Information:</strong> When you fill out the "Schedule Your Appointment" form or other
                                    contact forms on our website, we may collect your full name, email address, phone number,
                                    and any other information you choose to provide.</li>
                                <li><strong>Usage Information:</strong> We may collect information about how you interact with our website,
                                    such as the pages you visit, time spent on the site, and other analytical data to help us
                                    improve your experience.</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <h4>2. How We Use Your Information</h4>
                        <div><p>We use the information we collect for the following purposes:</p>
                            <ul>
                                <li><strong>To Respond to Your Inquiries:</strong> We use your personal information to contact you in
                                    response to inquiries submitted via our "Schedule Your Appointment" form or similar
                                    communication forms on our site.</li>
                                <li><strong>For Communication:</strong> We may use your contact information to send you relevant updates,
                                    appointment reminders, or information related to our dental services.</li>
                                <li><strong>To Improve Our Services:</strong> We use usage data to analyse how our website is used and to
                                    make improvements to the site’s functionality and user experience.</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <h4>3. Legal Basis for Processing</h4>
                        <div><p>We process your personal information based on the following legal grounds:</p>
                            <ul>
                                <li><strong>Consent:</strong> When you submit information via our forms, you provide your consent for us to
                                    process your personal data.</li>
                                <li><strong>Legitimate Interests:</strong> We have a legitimate interest in communicating with you and
                                    improving our services and Website functionality.</li>
                                <li><strong>Compliance with Legal Obligations:</strong> We may process your personal information to comply
                                    with applicable laws, including regulations set by the <strong>General Dental Council (GDC).</strong></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <h4>4. How We Share Your Information</h4>
                        <div>
                            <p>We do not sell your personal information to third parties. However, we may share your information with the following:</p>
                            <ul>
                                <li><strong>Service Providers:</strong> We may share your information with trusted third-party service
                                    providers who help with the operation of our Website or business.</li>
                                <li><strong>Legal Authorities:</strong> We may disclose your information to law enforcement or other
                                    authorities as required by law or to respond to legal requests.</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <h4>5. Data Security</h4>
                        <div>
                            <p>We take reasonable measures to protect the confidentiality and security of your personal
                            information. However, no data transmission over the Internet or electronic storage is completely
                            secure, and we cannot guarantee absolute security.</p>
                        </div>
                    </li>
                    <li>
                        <h4>6. Your Rights</h4>
                        <div>
                            <p>Under UK <strong>GDPR</strong>, you have the following rights with respect to your personal information:</p>
                            <ul>
                                <li><strong>Right to Access:</strong> You can request access to the personal information we hold about you.</li>
                                <li><strong>Right to Rectification:</strong> You can request corrections to any inaccurate or incomplete personal information.</li>
                                <li><strong>Right to Erasure:</strong> You have the right to request that we delete your personal information, subject to certain legal conditions.</li>
                                <li><strong>Right to Restrict Processing:</strong> You can request limitations on how we process your personal information.</li>
                                <li><strong>Right to Data Portability:</strong> You can request to receive your personal data in a structured, commonly used, and machine-readable format.</li>
                                <li><strong>Right to Object:</strong> You can object to certain types of processing, including direct marketing.</li>
                            </ul>
                            <p>To exercise these rights, please contact us at: <a href="mailto:info@dontidentalclinic.co.uk.">info@dontidentalclinic.co.uk</a>.</p>
                        </div>
                    </li>
                    <li>
                        <h4>7. Changes to This Privacy Policy</h4>
                        <div><p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                                requirements. Any significant changes will be posted on this page, and we will update the "Last
                                updated" date at the top of this policy.</p>
                        </div>
                    </li>
                    <li>
                        <h4>8. Contact Information</h4>
                        <div>
                            <p>If you have any questions or concerns about this Privacy Policy, or if you wish to exercise your rights, please contact us at:</p>
                            <ul>
                                <li><strong>Email:</strong> <a href="mailto:info@dontidentalclinic.co.uk" target="_blank">info@dontidentalclinic.co.uk</a></li>
                                <li><strong>Phone:</strong> <a href="tel:020 3576 9700" target="_blank">020 3576 9700</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <h4>9. Data Collected Through Facebook Lead Ads</h4>
                        <div>
                            <p>If you submit your information through our Facebook Lead Ads, we collect the following:</p>
                            <ul>
                                <li><strong>Personal Information:</strong>Full name, email address, and phone number.</li>
                                <li><strong>Purpose of Collection:</strong> To respond to your inquiries, provide relevant updates about our
                                    services, and contact you for appointment scheduling, promotions, or service updates.</li>
                                <li><strong>Legal Basis for Processing:</strong>
                                    <ul>
                                        <li><strong>Consent:</strong> By submitting your information, you consent to our use of your data as described above.</li>
                                        <li><strong>Legitimate Interest:</strong> We may contact you about our services as part of our ongoing customer care and communications.</li>
                                    </ul>
                                </li>
                                <li><strong>Data Protection:</strong> We securely store your data and ensure it is only accessible by authorised personnel.</li>
                            </ul>
                            <p>If you have any concerns about how we use your information submitted through Facebook Lead Ads, please contact us at:</p>
                            <ul>
                                <li><strong>Email:</strong> <a href="mailto:info@dontidentalclinic.co.uk" target="_blank">info@dontidentalclinic.co.uk</a></li>
                                <li><strong>Phone:</strong> <a href="tel:020 3576 9700" target="_blank">020 3576 9700</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>`
    },
    {
        id: uuidv4(),
        title: 'Cookies Policy',
        url: '/cookies-policy',
        dateStart: '5th of April 2025',
        dateUpdate: '12th of April 2025',
        text: `
            <ul>
                <li>
                    <h4>1. What Are Cookies?</h4>
                    <p>Cookies are small text files stored on your device (computer, tablet, or mobile) when you
                        visit a website. They help us understand user behaviour, improve functionality, and offer a
                        personalised experience.</p>
                    <p>Cookies can be:</p>
                    <ul>
                        <li>Session cookies: Deleted when you close your browser</li>
                        <li>Persistent cookies: Remain on your device until they expire or you delete them</li>
                    </ul>
                </li>
                <li>
                    <h4>2. Types of Cookies We Use</h4>
                    <p>a) Strictly Necessary Cookies</p>
                    <p>These cookies are essential for the operation of our website and cannot be switched
                    off in our systems. They are typically only set in response to actions made by you (e.g.,
                    cookie preferences or form submissions).</p>
                    <p>Examples:</p>
                    <ul>
                        <li>Session management</li>
                        <li>Consent tracking</li>
                    </ul>
                    <p>b) Analytics/Performance Cookies</p>
                    <p>These cookies help us understand how visitors use our site so we can measure and
                        improve performance. All data collected is anonymised.</p>
                    <p>We use:</p>
                    <ul>
                        <li>Google Analytics: Tracks page visits, time on site, and user interaction</li>
                    </ul>
                
                    <p>c) Functionality Cookies</p>
                    <p>These cookies allow the website to remember choices you make (e.g., your location or
                        language) and provide enhanced, more personal features.</p>
                
                    <p>d) Marketing/Third-Party Cookies</p>
                    <p>We do not currently use advertising cookies. However, third-party services (such as
                        embedded YouTube videos or Google Maps) may set cookies governed by their own
                        policies. If we introduce any marketing cookies in the future, we will request your explicit
                        consent.</p>
                </li>
                <li>
                    <h4>3. Cookies We Use (Examples)</h4>
                    <p>_ga, _gid, _gat - Google Analytics - site usage tracking - Up to 2 years - Analytics</p>
                    <p>cookie_notice_accepted - Records your cookie consent decision - 30 days - Strictly Necessary</p>
                </li>
                <li>
                    <h4>4. Managing Your Cookie Preferences</h4>
                    <p>When you first visit our Website, a cookie consent banner appears allowing you to:</p>
                    <ul>
                        <li>Accept all cookies</li>
                        <li>Reject non-essential cookies</li>
                        <li>Customise your preferences</li>
                    </ul>
                    <p>You can also manage cookies via your browser settings. For more guidance, visit: <a href="https://www.aboutcookies.org" target="_blank">https://www.aboutcookies.org</a></p>
                    <p>Please note: Blocking some types of cookies may impact your user experience on our site.</p>
                </li>
                <li>
                    <h4>5. Updates to This Policy</h4>
                    <p>We may update this Cookies Policy from time to time to reflect changes in regulations,
                        technology, or our business practices. We encourage you to revisit this page periodically.</p>
                </li>
                <li>
                    <h4>6. Contact Us</h4>
                    <p>If you have any questions about this Cookies Policy or how we use cookies, please contact:</p>
                    <p>
                        Donti Dental Clinic<br/>
                        Address: King William 1, City of London, EC4N 7AR, UK
                    </p>
                    <ul>
                        <li><strong>Email: <a href="mailto:info@dontidentalclinic.co.uk" target="_blank">info@dontidentalclinic.co.uk</a></strong></li>
                        <li><strong>Phone: <a href="tel:020 3576 9700" target="_blank">020 3576 9700</a></strong></li>
                        <li><strong>Website: <a href="https://dontidentalclinic.co.uk" target="_blank">www.dontidentalclinic.co.uk</a></strong></li>
                    </ul>
                </li>
            </ul>
        `
    }
]