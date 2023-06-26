import { type AppType } from "next/dist/shared/lib/utils";
import { Navbar } from "~/components";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="bg-img bg-cover bg-center text-primary">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;
