import { NextResponse } from 'next/server';

import column from '@/data/column.json';

export async function GET() {
  return NextResponse.json(column);
}
