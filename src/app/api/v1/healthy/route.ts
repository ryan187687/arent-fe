import healthy from '@/data/healthy.json';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(healthy);
}
