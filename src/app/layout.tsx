import QueryProvider from "@/components/providers/QueryProvider";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title:
    "ავტომობილები | MYAUTO.GE ავტომობილების ყიდვა-გაყიდვა ქირაობა-გაქირავება",
  description: "myauto search page demos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white h-20 flex items-center mb-8">
          <div className="max-w-[1050px] w-full mx-auto">
            <Link href="/">
              <Image
                src="/images/myauto.svg"
                alt="myauto logo"
                width={161}
                height={46}
              />
            </Link>
          </div>
        </header>
        <main className="max-w-[1050px] w-full mx-auto">
          {/* TODO unmock */}
          <Breadcrumb className="mb-5">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">მთავარი</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">ძიება</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">იყიდება</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <QueryProvider>{children}</QueryProvider>
        </main>
      </body>
    </html>
  );
}
