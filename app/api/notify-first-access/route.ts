import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { clientName, accessCode, timestamp } = await request.json()

    // WhatsApp Business API endpoint (you'll need to configure this with your credentials)
    const phoneNumber = "61478811835" // Your WhatsApp number
    const message = `🎉 New Gallery Access Alert!\n\nClient: ${clientName}\nAccess Code: ${accessCode}\nFirst Login: ${new Date(timestamp).toLocaleString("en-AU", { timeZone: "Australia/Sydney" })}\n\nThe client has 30 days of access from this moment.`

    // Using WhatsApp Web URL as a fallback - this will open WhatsApp with pre-filled message
    // For production, integrate with WhatsApp Business API or Twilio
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    // Log the access for tracking
    console.log("[v0] First gallery access:", {
      clientName,
      accessCode,
      timestamp,
      whatsappUrl,
    })

    // In production, you would send this via WhatsApp Business API or Twilio
    // For now, we'll return the URL that can be used to send the message
    // You can integrate with services like:
    // - Twilio WhatsApp API
    // - WhatsApp Business API
    // - Other notification services

    return NextResponse.json({
      success: true,
      message: "Notification logged",
      whatsappUrl,
    })
  } catch (error) {
    console.error("[v0] Error sending notification:", error)
    return NextResponse.json({ success: false, error: "Failed to send notification" }, { status: 500 })
  }
}
