import { NextResponse } from "next/server";

// Legacy demo endpoint: never report that a booking was saved or paid.
export async function POST() {
  return NextResponse.json(
    { error: "Please use the booking inquiry form to contact Zimba Tours. No payment has been taken." },
    { status: 410 }
  );
}
