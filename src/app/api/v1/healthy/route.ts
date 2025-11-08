import { NextResponse } from 'next/server';

import { APP_CONSTANTS } from '@/config';
import healthy from '@/data/healthy.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const limit = Number(searchParams.get('limit')) || APP_CONSTANTS.LIMIT_PER_PAGE;
  if (type) {
    return NextResponse.json({
      data: healthy.data.filter((item) => item.type === type).slice(0, limit),
    });
  }
  return NextResponse.json({
    data: healthy.data.slice(0, limit),
  });
}
