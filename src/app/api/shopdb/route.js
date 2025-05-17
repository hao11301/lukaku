import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('shopdb');
    const collection = db.collection('router');

    const data = await collection.find({}).toArray();

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
