import diary from '@/data/diary.json';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(diary);
}
