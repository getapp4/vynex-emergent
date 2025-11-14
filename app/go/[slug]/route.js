import { NextResponse } from 'next/server';
import affiliatesData from '@/data/affiliates.json';

export async function GET(request, { params }) {
  const { slug } = params;

  const affiliate = affiliatesData[slug];

  if (!affiliate) {
    return new NextResponse('Affiliate link not found', { status: 404 });
  }

  return NextResponse.redirect(affiliate.url, 302);
}