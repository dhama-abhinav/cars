import { Header } from "@/components/Header";
import { Sidebar } from "./admin/_components/sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="h-full">
      <Header isAdminPage={true} />
      <div className="flex flex-col h-full w-56 top-20 fixed z-50 inset-y-0">
        <Sidebar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full">{children}</main>
    </div>
  );
}
