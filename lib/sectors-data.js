import {
  Monitor,
  Wifi,
  MapPin,
  Layers,
  Package,
  Truck,
  Network,
  Building2,
  Headphones,
  ShieldCheck,
  Database,
  Users,
  Server,
  Cable,
  PlugZap,
  Wrench,
  Recycle,
  Radio,
  Factory,
  Cpu,
  Search,
  Settings,
  Landmark,
  CheckCircle2,
} from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop",
];

export const sectors = [
  {
    slug: "retail",
    title: "Retail",
    intro:
      "Retail environments depend on connectivity that never goes down during trading hours. We support point-of-sale systems, in-store Wi-Fi, and multi-site rollouts so stores stay open, transactions stay fast, and new locations launch on schedule.",
    image: images[0],
    offerings: [
      { icon: Monitor, label: "POS System Support" },
      { icon: Wifi, label: "In-Store Wi-Fi & Connectivity" },
      { icon: MapPin, label: "Multi-Site Rollouts" },
      { icon: Layers, label: "Digital Signage Support" },
      { icon: Package, label: "Inventory & Scanner Devices" },
      { icon: Truck, label: "Store Opening/Closing IT" },
    ],
    steps: [
      { title: "Site Assessment", text: "We review store layout and connectivity needs ahead of any rollout." },
      { title: "Rollout Planning", text: "Multi-site projects are scheduled to avoid disrupting trading hours." },
      { title: "Installation", text: "Technicians install POS, network, and signage hardware on-site." },
      { title: "Configuration", text: "Systems are configured and tested against your store standard." },
      { title: "Testing", text: "We validate connectivity and transactions before handover." },
      { title: "Ongoing Support", text: "A support line covers day-to-day issues across every location." },
    ],
  },
  {
    slug: "enterprise",
    title: "Enterprise",
    intro:
      "Large, multi-location organizations need infrastructure that scales without adding risk. We design and support enterprise networks, unified communications, and helpdesk services that keep every site connected under one consistent standard.",
    image: images[1],
    offerings: [
      { icon: Network, label: "Enterprise Network Design" },
      { icon: Building2, label: "Multi-Location Support" },
      { icon: Headphones, label: "Unified Communications" },
      { icon: ShieldCheck, label: "Security & Compliance" },
      { icon: Database, label: "Change & Asset Management" },
      { icon: Users, label: "24/7 Helpdesk" },
    ],
    steps: [
      { title: "Assessment", text: "We map current infrastructure across every site before proposing changes." },
      { title: "Standardization", text: "A common design standard is set so every location matches." },
      { title: "Implementation", text: "Rollouts are coordinated across locations with minimal downtime." },
      { title: "Configuration", text: "Security, access, and communications systems are configured to policy." },
      { title: "Testing", text: "We validate performance and failover before sign-off." },
      { title: "Ongoing Support", text: "A dedicated helpdesk supports users across the whole organization." },
    ],
  },
  {
    slug: "data-center",
    title: "Data Center",
    intro:
      "Data center work leaves no room for error. Our technicians handle rack-and-stack deployments, structured cabling, equipment migrations, and remote hands support with the precision and documentation critical environments demand.",
    image: images[2],
    offerings: [
      { icon: Server, label: "Rack & Stack Deployment" },
      { icon: Cable, label: "Structured Cabling" },
      { icon: PlugZap, label: "Power & Cooling Support" },
      { icon: Truck, label: "Equipment Migrations" },
      { icon: Wrench, label: "Remote Hands Support" },
      { icon: Recycle, label: "Decommissioning & ITAD" },
    ],
    steps: [
      { title: "Assessment", text: "We review the facility, rack layout, and change requirements." },
      { title: "Planning", text: "Work windows are scheduled to protect uptime commitments." },
      { title: "Implementation", text: "Equipment is racked, cabled, and connected to spec." },
      { title: "Configuration", text: "Power, cooling, and connectivity are verified against design." },
      { title: "Testing", text: "Every change is tested before the ticket is closed." },
      { title: "Ongoing Support", text: "Remote hands are available for future moves, adds, and changes." },
    ],
  },
  {
    slug: "carrier-network",
    title: "Carrier Network",
    intro:
      "We support carrier and telecom infrastructure from cell sites to transmission links. Our field engineers handle installation, RF work, and emergency repair so networks stay live for the customers depending on them.",
    image: images[3],
    offerings: [
      { icon: Radio, label: "Cell Site Installation" },
      { icon: Wifi, label: "RF & Transmission Support" },
      { icon: Layers, label: "Tower & Rooftop Access Work" },
      { icon: Network, label: "Network Integration" },
      { icon: Wrench, label: "Maintenance & Repair" },
      { icon: ShieldCheck, label: "Emergency Response" },
    ],
    steps: [
      { title: "Assessment", text: "We evaluate site access, equipment, and integration requirements." },
      { title: "Planning", text: "Work is scheduled around network maintenance windows." },
      { title: "Implementation", text: "Certified technicians handle installation and access-controlled work." },
      { title: "Configuration", text: "Equipment is integrated and tuned to carrier specifications." },
      { title: "Testing", text: "Transmission and coverage are validated before sign-off." },
      { title: "Ongoing Support", text: "Rapid-response teams are available for outages and repairs." },
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    intro:
      "Plant floors need connectivity that survives noise, distance, and demanding conditions. We deploy industrial Wi-Fi, machine networking, and warehouse device support that keeps production and logistics running without interruption.",
    image: images[4],
    offerings: [
      { icon: Factory, label: "Plant Floor Connectivity" },
      { icon: Wifi, label: "Industrial Wi-Fi" },
      { icon: Cpu, label: "Machine & Sensor Networking" },
      { icon: Package, label: "Warehouse Scanner Support" },
      { icon: Search, label: "Site Surveys" },
      { icon: Settings, label: "Preventive Maintenance" },
    ],
    steps: [
      { title: "Assessment", text: "We survey the facility for coverage, interference, and integration points." },
      { title: "Planning", text: "Deployment is scheduled around production and shift patterns." },
      { title: "Implementation", text: "Hardware is installed to withstand industrial conditions." },
      { title: "Configuration", text: "Machines, scanners, and networks are configured and integrated." },
      { title: "Testing", text: "Systems are validated under real production load." },
      { title: "Ongoing Support", text: "Preventive maintenance keeps downtime to a minimum." },
    ],
  },
  {
    slug: "government",
    title: "Government",
    intro:
      "Public sector projects come with strict compliance and security requirements. We deliver secure network deployments, facility-wide cabling, and nationwide field coverage built to meet government standards from day one.",
    image: images[0],
    offerings: [
      { icon: ShieldCheck, label: "Secure Network Deployment" },
      { icon: CheckCircle2, label: "Compliance-Driven Installs" },
      { icon: Cable, label: "Facility-Wide Cabling" },
      { icon: Landmark, label: "Public Sector Helpdesk" },
      { icon: Database, label: "Asset Lifecycle Management" },
      { icon: MapPin, label: "Nationwide Field Coverage" },
    ],
    steps: [
      { title: "Assessment", text: "We review facility and compliance requirements before proposing work." },
      { title: "Planning", text: "Projects are scoped against relevant government standards." },
      { title: "Implementation", text: "Vetted technicians carry out installation to specification." },
      { title: "Configuration", text: "Systems are configured to required security and access policies." },
      { title: "Testing", text: "Work is validated and documented for audit purposes." },
      { title: "Ongoing Support", text: "A dedicated helpdesk supports facilities nationwide." },
    ],
  },
];

export function getSectorBySlug(slug) {
  return sectors.find((sector) => sector.slug === slug);
}
