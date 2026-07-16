import Navbar from "./components/Navbar";
import {
  ClipboardList,
  Users,
  ShieldCheck,
  FileText,
  Briefcase,
  Car,
} from "lucide-react";

export default function Home() 
{
  return (
    <main className="min-h-screen bg-[#FCFBF8] pt-20">

      <Navbar />


{/* ================= HERO SECTION ================= */}

<section className="bg-[#F8F6F1] py-20">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* ================= LEFT SIDE ================= */}

      <div>

        <p className="uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-5">
          PROFESSIONAL FIELD OPERATIONS
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#2F4F3A] leading-tight">

          Professional

          <br />

          Field Operations

          <span className="block text-[#D4AF37]">
            Across Ethiopia
          </span>

        </h1>

        <p className="mt-8 text-lg text-[#4B5563] leading-8 max-w-lg">

          We deliver reliable field operations,
          research support, engineering services,
          logistics coordination, and project
          implementation across Ethiopia.

        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="#services"
            className="bg-[#2F4F3A] hover:bg-[#23392C] text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition duration-300"
          >
            Our Services
          </a>

          <a
            href="#contact"
            className="bg-[#D4AF37] hover:bg-[#C39B2E] text-[#2F4F3A] px-8 py-4 rounded-xl font-semibold shadow-lg transition duration-300"
          >
            Contact Us
          </a>

        </div>

      </div>

      {/* ================= RIGHT SIDE ================= */}

      <div className="flex justify-center lg:justify-end">

        <img
          src="/hero-background.png"
          alt="Origin Field Solutions"
          className="w-full max-w-3xl h-auto"
        />

      </div>

    </div>

  </div>

</section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="py-28 px-6 bg-white"
      >

        <div className="max-w-7xl mx-auto">

          <div className="max-w-4xl">

            <p className="uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-4">
              ABOUT US
            </p>

            <h2 className="text-5xl font-bold text-[#2F4F3A] mb-8">
              Origin Field Solutions
            </h2>

            <p className="text-lg text-[#374151] leading-9">

              Origin Field Solutions is an Ethiopian field
              operations and research support company dedicated
              to helping organizations successfully implement
              research projects throughout the country.

              We provide experienced enumerators,
              supervisors, translators,
              field coordinators,
              logistics support,
              and professional project management for
              academic research, market studies,
              impact evaluations,
              engineering and construction studies,
              environmental assessments,
              and development programs.

            </p>

          </div>

        </div>

      </section>
            {/* ================= WHY WE EXIST ================= */}

      <section className="py-28 px-6 bg-[#F8F6F1]">

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-4">
            WHY WE EXIST
          </p>

          <h2 className="text-5xl font-bold text-[#2F4F3A] mb-8">
            Reliable Fieldwork Creates Better Research
          </h2>

          <p className="text-lg text-[#374151] leading-9">

            Successful research depends on accurate field
            implementation. Many organizations struggle to
            recruit dependable field teams, coordinate logistics,
            and maintain consistent quality throughout data
            collection.

          </p>

          <p className="text-lg text-[#374151] leading-9 mt-8">

            Origin Field Solutions was established to bridge that
            gap by providing professional field operations,
            experienced personnel, and dependable project
            coordination that researchers can trust.

          </p>

        </div>

      </section>

      {/* ================= WHAT SETS US APART ================= */}

      <section className="py-28 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-4">
              WHAT SETS US APART
            </p>

            <h2 className="text-5xl font-bold text-[#2F4F3A]">
              Our Commitment
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#F8F6F1] rounded-3xl shadow-lg p-10 hover:shadow-2xl transition duration-300">

              <h3 className="text-2xl font-bold text-[#2F4F3A] mb-5">
                Quality Data
              </h3>

              <p className="text-[#374151] leading-8">

                Every project is supervised with rigorous quality
                control to ensure accurate, reliable,
                and ethically collected data.

              </p>

            </div>

            <div className="bg-[#F8F6F1] rounded-3xl shadow-lg p-10 hover:shadow-2xl transition duration-300">

              <h3 className="text-2xl font-bold text-[#2F4F3A] mb-5">
                Ethical Practice
              </h3>

              <p className="text-[#374151] leading-8">

                We promote professionalism, confidentiality,
                transparency, informed consent,
                and respect in every field activity.

              </p>

            </div>

            <div className="bg-[#F8F6F1] rounded-3xl shadow-lg p-10 hover:shadow-2xl transition duration-300">

              <h3 className="text-2xl font-bold text-[#2F4F3A] mb-5">
                Experienced Teams
              </h3>

              <p className="text-[#374151] leading-8">

                Our enumerators, supervisors,
                translators, and coordinators are selected
                based on competence, integrity,
                experience, and local knowledge.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= IMPACT ================= */}

      <section className="py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

            <div>

              <h2 className="text-5xl font-bold text-[#2F4F3A] hover:text-[#D4AF37] transition">
                500+
              </h2>

              <p className="mt-4 text-gray-600">
                Field Enumerators
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-[#2F4F3A] hover:text-[#D4AF37] transition">
                11
              </h2>

              <p className="mt-4 text-gray-600">
                Regions Covered
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-[#2F4F3A] hover:text-[#D4AF37] transition">
                100%
              </h2>

              <p className="mt-4 text-gray-600">
                Commitment to Quality
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-[#2F4F3A] hover:text-[#D4AF37] transition">
                24/7
              </h2>

              <p className="mt-4 text-gray-600">
                Project Support
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* ================= WHY CLIENTS TRUST US ================= */}

      <section className="py-28 px-6 bg-[#F8F6F1]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-4">
              WHY CLIENTS TRUST US
            </p>

            <h2 className="text-5xl font-bold text-[#2F4F3A] mb-6">
              Delivering Confidence in Every Project
            </h2>

            <p className="text-lg text-[#374151] max-w-3xl mx-auto leading-9">

              We understand the operational challenges behind successful
              research. Our experienced teams, structured processes,
              and commitment to quality help clients complete projects
              efficiently and confidently.

            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-10">

              <h3 className="text-2xl font-bold text-[#2F4F3A] mb-5">
                Merit-Based Recruitment
              </h3>

              <p className="text-[#374151] leading-8">

                Enumerators, supervisors, translators,
                and coordinators are selected based on
                professionalism, experience, language skills,
                and integrity.

              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-10">

              <h3 className="text-2xl font-bold text-[#2F4F3A] mb-5">
                Active Quality Assurance
              </h3>

              <p className="text-[#374151] leading-8">

                Every assignment includes continuous monitoring,
                supervision, and quality control throughout field
                implementation.

              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-10">

              <h3 className="text-2xl font-bold text-[#2F4F3A] mb-5">
                Local Knowledge
              </h3>

              <p className="text-[#374151] leading-8">

                Our field professionals understand Ethiopia's
                languages, cultures, and regional contexts,
                enabling efficient communication and dependable
                field operations.

              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-10">

              <h3 className="text-2xl font-bold text-[#2F4F3A] mb-5">
                Complete Project Support
              </h3>

              <p className="text-[#374151] leading-8">

                From project planning and recruitment to
                logistics, supervision, reporting,
                and coordination, we support clients
                from beginning to completion.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHO WE WORK WITH ================= */}

      <section className="py-28 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-4">
              WHO WE WORK WITH
            </p>

            <h2 className="text-5xl font-bold text-[#2F4F3A] mb-6">
              Supporting Organizations Across Ethiopia
            </h2>

            <p className="text-lg text-[#374151] max-w-3xl mx-auto leading-9">

              We proudly collaborate with organizations that require
              dependable field operations, professional data collection,
              and research implementation services.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-[#F8F6F1] rounded-3xl p-10 text-center shadow-lg">

              <div className="text-5xl mb-5">🎓</div>

              <h3 className="text-2xl font-bold text-[#2F4F3A]">
                Universities
              </h3>

            </div>

            <div className="bg-[#F8F6F1] rounded-3xl p-10 text-center shadow-lg">

              <div className="text-5xl mb-5">🌍</div>

              <h3 className="text-2xl font-bold text-[#2F4F3A]">
                NGOs
              </h3>

            </div>

            <div className="bg-[#F8F6F1] rounded-3xl p-10 text-center shadow-lg">

              <div className="text-5xl mb-5">🏛️</div>

              <h3 className="text-2xl font-bold text-[#2F4F3A]">
                Government Institutions
              </h3>

            </div>

            <div className="bg-[#F8F6F1] rounded-3xl p-10 text-center shadow-lg">

              <div className="text-5xl mb-5">🏗️</div>

              <h3 className="text-2xl font-bold text-[#2F4F3A]">
                Engineering &
                Construction Firms
              </h3>

            </div>

          </div>

        </div>

      </section>
            {/* ================= OUR SERVICES ================= */}

      <section
        id="services"
        className="py-28 px-6 bg-[#FCFBF8]"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-4">
              OUR SERVICES
            </p>

            <h2 className="text-5xl font-bold text-[#2F4F3A] mb-6">
              Comprehensive Field Research Solutions
            </h2>

            <p className="text-lg text-[#374151] max-w-3xl mx-auto leading-9">

              We provide complete field research support,
              from recruiting experienced teams to managing
              logistics and ensuring high-quality field
              implementation across Ethiopia.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Field Data Collection */}

            <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

              <ClipboardList
                size={46}
                className="text-[#D4AF37] mb-6"
              />

              <h3 className="text-2xl font-bold text-[#2F4F3A] mb-5">
                Field Data Collection
              </h3>

              <p className="text-[#374151] leading-8">

                Professional quantitative and qualitative
                data collection using trained field
                enumerators throughout Ethiopia.

              </p>

            </div>

            {/* Enumerator Recruitment */}

            <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

              <Users
                size={46}
                className="text-[#D4AF37] mb-6"
              />

              <h3 className="text-2xl font-bold text-[#2F4F3A] mb-5">
                Enumerator Recruitment
              </h3>

              <p className="text-[#374151] leading-8">

                Recruitment of experienced enumerators,
                supervisors, translators,
                and qualified field coordinators
                based on merit and professionalism.

              </p>

            </div>

            {/* Field Supervision */}

            <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

              <ShieldCheck
                size={46}
                className="text-[#D4AF37] mb-6"
              />

              <h3 className="text-2xl font-bold text-[#2F4F3A] mb-5">
                Field Supervision
              </h3>

              <p className="text-[#374151] leading-8">

                Active supervision, quality assurance,
                monitoring, and verification throughout
                every stage of field implementation.

              </p>

            </div>
                        {/* Survey Implementation */}

            <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

              <FileText
                size={46}
                className="text-[#D4AF37] mb-6"
              />

              <h3 className="text-2xl font-bold text-[#2F4F3A] mb-5">
                Survey Implementation
              </h3>

              <p className="text-[#374151] leading-8">

                Household surveys, key informant interviews,
                focus group discussions, baseline, midline,
                endline studies, and community assessments.

              </p>

            </div>

            {/* Research Assistance */}

            <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

              <Briefcase
                size={46}
                className="text-[#D4AF37] mb-6"
              />

              <h3 className="text-2xl font-bold text-[#2F4F3A] mb-5">
                Research Assistance
              </h3>

              <p className="text-[#374151] leading-8">

                Supporting researchers with project planning,
                field coordination, logistics,
                implementation, documentation,
                and reporting support.

              </p>

            </div>

            {/* Research Logistics */}

            <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

              <Car
                size={46}
                className="text-[#D4AF37] mb-6"
              />

              <h3 className="text-2xl font-bold text-[#2F4F3A] mb-5">
                Research Logistics
              </h3>

              <p className="text-[#374151] leading-8">

                Transportation, experienced drivers,
                accommodation coordination,
                equipment movement,
                and complete logistical support
                for research teams across Ethiopia.

              </p>

            </div>

          </div>

        </div>

      </section>

     {/* ================= HOW WE WORK ================= */}

      <section className="py-28 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-4">
              OUR PROCESS
            </p>

            <h2 className="text-5xl font-bold text-[#2F4F3A]">
              How We Work
            </h2>

          </div>

          <div className="grid md:grid-cols-5 gap-8 text-center">

                    <div>

              <div className="w-20 h-20 mx-auto rounded-full bg-[#D4AF37] text-[#2F4F3A] flex items-center justify-center text-3xl font-bold mb-6">
                1
              </div>

              <h3 className="text-2xl font-bold text-[#2F4F3A] mb-4">
                Understand
              </h3>

              <p className="text-[#374151] leading-8">
                We begin by understanding your research objectives,
                methodology, timeline, and operational requirements.
              </p>

            </div>

            <div>

              <div className="w-20 h-20 mx-auto rounded-full bg-[#D4AF37] text-[#2F4F3A] flex items-center justify-center text-3xl font-bold mb-6">
                2
              </div>

              <h3 className="text-2xl font-bold text-[#2F4F3A] mb-4">
                Recruit
              </h3>

              <p className="text-[#374151] leading-8">
                We recruit experienced enumerators,
                supervisors, translators,
                and field coordinators that best fit
                your project's requirements.
              </p>

            </div>

            <div>

              <div className="w-20 h-20 mx-auto rounded-full bg-[#D4AF37] text-[#2F4F3A] flex items-center justify-center text-3xl font-bold mb-6">
                3
              </div>

              <h3 className="text-2xl font-bold text-[#2F4F3A] mb-4">
                Train
              </h3>

              <p className="text-[#374151] leading-8">
                Every field team receives project-specific
                training to ensure consistency,
                professionalism, and quality.
              </p>

            </div>

            <div>

              <div className="w-20 h-20 mx-auto rounded-full bg-[#D4AF37] text-[#2F4F3A] flex items-center justify-center text-3xl font-bold mb-6">
                4
              </div>

              <h3 className="text-2xl font-bold text-[#2F4F3A] mb-4">
                Implement
              </h3>

              <p className="text-[#374151] leading-8">
                We coordinate logistics,
                supervise field operations,
                and monitor quality throughout
                implementation.
              </p>

            </div>

            <div>

              <div className="w-20 h-20 mx-auto rounded-full bg-[#D4AF37] text-[#2F4F3A] flex items-center justify-center text-3xl font-bold mb-6">
                5
              </div>

              <h3 className="text-2xl font-bold text-[#2F4F3A] mb-4">
                Deliver
              </h3>

              <p className="text-[#374151] leading-8">
                We deliver organized,
                verified, and dependable field
                outputs that support confident
                decision-making.
              </p>

            </div>

          </div>

        </div>

      </section>
      {/* ================= WHY CHOOSE ORIGIN FIELD SOLUTIONS ================= */} 

      <section className="py-28 px-6 bg-[#F8F6F1]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-4">
              WHY CHOOSE US
            </p>

            <h2 className="text-5xl font-bold text-[#2F4F3A] mb-6">
              Your Trusted Field Operations Partner
            </h2>

            <p className="text-lg text-[#374151] max-w-3xl mx-auto leading-9">

              We combine experienced professionals,
              rigorous quality standards,
              and nationwide field coordination
              to help organizations complete research
              projects with confidence.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

              <h3 className="text-2xl font-bold text-[#2F4F3A] mb-5">
                Professional Teams
              </h3>

              <p className="text-[#374151] leading-8">

                Skilled enumerators,
                supervisors,
                translators,
                and coordinators selected through
                a merit-based recruitment process.

              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

              <h3 className="text-2xl font-bold text-[#2F4F3A] mb-5">
                Nationwide Coverage
              </h3>

              <p className="text-[#374151] leading-8">

                Reliable field implementation across
                Ethiopia, including rural and
                hard-to-reach communities.

              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

              <h3 className="text-2xl font-bold text-[#2F4F3A] mb-5">
                Quality Assurance
              </h3>

              <p className="text-[#374151] leading-8">

                Continuous supervision,
                monitoring,
                and verification ensure
                reliable and ethical data collection.

              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

              <h3 className="text-2xl font-bold text-[#2F4F3A] mb-5">
                End-to-End Support
              </h3>

              <p className="text-[#374151] leading-8">

                From planning and recruitment
                to logistics,
                field supervision,
                and project completion,
                we support every stage.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= RESEARCH SECTORS ================= */}

      <section
        id="sectors"
        className="py-28 px-6 bg-white"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-4">
              RESEARCH SECTORS
            </p>

            <h2 className="text-5xl font-bold text-[#2F4F3A] mb-6">
              Sectors We Support
            </h2>

            <p className="text-lg text-[#374151] max-w-3xl mx-auto leading-9">

              Our field teams support research,
              surveys, assessments,
              monitoring, evaluations,
              and data collection across
              a wide range of sectors.

            </p>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {[
              "Agriculture",
              "Public Health",
              "Education",
              "Market Research",
              "Engineering & Construction",
              "Infrastructure & Transport",
              "Environmental Science",
              "Natural Resource Management",
              "Rural Development",
              "Social Research",
              "Nutrition",
              "Monitoring & Evaluation",
            ].map((sector) => (

              <div
                key={sector}
                className="bg-[#F8F6F1] rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 p-6 text-center"
              >

                <p className="font-semibold text-[#2F4F3A]">
                  {sector}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
            {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="bg-[#2F4F3A] py-28 px-6"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-4">
              CONTACT US
            </p>

            <h2 className="text-5xl font-bold text-white mb-6">
              Let's Discuss Your Project
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-9">

              Whether you're conducting academic research,
              impact evaluations, engineering studies,
              market assessments, or development projects,
              our team is ready to support your field operations.

            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Contact Information */}

           <div className="bg-white rounded-3xl shadow-xl p-10">

  <h3 className="text-3xl font-bold text-[#2F4F3A] mb-8">
    Contact Information
  </h3>

  <div className="space-y-6 text-[#374151]">

    <div>

      <h4 className="font-semibold text-[#2F4F3A]">
        Location
      </h4>

      <p>Addis Ababa, Ethiopia</p>
      <p>Arbaminch, Ethiopia</p>

    </div>

    <div>

      <h4 className="font-semibold text-[#2F4F3A]">
        Email
      </h4>

      <p>eden12ayanaw@gmail.com</p>

    </div>

    <div>

      <h4 className="font-semibold text-[#2F4F3A]">
        Phone
      </h4>

      <p>+251 96 722 2133</p>

    </div>

    <div>

      <h4 className="font-semibold text-[#2F4F3A]">
        Working Hours
      </h4>

      <p>Monday – Friday</p>
      <p>8:30 AM – 5:30 PM (EAT)</p>
      <p>Saturday</p>
      <p>8:30 AM – 3:00 PM (EAT)</p>

    </div>

    <div>

      <h4 className="font-semibold text-[#2F4F3A]">
        Service Coverage
      </h4>

      <p>Field operations and research support across all regions of Ethiopia.</p>

    </div>

    <div>

      <h4 className="font-semibold text-[#2F4F3A]">
        Response Time
      </h4>

      <p> We respond to all project inquiries within one business day.</p>

    </div>

  </div>

</div>

            {/* Contact Form */}

            <div className="bg-white rounded-3xl shadow-xl p-10">

              <h3 className="text-3xl font-bold text-[#2F4F3A] mb-8">
                Send an Inquiry
              </h3>

              <form
  action="https://formspree.io/f/meeyewdy"
  method="POST"
  className="space-y-6"
>

                <input
  type="text"
  name="name"
  placeholder="Full Name"
  className="w-full border border-gray-300 rounded-xl p-4 text-black"
  required
/>

                <input
  type="email"
  name="email"
  placeholder="Email Address"
  className="w-full border border-gray-300 rounded-xl p-4 text-black"
  required
/>

                <input
  type="text"
  name="organization"
  placeholder="Organization"
  className="w-full border border-gray-300 rounded-xl p-4 text-black"
/>

                <textarea
  name="message"
  rows={6}
  placeholder="Tell us about your project..."
  className="w-full border border-gray-300 rounded-xl p-4 text-black"
  required
/>

                <button
  type="submit"
  className="w-full bg-[#D4AF37] hover:bg-[#C29C2F] text-[#2F4F3A] font-bold py-4 rounded-xl transition duration-300"
>
  Send Inquiry
</button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

<footer className="bg-[#1F2937] text-white py-16 px-6">

  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

    {/* Company */}

    <div>

      <h2 className="text-3xl font-bold mb-5">
        Origin Field Solutions
      </h2>

      <p className="text-gray-400 leading-8">
        Origin Field Solutions provides professional field operations,
        research support, data collection, engineering field services,
        logistics coordination, and project implementation across Ethiopia.
        We help researchers, NGOs, government institutions, universities,
        consulting firms, and private organizations deliver successful
        field projects with confidence.
      </p>

    </div>

    {/* Quick Contact */}

    <div>

      <h3 className="text-2xl font-semibold mb-5">
        Contact
      </h3>

      <div className="space-y-3 text-gray-400">

        <p>📍 Addis Ababa & Arbaminch, Ethiopia</p>

        <p>📧 eden12ayanaw@gmail.com</p>

        <p>📞 +251 96 722 2133</p>

        <p>🕒 Mon – Fri: 8:30 AM – 5:30 PM</p>

        <p>🕒 Sat: 8:30 AM – 3:00 PM</p>

      </div>

    </div>

    {/* Coverage */}

    <div>

      <h3 className="text-2xl font-semibold mb-5">
        Our Coverage
      </h3>

      <p className="text-gray-400 leading-8">
        We provide field operations, research assistance,
        logistics, and project support throughout all
        regions of Ethiopia, connecting clients with
        experienced and reliable field teams wherever
        their projects take them.
      </p>

    </div>

  </div>

  <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">

    © {new Date().getFullYear()} Origin Field Solutions. All Rights Reserved.

  </div>

</footer>
</main>
  );
}