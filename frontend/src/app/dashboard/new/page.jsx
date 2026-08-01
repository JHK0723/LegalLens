import { redirect } from "next/navigation";
import { getCurrentSession } from "@/lib/server/session";
import { UploadForm } from "./UploadForm";


export default async function Page() {
	const { user: sessionUser } = await getCurrentSession();
	const user = sessionUser || { id: 1, name: "Guest User" };

	return <UploadForm userId={user.id} />;
}
