import connectMongoDB from "@/libs/mongodb";
import Sample from "@/models/sampleModel";
import { NextResponse } from "next/server";

//const {end_year,intensity,sector,topic,insight,url,region,start_year,impact,added,published,country,relevance,pestle,source,title,likelihood}

//api to post data to the database
// export async function POST(request){
//     const {end_year,intensity,sector,topic,insight,url,region,start_year,impact,added,published,country,relevance,pestle,source,title,likelihood}=await request.json();
//     await connectMongoDB();
//     await Sample.create({end_year,intensity,sector,topic,insight,url,region,start_year,impact,added,published,country,relevance,pestle,source,title,likelihood})
//     return NextResponse.json({message:"Data Added"},{status:201})
//     }

//api to get data from the database
export async function GET(request){
    await connectMongoDB();
    const sample=await Sample.find();
    return NextResponse.json({sample});
}

