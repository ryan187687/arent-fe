import { NextResponse } from 'next/server';

import { APP_CONSTANTS } from '@/config';
import column from '@/data/column.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get('limit')) || APP_CONSTANTS.LIMIT_PER_PAGE;
  return NextResponse.json({
    data: column.data.slice(0, limit),
  });
}
