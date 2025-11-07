import exercise from '@/data/exercise.json';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(exercise);
}
