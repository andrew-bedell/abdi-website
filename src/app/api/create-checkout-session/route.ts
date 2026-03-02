import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { bookingType, packageId, guests, safariDays, name, email, date, amount } = body;

  // If Stripe secret key is configured, create a real Checkout Session
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (stripeSecretKey) {
    try {
      // Dynamic import to avoid issues when stripe is not configured
      const stripe = new (await import("stripe")).default(stripeSecretKey);

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        customer_email: email,
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: `Zimba Tours - ${bookingType} Booking`,
                description: `Package: ${packageId}, Guests: ${guests}, Date: ${date}${
                  safariDays ? `, Days: ${safariDays}` : ""
                }`,
              },
              unit_amount: amount * 100, // Stripe expects cents
            },
            quantity: 1,
          },
        ],
        metadata: {
          bookingType,
          packageId,
          guests: String(guests),
          safariDays: safariDays ? String(safariDays) : "",
          customerName: name,
          preferredDate: date,
        },
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/booking?success=true`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/booking?canceled=true`,
      });

      return NextResponse.json({ url: session.url });
    } catch (error) {
      console.error("Stripe error:", error);
      return NextResponse.json(
        { error: "Failed to create checkout session" },
        { status: 500 }
      );
    }
  }

  // Fallback: no Stripe key configured, return success for demo
  return NextResponse.json({
    success: true,
    message: "Booking request received (Stripe not configured)",
    booking: { bookingType, packageId, guests, safariDays, name, email, date, amount },
  });
}
