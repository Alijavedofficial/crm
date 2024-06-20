import Image from "next/image";
import Login from "@/components/login_page/login";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
         <Login/>
      </div>
    </main>
  );
}
