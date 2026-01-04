import { NextRequest, NextResponse } from 'next/server';

interface FormSubmission {
    name: string;
    email: string;
    phone?: string;
    company: string;
    website?: string;
    industry?: string;
    whatsWorking?: string;
    whatsNot?: string;
    goals: string;
    timeline: string;
    budget: string;
    preferredDate?: string;
    preferredTime?: string;
}

export async function POST(request: NextRequest) {
    try {
        const data: FormSubmission = await request.json();

        console.log('📬 Form submission received:', {
            name: data.name,
            email: data.email,
            company: data.company,
        });

        // Validate required fields
        if (!data.name || !data.email || !data.company || !data.goals) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Option 1: Forward to external webhook
        const WEBHOOK_URL = process.env.HARBOR_WEBHOOK_URL;
        if (WEBHOOK_URL) {
            const webhookResponse = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!webhookResponse.ok) {
                console.error('❌ Webhook failed:', webhookResponse.status);
                return NextResponse.json(
                    { error: 'Failed to forward to webhook' },
                    { status: 500 }
                );
            }
        }

        // Option 2: Send to email via Resend (optional)
        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        const NOTIFICATION_EMAIL = process.env.HARBOR_NOTIFICATION_EMAIL;

        if (RESEND_API_KEY && NOTIFICATION_EMAIL) {
            // Dynamic import to avoid build errors when Resend isn't installed
            try {
                const { Resend } = await import('resend');
                const resend = new Resend(RESEND_API_KEY);

                await resend.emails.send({
                    from: process.env.HARBOR_FROM_EMAIL || 'Harbor Form <noreply@example.com>',
                    to: NOTIFICATION_EMAIL,
                    subject: `New Form Submission: ${data.company}`,
                    html: `
            <h2>New Form Submission</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
            ${data.website ? `<p><strong>Website:</strong> ${data.website}</p>` : ''}
            ${data.industry ? `<p><strong>Industry:</strong> ${data.industry}</p>` : ''}
            ${data.whatsWorking ? `<p><strong>What's Working:</strong> ${data.whatsWorking}</p>` : ''}
            ${data.whatsNot ? `<p><strong>Pain Points:</strong> ${data.whatsNot}</p>` : ''}
            <p><strong>Goals:</strong> ${data.goals}</p>
            <p><strong>Timeline:</strong> ${data.timeline}</p>
            <p><strong>Budget:</strong> ${data.budget}</p>
            ${data.preferredDate ? `<p><strong>Preferred Date:</strong> ${data.preferredDate}</p>` : ''}
            ${data.preferredTime ? `<p><strong>Preferred Time:</strong> ${data.preferredTime}</p>` : ''}
          `,
                });
            } catch (emailError) {
                console.error('❌ Email send failed:', emailError);
                // Don't fail the request if email fails
            }
        }

        return NextResponse.json({
            success: true,
            message: 'Form submitted successfully'
        });

    } catch (error) {
        console.error('❌ Form submission error:', error);
        return NextResponse.json(
            { error: 'Failed to process request' },
            { status: 500 }
        );
    }
}
