"use server";
import { connectToDB } from "@/libs/mongoose.js";

import Book from "@/libs/models/Book.js";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const body = await req.json();
  console.log('api/Book', body)
  connectToDB();
  console.log('espress addvideo', body)
  const newVideo = new Book({ ...body });
  try {
    const savedVideo = await newVideo.save();
    console.log('hhh', savedVideo)
    return NextResponse.json(savedVideo)

  } catch (err) {
    console.log(err.message)
    return NextResponse.json('error api/tarjet', err.message)
  }
};

export async function GET(req, res) {
  connectToDB();
  try {
    console.log('runinng get')
    const videos = await Book.aggregate([{ $sample: { size: 40 } }]);
    return NextResponse.json(videos)
  } catch (err) {
    console.log(err.message)
    return NextResponse.json('error api/tarjet', err.message)
  }
};