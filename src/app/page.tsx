import Image from "next/image";
import Login from "@/components/login_page/login";
import ForgotPassword from "@/components/forgot-password/forgot-password";
export default function Home() {
  return (
    <main className="">
      <div>
         <Login/>
      </div>
    </main>
  );
}
