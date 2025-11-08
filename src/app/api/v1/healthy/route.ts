import { NextResponse } from 'next/server';

import healthy from '@/data/healthy.json';

export async function GET() {
  return NextResponse.json(healthy);
}
