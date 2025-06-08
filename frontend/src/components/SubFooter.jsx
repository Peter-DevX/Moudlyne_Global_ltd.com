import { Link } from "react-router-dom";
import ContactButton from "./ContactButton";

export default function CallToAction() {
  return (
    <section className="bg-[#f2fb99] rounded-t-3xl py-12 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-green-900 mb-6">
        Ready to embark on an exciting journey?
      </h2>
      <div className="flex justify-center">
        <Link to="/contact">
        <ContactButton />
        </Link>
        
      </div>
    </section>
  );
}
