import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    // params
    const url = new URL(request.url);
    const params = url.searchParams;
    // country
    const country = params.get("country");
    // response http://api.weatherapi.com/v1/current.json
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=d87964faf02c401088e33357240205&q=${country}&aqi=no`);
    // return
    return NextResponse.json(response.data);
}