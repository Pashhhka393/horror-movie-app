import { moviesData } from "@/features/movie-details/data/movies";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(moviesData);
}
