import {
  Briefcase,
  Layers,
  Package,
  ShieldCheck,
  Users,
  Search,
  Wifi,
  MapPin,
  Radio,
  CheckCircle2,
  FileText,
  Server,
  Router,
  Network,
  Settings,
  Cpu,
  Cable,
  Boxes,
  PlugZap,
  Laptop,
  Monitor,
  Printer,
  Headphones,
  Recycle,
  Database,
  Truck,
} from "lucide-react";

// Small, already-verified image pool reused across pages (avoids relying on
// unverifiable external image IDs — every URL here is already used
// elsewhere in this project).
const images = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
];

export const services = [
  {
    slug: "professional-service",
    title: "Professional Service",
    intro:
      "H-Tech Supports delivers end-to-end professional IT services for organizations that need a strategic technology partner, not just a vendor. From consulting and solution design through delivery and account management, our certified team plans and executes work that keeps your infrastructure reliable, secure, and ready to scale.",
    image: images[0],
    offerings: [
      { icon: Briefcase, label: "IT Consulting & Advisory" },
      { icon: Layers, label: "Solution Architecture" },
      { icon: Package, label: "Vendor & Procurement Management" },
      { icon: ShieldCheck, label: "Compliance & Documentation" },
      { icon: Users, label: "Dedicated Account Management" },
      { icon: CheckCircle2, label: "Quality Assurance & Delivery" },
    ],
    steps: [
      { title: "Discovery", text: "We start by understanding your environment, goals, and constraints before recommending any solution." },
      { title: "Scoping", text: "Requirements are translated into a clear, costed scope of work with realistic timelines." },
      { title: "Solution Design", text: "Our engineers design an approach that fits your budget, risk tolerance, and growth plans." },
      { title: "Delivery", text: "A dedicated project lead coordinates resources so work is completed on schedule and to spec." },
      { title: "Handover", text: "We document every change and train your team so nothing is a black box." },
      { title: "Ongoing Support", text: "Your account manager stays engaged after go-live to handle anything that comes up." },
    ],
  },
  {
    slug: "wireless-survey",
    title: "Wireless Survey",
    intro:
      "Before a single access point goes on the wall, our wireless survey services give you the data to deploy it right. We combine on-site RF testing with heat-mapping software to design wireless networks that deliver reliable coverage and capacity from day one, for new builds and troubleshooting alike.",
    image: images[1],
    offerings: [
      { icon: Search, label: "Pre-Deployment Site Surveys" },
      { icon: Wifi, label: "RF Coverage & Heat Mapping" },
      { icon: MapPin, label: "Access Point Placement Planning" },
      { icon: Radio, label: "Interference & Spectrum Analysis" },
      { icon: CheckCircle2, label: "Post-Installation Validation" },
      { icon: FileText, label: "Survey Reporting & Documentation" },
    ],
    steps: [
      { title: "Site Walkthrough", text: "We assess the physical environment, construction materials, and expected device density." },
      { title: "RF Testing", text: "Signal strength, noise, and interference are measured across every area that needs coverage." },
      { title: "Heat Map Analysis", text: "Results are modeled into coverage heat maps that expose gaps before installation." },
      { title: "AP Placement Plan", text: "We produce an access point layout tuned for capacity, not just coverage." },
      { title: "Validation Testing", text: "After install, we re-survey to confirm the network performs as designed." },
      { title: "Final Report", text: "You receive a full survey report and as-built plan for future reference." },
    ],
  },
  {
    slug: "network-support",
    title: "Network Support",
    intro:
      "Our network support team keeps routers, switches, and links running so your business doesn't stop. We provide proactive monitoring, rapid troubleshooting, and hands-on remediation across LAN, WAN, and wireless environments, with technicians available to resolve issues before they become outages.",
    image: images[2],
    offerings: [
      { icon: Server, label: "24/7 Network Monitoring" },
      { icon: Router, label: "Router & Switch Support" },
      { icon: Network, label: "LAN/WAN Troubleshooting" },
      { icon: Settings, label: "Firmware & Patch Management" },
      { icon: Cpu, label: "Performance Optimization" },
      { icon: ShieldCheck, label: "Incident Response" },
    ],
    steps: [
      { title: "Monitoring Setup", text: "Devices are enrolled in monitoring so issues surface before users notice them." },
      { title: "Issue Diagnosis", text: "Engineers isolate the fault quickly using logs, alerts, and remote diagnostics." },
      { title: "Root Cause Analysis", text: "We identify the underlying cause, not just the symptom, to prevent repeat tickets." },
      { title: "Remediation", text: "Fixes are applied remotely or on-site, with minimal disruption to operations." },
      { title: "Performance Tuning", text: "Configurations are optimized so the network keeps pace with demand." },
      { title: "Reporting", text: "You get clear reporting on incidents, resolutions, and network health trends." },
    ],
  },
  {
    slug: "structured-cabling",
    title: "Structured Cabling",
    intro:
      "A network is only as reliable as the cabling underneath it. We design and install copper and fiber structured cabling systems, from data racks to end points, that are tested, labeled, and documented to industry standards, giving you infrastructure that's easy to maintain for years to come.",
    image: images[3],
    offerings: [
      { icon: Cable, label: "Copper & Fiber Cabling" },
      { icon: Boxes, label: "Cable Containment & Pathways" },
      { icon: Server, label: "Data Rack & Cabinet Setup" },
      { icon: CheckCircle2, label: "Cable Testing & Certification" },
      { icon: PlugZap, label: "Patch Panel Termination" },
      { icon: FileText, label: "As-Built Documentation" },
    ],
    steps: [
      { title: "Site Assessment", text: "We survey the space and confirm pathways, distances, and code requirements." },
      { title: "Cable Path Design", text: "Routes are planned to minimize interference and keep future moves simple." },
      { title: "Installation", text: "Cabling is run and dressed by trained technicians to a clean standard." },
      { title: "Termination & Testing", text: "Every run is terminated and certified against performance standards." },
      { title: "Labeling", text: "Consistent labeling makes troubleshooting and future changes fast and safe." },
      { title: "Documentation Handover", text: "You receive as-built drawings and test results for your records." },
    ],
  },
  {
    slug: "end-user-computing-support",
    title: "End User Computing Support",
    intro:
      "From desktop deployment to helpdesk tickets, our end user computing team keeps your workforce productive. We handle imaging, rollout, peripheral support, and remote troubleshooting so employees get working technology and IT teams get fewer escalations.",
    image: images[4],
    offerings: [
      { icon: Laptop, label: "Desktop & Laptop Deployment" },
      { icon: Monitor, label: "Software Imaging & Setup" },
      { icon: Printer, label: "Printer & Peripheral Support" },
      { icon: Headphones, label: "Helpdesk & Remote Support" },
      { icon: Recycle, label: "Device Refresh Programs" },
      { icon: Database, label: "Asset Tracking" },
    ],
    steps: [
      { title: "Requirements Gathering", text: "We confirm device standards, software images, and rollout timelines with you." },
      { title: "Device Provisioning", text: "Hardware is imaged, configured, and quality-checked before it reaches users." },
      { title: "Deployment", text: "Technicians deploy devices on-site or ship them ready to use." },
      { title: "User Onboarding", text: "End users are set up and walked through anything new to them." },
      { title: "Ongoing Support", text: "A helpdesk is available for day-to-day issues and quick fixes." },
      { title: "Asset Reporting", text: "You keep visibility into every device with up-to-date asset records." },
    ],
  },
  {
    slug: "itad-it-asset-disposal",
    title: "ITAD – IT Asset Disposal",
    intro:
      "Retiring hardware safely is as important as deploying it. Our IT asset disposal service securely wipes or destroys data, then recycles or remarkets equipment responsibly, with full chain-of-custody reporting so you stay compliant at every step.",
    image: images[0],
    offerings: [
      { icon: ShieldCheck, label: "Secure Data Destruction" },
      { icon: Truck, label: "Asset Collection & Logistics" },
      { icon: Recycle, label: "Certified Recycling" },
      { icon: Package, label: "Asset Resale & Value Recovery" },
      { icon: FileText, label: "Chain of Custody Reporting" },
      { icon: CheckCircle2, label: "Compliance Certification" },
    ],
    steps: [
      { title: "Inventory & Audit", text: "Every asset is logged and audited before it leaves your site." },
      { title: "Secure Collection", text: "Equipment is collected under a documented chain of custody." },
      { title: "Data Destruction", text: "Drives are wiped or physically destroyed to certified standards." },
      { title: "Recycling or Resale", text: "Usable assets are remarketed; the rest is recycled responsibly." },
      { title: "Certification", text: "You receive certificates of destruction and recycling for compliance." },
      { title: "Final Reporting", text: "A full disposal report closes out the asset lifecycle." },
    ],
  },
  {
    slug: "staff-augmentation",
    title: "Staff Augmentation",
    intro:
      "When you need extra hands, we supply screened, certified technicians for short or long-term placements. Whether it's a single rollout or ongoing coverage across sites, our staff augmentation service scales your team without the overhead of hiring.",
    image: images[1],
    offerings: [
      { icon: Users, label: "Skilled Field Engineers" },
      { icon: Briefcase, label: "Project-Based Resourcing" },
      { icon: Layers, label: "Short & Long Term Placements" },
      { icon: MapPin, label: "Nationwide Technician Coverage" },
      { icon: ShieldCheck, label: "Screened & Certified Talent" },
      { icon: Truck, label: "Rapid Deployment" },
    ],
    steps: [
      { title: "Requirement Definition", text: "We confirm the skills, coverage, and duration your project needs." },
      { title: "Talent Sourcing", text: "Candidates are matched from our network of certified technicians." },
      { title: "Screening & Vetting", text: "Every technician is background-checked and skills-verified before placement." },
      { title: "Deployment", text: "Staff are deployed to your site or project on the agreed schedule." },
      { title: "Onboarding", text: "We handle onboarding logistics so they're productive from day one." },
      { title: "Ongoing Management", text: "We manage performance and scheduling so you don't have to." },
    ],
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}
