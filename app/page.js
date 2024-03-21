import { redirect } from "next/navigation";

const artificialWait = async () => {
  await new Promise((r) => setTimeout(r, 500))
}

export default async function Home() {
  await artificialWait()

  return (
    redirect(`/blogs/${1}`)
  );
}
