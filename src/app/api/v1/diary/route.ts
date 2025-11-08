import { NextResponse } from 'next/server';

import diary from '@/data/diary.json';

export async function GET() {
  return NextResponse.json(diary);
}
