import { NextResponse } from 'next/server';

import exercise from '@/data/exercise.json';

export async function GET() {
  return NextResponse.json(exercise);
}
