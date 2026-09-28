import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "AutoDiag AI API is working",
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    return NextResponse.json({
      success: true,
      diagnosis: {
        vehicle: body.vehicle || "Unknown vehicle",
        symptoms: body.symptoms || "No symptoms provided",
        possibleFaults: [
          "Diagnostic analysis will be connected to AI",
          "Check the vehicle electrical system",
          "Perform OBD-II diagnostic scan"
        ],
        severity: "medium",
        confidence: 0.65
      }
    })
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Invalid request"
      },
      { status: 400 }
    )
  }
}
