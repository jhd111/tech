import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import {
  Briefcase,
  Users,
  BarChart3,
  Smartphone,
  Wallet,
  Rocket,
} from "lucide-react";

export const metadata = {
  title: "Enter the Hub",
  description:
    "Access the H-Tech Supports partner hub for tools, tickets, and resources, and discover why top IT engineers and vendors trust H-Tech.",
};

const trustPoints = [
  {
    icon: Briefcase,
    title: "Access High-Quality IT Projects",
    text: "One of the perks is that you can choose from a wide range of IT assignments. These can include setting up networks in small offices or troubleshooting POS systems for retail stores. Vendors gain access to large-scale client opportunities. It will help them grow their business and deploy their teams more effectively.",
  },
  {
    icon: Users,
    title: "Build Long-Term Client Relationships",
    text: "If you do a great job, the clients will surely reach out to you again — isn't that great? You can build your own strong network of repeat customers. At the same time, vendors secure ongoing contracts and strengthen client partnerships.",
  },
  {
    icon: BarChart3,
    title: "Work & Manage Resources Flexibly",
    text: "Things are flexible at H-Tech Supports. You will be deciding when and where you want to work. If you have anything important coming up, such as exams or a family commitment, no need to worry. Only take projects that match your availability. Vendors can easily assign jobs, track engineer availability, and manage everything in real time.",
  },
  {
    icon: Smartphone,
    title: "Use Any Device",
    text: "Things are flexible at H-Tech Supports. You will be deciding when and where you want to work. If you have anything important coming up, no need to worry. Only take projects that match your availability. Vendors can easily assign jobs, track engineer availability, and manage everything in real time.",
  },
  {
    icon: Wallet,
    title: "Easy Cash Management",
    text: "You don't need to guess your monthly income. And there's no need to dig through bundles of emails for payment records. Your earnings are tracked in real time in your wallet dashboard. You can easily export data when needed for taxes or reports. Many of our engineers use this feature to manage their earnings, and for vendors, it means smoother transactions and transparent payment tracking, allowing you to focus on completing the job and growing your business.",
  },
  {
    icon: Rocket,
    title: "Fast and Simple Onboarding",
    text: "Nobody likes to wait weeks to get approved. It can even lessen your interest. That's why our onboarding is quick. Once your documents are verified and your profile is set up, you could start getting opportunities within 2–3 business days. With this smooth onboarding process, vendors can hire top-notch talent without delays and hassle.",
  },
];

const workTypes = [
  {
    title: "On-Demand Tasks",
    text: "You can join in as an on-demand engineer to handle quick fixes like system reboots, password resets, or software updates. Perfect for when you want to work without a long commitment.",
  },
  {
    title: "Project-Based Assignments",
    text: "If you want something more in-depth, you can take on a project-based engineer role and choose longer projects with clear milestones. For example, like setting up a company's full IT infrastructure or upgrading an entire office network.",
  },
  {
    title: "Global Field Service Work",
    text: "If you're someone who likes being on the go, we've got in-person tasks across cities and countries. As a field service engineer you can install routers in retail stores or help set up POS systems at events.",
  },
  {
    title: "Remote Technical Support",
    text: "Are you someone who prefers working from your desk or your couch? We've got technical support opportunities such as helping businesses troubleshoot and resolve complex issues online. All from wherever you are.",
  },
  {
    title: "What Makes H-Tech Supports Different",
    text: "At H-Tech Supports, our IT support engineers aren't just good at what they do — they're also dependable and proactive. That's what makes them stand out. The more projects you complete and the more great reviews you earn, the more doors open for you. You can gain access to higher-paying tasks and become a go-to choice for top clients. In short, the better you perform, the more your profile and your income grow.",
  },
  {
    title: "Make Your Career as a Successful Global IT Support Engineer",
    text: "Become part of the H-Tech Supports engineer community. Apply now and start picking up jobs that work for you.",
  },
];

export default function HubPage() {
  return (
    <>
      <PageHeader
        title="Enter the Hub"
        description="Your gateway to partner tools, ticketing, and support resources."
      />

      {/* Why Top IT Engineers and Vendors Trust H-Tech */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <h2 className="text-center text-2xl font-extrabold text-brand sm:text-3xl">
              Why Top IT Engineers and Vendors Trust H-Tech?
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 text-center p-10">
            {trustPoints.map(({ icon: Icon, title, text }, index) => (
              <Reveal
                key={title}
                delay={index * 80}
                className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
              >
                <div className="flex justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon size={22} />
                </span>
                </div>
                <h3 className="mt-4 text-sm md:text-xl font-bold text-brand">
                  {title}
                </h3>
                <p className="mt-2 text-sm md:text-lg leading-relaxed text-slate-600">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Get Access to Global IT Support Opportunities */}
      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="text-2xl font-extrabold text-brand sm:text-3xl">
                Get Access to Global IT Support Opportunities
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                If you want to take your IT skills beyond borders, choose
                H-Tech Supports. We connect you with clients from around the
                world who need reliable IT support. With us, you can
                specialize in field services, on-demand tasks, or technical
                support. You don&apos;t have to be in a big city to land big
                opportunities. You can get opportunities like a handheld
                install in Dubai or a software troubleshooting job in
                Toronto. Our platform brings global projects right to your
                fingertips. No matter where you&apos;re based, join a network
                where your expertise is always in demand and you can make
                the best out of your knowledge and skills.
              </p>
            </Reveal>

            <Reveal delay={150} className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
                  alt="Reviewing IT support documents"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 grid grid-cols-6 gap-1.5 opacity-70"
                aria-hidden="true"
              >
                {Array.from({ length: 36 }).map((_, i) => (
                  <span key={i} className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The Types of Work You'll Have Access To */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <Reveal>
            <h2 className="text-center text-2xl font-extrabold text-brand sm:text-3xl">
              The Types of Work You&apos;ll Have Access To
            </h2>
            <p className="mt-4 text-center text-sm text-slate-600 sm:text-base">
              At H-Tech Supports, you&apos;ll find all kinds of IT work. So
              you can choose what fits your skills and schedule.
            </p>
          </Reveal>

          <div className="mt-12 space-y-8">
            {workTypes.map((section, index) => (
              <Reveal key={section.title} delay={index * 60}>
                <h3 className="text-sm font-bold uppercase tracking-wide text-brand">
                  {section.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {section.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}