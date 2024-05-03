import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(country: string) {
    const response = await axios.post(`http://api.weatherapi.com/v1/current.json?key=d87964faf02c401088e33357240205&q=${country}&aqi=no`);
    // return
    if (response.status === 200 && response) {
        return NextResponse.json(response);
    } else {
        return NextResponse.json("error");
    }
}