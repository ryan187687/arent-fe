import { NextResponse } from 'next/server';

import { APP_CONSTANTS } from '@/config';
import diary from '@/data/diary.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get('limit')) || APP_CONSTANTS.LIMIT_PER_PAGE;
  console.log('🚀 ~ GET ~ limit:', limit);
  return NextResponse.json({
    data: diary.data.slice(0, limit),
  });
}
