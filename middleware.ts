// Imports
import {NextRequest, NextResponse} from "next/server";
import initializeFirebase from "@/firebase/firebase";

const middleware = (req: NextRequest) => {};

// Stop Middleware running on static files
export const config = {
	matcher: "/((?!_next/image|_next/static|BlueInventory favicon Two.png).*)",
};

export default middleware;
