import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface AuditRequest {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  industry: string;
  whatsWorking: string;
  whatsNot: string;
  goals: string;
  timeline: string;
  budget: string;
  preferredDate: string;
  preferredTime: string;
}

export async function POST(request: NextRequest) {
  try {
    // Initialize Resend inside handler to avoid build-time errors
    const resend = new Resend(process.env.RESEND_API_KEY);

    const data: AuditRequest = await request.json();

    console.log('📧 Audit submission received:', {
      name: data.name,
      email: data.email,
      company: data.company,
    });

    // Validate required fields
    if (!data.name || !data.email || !data.company || !data.goals) {
      console.error('❌ Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format email for Mike
    const mikeEmailHtml = `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">🎯 New Audit Request</h1>
        </div>
        
        <div style="background: #1a1a1a; color: #e5e5e5; padding: 24px; border-radius: 0 0 12px 12px;">
          <h2 style="color: #3b82f6; font-size: 18px; margin-top: 0;">Contact Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #a3a3a3;">Name</td><td style="padding: 8px 0;"><strong>${data.name}</strong></td></tr>
            <tr><td style="padding: 8px 0; color: #a3a3a3;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #3b82f6;">${data.email}</a></td></tr>
            ${data.phone ? `<tr><td style="padding: 8px 0; color: #a3a3a3;">Phone</td><td style="padding: 8px 0;"><a href="tel:${data.phone}" style="color: #3b82f6;">${data.phone}</a></td></tr>` : ''}
          </table>

          <h2 style="color: #8b5cf6; font-size: 18px; margin-top: 24px;">Business Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #a3a3a3;">Company</td><td style="padding: 8px 0;"><strong>${data.company}</strong></td></tr>
            ${data.website ? `<tr><td style="padding: 8px 0; color: #a3a3a3;">Website</td><td style="padding: 8px 0;"><a href="${data.website}" style="color: #3b82f6;">${data.website}</a></td></tr>` : ''}
            ${data.industry ? `<tr><td style="padding: 8px 0; color: #a3a3a3;">Industry</td><td style="padding: 8px 0;">${data.industry}</td></tr>` : ''}
          </table>

          <h2 style="color: #10b981; font-size: 18px; margin-top: 24px;">Situation</h2>
          ${data.whatsWorking ? `<p style="margin: 8px 0;"><strong style="color: #a3a3a3;">Working well:</strong> ${data.whatsWorking}</p>` : ''}
          ${data.whatsNot ? `<p style="margin: 8px 0;"><strong style="color: #a3a3a3;">Pain points:</strong> ${data.whatsNot}</p>` : ''}

          <h2 style="color: #f97316; font-size: 18px; margin-top: 24px;">Goals</h2>
          <p style="margin: 8px 0;">${data.goals}</p>

          <h2 style="color: #ec4899; font-size: 18px; margin-top: 24px;">Timeline & Budget</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #a3a3a3;">Timeline</td><td style="padding: 8px 0;"><strong>${data.timeline}</strong></td></tr>
            <tr><td style="padding: 8px 0; color: #a3a3a3;">Budget</td><td style="padding: 8px 0;"><strong>${data.budget}</strong></td></tr>
          </table>

          <div style="margin-top: 24px; padding: 16px; background: #262626; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <h3 style="margin: 0 0 8px 0; color: #3b82f6;">📅 Requested Time</h3>
            <p style="margin: 0; font-size: 18px;"><strong>${data.preferredDate}</strong> at <strong>${data.preferredTime} EST</strong></p>
          </div>

          <p style="margin-top: 24px; color: #737373; font-size: 12px;">
            Reply to this email or call ${data.phone || data.email} to confirm the appointment.
          </p>
        </div>
      </div>
    `;

    // Format confirmation email for client
    const clientEmailHtml = `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Audit Request Received</h1>
        </div>
        
        <div style="background: #1a1a1a; color: #e5e5e5; padding: 32px; border-radius: 0 0 12px 12px;">
          <p style="font-size: 18px; margin-top: 0;">Hi ${data.name.split(' ')[0]},</p>
          
          <p>Thanks for requesting a strategy audit with Liberty Design Studio. I've received your request and will confirm your time slot within 24 hours.</p>

          <div style="margin: 24px 0; padding: 20px; background: #262626; border-radius: 12px; border: 1px solid #404040;">
            <p style="margin: 0 0 8px 0; color: #a3a3a3; font-size: 14px;">Your requested time:</p>
            <p style="margin: 0; font-size: 20px;"><strong>${data.preferredDate}</strong> at <strong>${data.preferredTime} EST</strong></p>
          </div>

          <h3 style="color: #3b82f6; margin-top: 32px;">What to expect:</h3>
          <ul style="padding-left: 20px; line-height: 1.8;">
            <li>A 30-minute focused call with me directly</li>
            <li>Analysis of your current digital presence</li>
            <li>3 quick wins you can implement immediately</li>
            <li>A clear roadmap for next steps</li>
          </ul>

          <p style="margin-top: 24px;">No sales pitch, no pressure. Just actionable insights.</p>

          <p style="margin-top: 32px;">Looking forward to it,</p>
          <p style="margin: 0;"><strong>Mike Berardi</strong><br/>
          <span style="color: #a3a3a3;">Liberty Design Studio</span></p>

          <hr style="border: none; border-top: 1px solid #404040; margin: 32px 0;" />
          
          <p style="color: #737373; font-size: 12px; margin: 0;">
            Need to reschedule? Just reply to this email.<br/>
            Liberty Design Studio | libertydesign.studio
          </p>
        </div>
      </div>
    `;

    // Send email to Mike
    console.log('📤 Sending email to Mike...');
    const mikeResult = await resend.emails.send({
      from: 'Liberty Design Studio <notifications@mail.libertydesign.studio>',
      to: 'mike@libertydesign.studio',
      subject: `🎯 New Audit Request: ${data.company}`,
      html: mikeEmailHtml,
      replyTo: data.email,
    });
    console.log('📬 Mike email result:', JSON.stringify(mikeResult, null, 2));

    // Send confirmation to client
    console.log('📤 Sending confirmation to client...');
    const clientResult = await resend.emails.send({
      from: 'Liberty Design Studio <mike@mail.libertydesign.studio>',
      to: data.email,
      subject: 'Your Strategy Audit Request - Liberty Design Studio',
      html: clientEmailHtml,
    });
    console.log('📬 Client email result:', JSON.stringify(clientResult, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('❌ Audit submission error:', error);
    console.error('❌ Error details:', JSON.stringify(error, Object.getOwnPropertyNames(error), 2));
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
