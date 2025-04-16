import { v4 as uuidv4 } from 'uuid'

export const FeesContent = {
    title: `Our Pricing & Smile Packages`,
    subtitle: `Exceptional dental care with transparent pricing. Discover the perfect treatment plan for your smile.`,
    topText: `At Donti Dental Clinic, we believe in transparency with our pricing. This guide
            provides a general idea of our treatment costs. Please note that prices may vary
            depending on the complexity of the treatment and the materials used. After your
            consultation, you will receive a detailed, itemized treatment plan tailored to your
            specific needs.`,
    text: `We also offer 12 months of 0% APR finance, making your dream smile more affordable than ever!
            Our financing is easy to apply for, with a quick and simple eligibility check that only requires a light
            credit check—so you can get started on your journey to a confident smile without any hassle`,
    bannerImgSrc: '/images/about_2.jpg',
    imgAlt: 'Book your appointment',
    bgContnentImg: '/images/bg_2.jpg',
    notation: 'Smile package prices may vary based on case complexity for Invisalign and the number of teeth for composite bonding. A precise quote will be given after your consultation.'
}

export const PriceListContent = [
    {
        id: uuidv4(),
        title: "General Dental Care",
        items: [
            { name: "New Patient Consultation", price: "£125" },
            { name: "Routine Examination", price: "£85" },
            { name: "Emergency Appointment", price: "£125" },
            { name: "Children's Examination (under 16 years)", price: "£75" },
            { name: "Small X-ray:", price: "£22" },
            { name: "Panoramic X-ray (OPG)", price: "£105" },
            { name: "Cone Beam CT Scan", price: "From £155" }
        ],
        isOpen: true
    },
    {
        id: uuidv4(),
        title: "Hygiene Services",
        items: [
            { name: "Standard Hygiene Session (Scaling and Polishing)", price: "£100" },
            { name: "Hygiene Session with Air Flow Polishing", price: "£125" },
            { name: "Composite Maintenance Session", price: "£190" },
            { name: "Periodontal Scaling and Root Planing by General Dental Practitioner (per quadrant)", price: "From £125" }
        ]
    },
    {
        id: uuidv4(),
        title: "Cosmetic Dentistry",
        items: [
            { name: "Composite Bonding (per tooth)", price: "£345", description: "(Please inquire for discounts on smile makeovers)" },
            { name: "Ceramic Veneers (per tooth)", price: "From £925", description: "(Please inquire for discounts on smile makeovers)" },
            { name: "Ultra-Thin Porcelain Veneer (per tooth)", price: "£1,250", description: "(Please inquire for discounts on smile makeovers)" },
            { name: "Home Whitening Kit with Custom Trays", price: "£405" },
            { name: "Zoom In-Office Teeth Whitening", price: "£610" },
            { name: "Combined Whitening (In-office + Home Kit)", price: "£710" }
        ]
    },
    {
        id: uuidv4(),
        title: "Dental Restoration",
        items: [
            { name: "White Composite Fillings", price: "From £130" },
            { name: "Inlays and Onlays", price: "From £925" },
            { name: "Full Ceramic Crowns (per tooth)", price: "From £925" },
            { name: "Full Ceramic Bridges (per unit)", price: "From £925" },
            { name: "Partial Flexible Denture", price: "From £925" },
            { name: "Full Denture (per arch)", price: "From £1,250" }
        ]
    },
    {
        id: uuidv4(),
        title: "Root Canal Treatments",
        items: [
            { name: "Incisor (Front Tooth)", price: "£675" },
            { name: "Premolar (Side Tooth)", price: "£810" },
            { name: "Molar (Back Tooth)", price: "£990" }
        ]
    },
    {
        id: uuidv4(),
        title: "Extractions",
        items: [
            { name: "Routine Extraction", price: "£250" },
            { name: "Surgical/Complex Extraction", price: "£475" },
            { name: "Wisdom Tooth Extraction", price: "From £575" },
            { name: "Extraction with Socket Preservation", price: "£875" }
        ]
    },
    {
        id: uuidv4(),
        title: "Invisalign Clear Aligners",
        items: [
            { name: "Please inquire for discounts on smile makeovers", price: "From £3,500" }
        ]
    },
    {
        id: uuidv4(),
        title: "Dental Implants & Bone Grafting",
        items: [
            { name: "Dental Implant (Per Implant, including Implant Crown)", price: "From £2,750" },
            { name: "Socket Preservation Bone Graft (Including Extraction)", price: "£875" }
        ]
    },
    {
        id: uuidv4(),
        title: "Other Treatments",
        items: [
            { name: "Fibre Post and Build-Up (per tooth)", price: "£375" },
            { name: "Fixed Retainer (per arch)", price: "£215" },
            { name: "Removable Retainer (per arch)", price: "£240" },
            { name: "Night Guard", price: "£265" },
            { name: "Sports Mouthguard", price: "£220" },
            { name: "Prescription Issuance", price: "£18" }
        ]
    }
]

export const PackagesListContent = [
    {
      title: "Donti Natural Glow Package",
      services: "&nbsp;&nbsp;&nbsp;Invisalign<br/> + Teeth Whitening",
      price: '£3,600',
      description: "Perfect for enhancing your natural smile with subtle whitening and alignment.",
    },
    {
      title: "Donti Signature Smile Package",
      services: "&nbsp;&nbsp;&nbsp;Invisalign<br/> + Teeth Whitening<br/> + 8 Upper Composite Bonding",
      price: '£4,200',
      description: "Achieve a brighter, straighter smile with additional bonding for upper teeth.",
    },
    {
      title: "Donti Full Smile Package",
      services: "&nbsp;&nbsp;&nbsp;Invisalign<br/> + Teeth Whitening<br/> + 8 Upper & 8 Lower Composite &nbsp;&nbsp;&nbsp;Bonding",
      price: '£5,800',
      description: "Our most complete package for a fully enhanced and confident smile.",
    },
];