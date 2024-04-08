"use server";
import { connectToDB } from "@/libs/mongoose.js";

import Book from "@/libs/models/Book.js";
import { NextResponse } from "next/server";


export async function GET(req, params) {
  connectToDB();
  console.log('runinng get', params.params.id)
  try {
    console.log('runinng get')
    const videos = await Book.find({selectedClothing: params.params.id}).sort({ createdAt: -1 })
    console.log(videos)
    return NextResponse.json(videos)
  } catch (err) {
    console.log(err.message)
    return NextResponse.json('error api/tarjet', err.message)
  }
};