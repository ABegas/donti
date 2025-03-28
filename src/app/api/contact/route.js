import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const { fullName, email, phone, treatment, agree } = body;

  if (!fullName || !email || !phone || !treatment || !agree) {
    return Response.json({ success: false, error: 'All fields are required.' }, { status: 400 });
  }

  try {
    const data = await resend.emails.send({
      from: 'Denti Clinic <onboarding@resend.dev>', // Must be a verified sender in Resend
      to: ['a.begas88@gmail.com'],
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact from Denti Dental Clinic</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Treatment:</strong> ${treatment}</p>
        <p><strong>Agreed to Privacy Policy:</strong> Yes</p>
      `
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
