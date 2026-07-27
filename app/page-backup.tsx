import Navbar from "./components/Navbar";
import {
  ClipboardList,
  Users,
  ShieldCheck,
  FileText,
  Briefcase,
  Car,
} from "lucide-react";
export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-20">

      <Navbar />
{/* ================= HERO ================= */}

<section className="bg-[#3F4F22] text-white">
  <div className="max-w-7xl mx-auto px-6 py-32">

    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8 max-w-4xl">
      Reliable Field Operations for Research Across Ethiopia
    </h1>

    <p className="text-xl text-gray-200 leading-9 max-w-3xl mb-10">
      Abay Field Research supports universities, NGOs, government institutions,
      consulting firms, and research organizations with professional field
      implementation, data collection, research logistics, and qualified field teams
      across Ethiopia.
    </p>

    <div className="flex flex-wrap gap-5">

      <button className="bg-[#C8A24D] hover:bg-[#b8933f] text-black font-semibold px-8 py-4 rounded-2xl transition">
        Contact Us
      </button>

      <button className="border border-white hover:bg-white hover:text-[#3F4F22] px-8 py-4 rounded-2xl transition">
        Our Services
      </button>

    </div>

  </div>
</section>
      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="max-w-6xl mx-auto py-24 px-6"
      >

        <h2 className="text-4xl font-bold text-[#3F4F22] mb-8">
          About Abay Field Research
        </h2>

        <p className="text-lg leading-9 text-gray-700">
          Abay Field Research is a research support and field operations
          company serving universities, NGOs, government institutions,
          consulting firms, and private organizations throughout Ethiopia.
          We specialize in coordinating research projects, recruiting
          professional enumerators, supervising field teams,
          and ensuring high quality data collection from planning
          through successful project completion.
        </p>

      </section>

      {/* ================= WHY WE EXIST ================= */}

      <section className="bg-gray-100 py-24 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-[#3F4F22] mb-8">
            Why We Exist
          </h2>

          <p className="text-lg leading-9 text-gray-700">
            Great research depends on trustworthy fieldwork.
            Too often, researchers struggle to find reliable
            field teams capable of collecting accurate,
            ethical, and high quality data.
          </p>

          <p className="text-lg leading-9 text-gray-700 mt-6">
            Abay Field Research was created to solve that problem.
            We recruit professionals based on competence,
            integrity, language skills, and commitment, 
            not personal connections.
            Our goal is to strengthen research in Ethiopia
            through dependable field operations.
          </p>

        </div>

      </section>

      {/* ================= OUR COMMITMENT ================= */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-[#3F4F22] mb-14">
            Our Commitment
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="border rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-[#3F4F22] mb-4">
                Quality Data
              </h3>

              <p className="text-gray-600 leading-7">
                Every project receives careful supervision
                and quality assurance because reliable
                research starts with reliable data.
              </p>
            </div>

            <div className="border rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-[#3F4F22] mb-4">
                Ethical Fieldwork
              </h3>

              <p className="text-gray-600 leading-7">
                Respect, transparency, confidentiality,
                and informed consent guide every interview
                and community interaction.
              </p>
            </div>

            <div className="border rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-[#3F4F22] mb-4">
                Professional Recruitment
              </h3>

              <p className="text-gray-600 leading-7">
                We recruit field teams based on professionalism,
                experience, integrity, and commitment, not
                personal relationships.
              </p>
            </div>
                      </div>

        </div>

      </section>
      {/* ================= STATISTICS ================= */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

      <div>
        <h2 className="text-5xl font-bold hover:text-[#C8A24D]">
          500+
        </h2>

        <p className="mt-4 text-gray-600">
          Enumerators Available
        </p>
      </div>

      <div>
        <h2 className="text-5xl font-bold hover:text-[#C8A24D]">
          11
        </h2>

        <p className="mt-4 text-gray-600">
          Regions Covered
        </p>
      </div>

      <div>
        <h2 className="text-5xl font-bold hover:text-[#C8A24D]">
          100%
        </h2>

        <p className="mt-4 text-gray-600">
          Commitment to Data Quality
        </p>
      </div>

      <div>
        <h2 className="text-5xl font-bold hover:text-[#C8A24D]">
          24/7
        </h2>

        <p className="mt-4 text-gray-600">
          Project Support
        </p>
      </div>

    </div>

  </div>

</section>
{/* ================= WHY RESEARCHERS TRUST US ================= */}

<section className="bg-gray-100 py-24 px-6">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-14">

      <h2 className="text-4xl font-bold text-[#3F4F22] mb-6">
        Why Researchers Trust Abay Field Research
      </h2>

      <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-8">
        We understand the challenges researchers face in field implementation.
        Our approach is built on professionalism, transparency, and quality
        at every stage of the research process.
      </p>

    </div>

    <div className="grid md:grid-cols-2 gap-8">

      <div className="bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-2xl font-bold text-[#3F4F22] mb-4">
          ✔ Recruitment based on merit
        </h3>

        <p className="text-gray-600 leading-7">
          We recruit enumerators and supervisors based on their skills,
          experience, language abilities, and professionalism, not personal
          connections.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-2xl font-bold text-[#3F4F22] mb-4">
          ✔ Quality Assurance
        </h3>

        <p className="text-gray-600 leading-7">
          Every project includes active supervision and quality checks to
          help ensure data is collected accurately and ethically.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-2xl font-bold text-[#3F4F22] mb-4">
          ✔ Local Knowledge
        </h3>

        <p className="text-gray-600 leading-7">
          Our teams understand Ethiopia's languages, cultures, and local
          contexts, helping researchers work effectively across diverse
          communities.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-2xl font-bold text-[#3F4F22] mb-4">
          ✔ We provide complete research support from planning to project completion.
        </h3>

        <p className="text-gray-600 leading-7">
          From planning and recruitment to logistics and field supervision,
          we support research teams throughout the project lifecycle.
        </p>
      </div>

    </div>

  </div>

</section>
{/* ================= WHO WE WORK WITH ================= */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">

      <h2 className="text-4xl font-bold text-[#3F4F22] mb-6">
        Who We Work With
      </h2>

      <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-8">
        We support organizations that require dependable field operations,
        high quality data collection, and professional research assistance
        throughout Ethiopia.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="border rounded-2xl p-8 shadow-md text-center">
        <div className="text-5xl mb-4">🎓</div>
        <h3 className="text-xl font-bold text-[#3F4F22]">
          Universities
        </h3>
      </div>

      <div className="border rounded-2xl p-8 shadow-md text-center">
        <div className="text-5xl mb-4">🌍</div>
        <h3 className="text-xl font-bold text-[#3F4F22]">
          NGOs
        </h3>
      </div>

      <div className="border rounded-2xl p-8 shadow-md text-center">
        <div className="text-5xl mb-4">🏛️</div>
        <h3 className="text-xl font-bold text-[#3F4F22]">
          Government Institutions
        </h3>
      </div>

      <div className="border rounded-2xl p-8 shadow-md text-center">
        <div className="text-5xl mb-4">📈</div>
        <h3 className="text-xl font-bold text-[#3F4F22]">
          Consulting Firms
        </h3>
      </div>

    </div>

  </div>

</section>

      {/* ================= SERVICES ================= */}

<section
  id="services"
  className="py-24 px-6 bg-[#FAF8F2]"
>
  <div className="max-w-7xl mx-auto">

    <h2 className="text-4xl font-bold text-center text-[#3F4F22] mb-14">
      Explore Services
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Field Data Collection */}
      <div className="bg-white border rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <ClipboardList size={42} className="text-[#556B2F] mb-5" />

        <h3 className="text-2xl font-bold text-[#3F4F22] mb-4">
          Field Data Collection
        </h3>

        <p className="text-gray-600 leading-7">
          Professional quantitative and qualitative data collection using
          trained enumerators across Ethiopia.
        </p>
      </div>

      {/* Enumerator Recruitment */}
      <div className="bg-white border rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <Users size={42} className="text-[#556B2F] mb-5" />

        <h3 className="text-2xl font-bold text-[#3F4F22] mb-4">
          Enumerator Recruitment
        </h3>

        <p className="text-gray-600 leading-7">
          Recruitment of qualified enumerators, supervisors, translators,
          and experienced field coordinators.
        </p>
      </div>

      {/* Field Supervision */}
      <div className="bg-white border rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <ShieldCheck size={42} className="text-[#556B2F] mb-5" />

        <h3 className="text-2xl font-bold text-[#3F4F22] mb-4">
          Field Supervision
        </h3>

        <p className="text-gray-600 leading-7">
          Professional supervision, quality assurance, and monitoring
          throughout every stage of field implementation.
        </p>
      </div>

      {/* Survey Implementation */}
      <div className="bg-white border rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <FileText size={42} className="text-[#556B2F] mb-5" />

        <h3 className="text-2xl font-bold text-[#3F4F22] mb-4">
          Survey Implementation
        </h3>

        <p className="text-gray-600 leading-7">
          Household surveys, key informant interviews, focus group
          discussions, baseline, midline, and endline studies.
        </p>
      </div>

      {/* Research Assistance */}
      <div className="bg-white border rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <Briefcase size={42} className="text-[#556B2F] mb-5" />

        <h3 className="text-2xl font-bold text-[#3F4F22] mb-4">
          Research Assistance
        </h3>

        <p className="text-gray-600 leading-7">
          Supporting researchers with planning, logistics,
          coordination, field implementation, and reporting.
        </p>
      </div>

      {/* Logistics */}
      <div className="bg-white border rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <Car size={42} className="text-[#556B2F] mb-5" />

        <h3 className="text-2xl font-bold text-[#3F4F22] mb-4">
          Research Logistics
        </h3>

        <p className="text-gray-600 leading-7">
          Reliable transportation, experienced drivers, travel
          coordination, and logistics support for research teams
          across Ethiopia.
        </p>
      </div>

    </div>

  </div>
</section>
      {/* ================= HOW WE WORK ================= */}

      <section className="bg-white py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-[#3F4F22] mb-14">
            How We Work
          </h2>

          <div className="grid md:grid-cols-5 gap-8 text-center">

            <div>
              <div className="text-5xl mb-4">📋</div>
              <h3 className="font-bold text-xl mb-3">
                Understand
              </h3>
              <p className="text-gray-600">
                We understand your research objectives.
              </p>
            </div>

            <div>
              <div className="text-5xl mb-4">👥</div>
              <h3 className="font-bold text-xl mb-3">
                Recruit
              </h3>
              <p className="text-gray-600">
                Professional field teams are selected.
              </p>
            </div>

            <div>
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="font-bold text-xl mb-3">
                Train
              </h3>
              <p className="text-gray-600">
                Every team receives project-specific training.
              </p>
            </div>

            <div>
              <div className="text-5xl mb-4">🚙</div>
              <h3 className="font-bold text-xl mb-3">
                Implement
              </h3>
              <p className="text-gray-600">
                We coordinate fieldwork and logistics.
              </p>
            </div>

            <div>
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-bold text-xl mb-3">
                Deliver
              </h3>
              <p className="text-gray-600">
                Researchers receive reliable field data.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-[#FAF8F2] text-[#3F4F22] py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-14">
            Why Choose Abay Field Research?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl p-8 text-gray-800">
              <h3 className="text-2xl font-bold text-[#3F4F22] mb-4">
                Quality First
              </h3>

              <p>
                Accurate and ethical data collection is at the center of every project.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-gray-800">
              <h3 className="text-2xl font-bold text-[#3F4F22] mb-4">
                Professional Teams
              </h3>

              <p>
                Skilled enumerators and supervisors selected on merit.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-gray-800">
              <h3 className="text-2xl font-bold text-[#3F4F22] mb-4">
                Nationwide Coverage
              </h3>

              <p>
                Research support across Ethiopia, including remote areas.
              </p>
            </div>

          </div>

        </div>

      </section>
            {/* ================= RESEARCH SECTORS ================= */}

      <section
        id="sectors"
        className="bg-[#FAF8F2] py-24 px-6"
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-[#3F4F22] mb-14">
            Research Sectors We Support
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {[
              "Agriculture",
              "Public Health",
              "Education",
              "Market Research",
              "Environmental Science",
              "Rural Development",
              "Natural Resource Management",
              "Social Research",
            ].map((sector) => (
              <div
                key={sector}
                className="bg-white shadow-md rounded-2xl p-6 text-center font-semibold text-[#3F4F22] hover:shadow-xl transition"
              >
                {sector}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="bg-[#3F4F22] text-[#3F4F22] py-24 px-6"
>
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">
            Let's Discuss Your Research Project
          </h2>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
            Whether you're conducting academic research,
            impact evaluations, surveys, or market studies,
            we're ready to support your field operations.
          </p>

          <div className="grid md:grid-cols-2 gap-10 text-left">

            <div className="bg-white text-gray-800 rounded-2xl p-8">

              <h3 className="text-2xl font-bold text-[#3F4F22] mb-6">
                Contact Information
              </h3>

              <p className="mb-4">📍 Addis Ababa, Ethiopia</p>

              <p className="mb-4">
                📧 info@ethioresearchsolutions.com
              </p>

              <p className="mb-4">
                📞 +251 XX XXX XXXX
              </p>

              <p>
                We respond to research inquiries as quickly as possible.
              </p>

            </div>

            <div className="bg-white rounded-2xl p-8">

              <form className="space-y-4">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-lg p-3 text-black"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border rounded-lg p-3 text-black"
                />

                <input
                  type="text"
                  placeholder="Organization"
                  className="w-full border rounded-lg p-3 text-black"
                />

                <textarea
                  rows={5}
                  placeholder="Tell us about your research project..."
                  className="w-full border rounded-lg p-3 text-black"
                />

                <button
                  className="w-full bg-[#C8A24D] hover:bg-[#B8933F] py-3 rounded-lg text-[#3F4F22] font-semibold transition"
                >
                  Send Inquiry
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="bg-gray-950 text-[#3F4F22] py-12 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          <div>

            <h2 className="text-2xl font-bold mb-4">
              Abay Field Research
            </h2>

            <p className="text-gray-400 leading-7">
              Reliable field operations, ethical research,
              and high quality data collection across Ethiopia.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">

              <li><a href="/">Home</a></li>

              <li><a href="#about">About</a></li>

              <li><a href="#services">Services</a></li>

              <li><a href="#contact">Contact</a></li>

            </ul>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-400">
              Addis Ababa, Ethiopia
            </p>

            <p className="text-gray-400 mt-2">
              info@ethioresearchsolutions.com
            </p>

            <p className="text-gray-400 mt-2">
              +251 XX XXX XXXX
            </p>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          © 2026 Abay Field Research. All rights reserved.
        </div>

      </footer>

    </main>
  );
}