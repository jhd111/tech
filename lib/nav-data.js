import {
  Briefcase,
  Wifi,
  Network,
  Cable,
  Laptop,
  Recycle,
  Users,
  Store,
  Building2,
  Server,
  Radio,
  Factory,
  Landmark,
  FileText,
  ClipboardList,
  FileCheck2,
  HelpCircle,
} from "lucide-react";

export const navItems = [
  {
    label: "Company",
    href: "/company",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Professional Service", href: "/services/professional-service", icon: Briefcase },
      { label: "Wireless Survey", href: "/services/wireless-survey", icon: Wifi },
      { label: "Network Support", href: "/services/network-support", icon: Network },
      { label: "Structured Cabling", href: "/services/structured-cabling", icon: Cable },
      { label: "End User Computing Support", href: "/services/end-user-computing-support", icon: Laptop },
      { label: "ITAD \u2013 IT Asset Disposal", href: "/services/itad-it-asset-disposal", icon: Recycle },
      { label: "Staff Augmentation", href: "/services/staff-augmentation", icon: Users },
    ],
  },
  {
    label: "Sectors",
    href: "/sectors",
    children: [
      { label: "Retail", href: "/sectors/retail", icon: Store },
      { label: "Enterprise", href: "/sectors/enterprise", icon: Building2 },
      { label: "Data Center", href: "/sectors/data-center", icon: Server },
      { label: "Carrier Network", href: "/sectors/carrier-network", icon: Radio },
      { label: "Manufacturing", href: "/sectors/manufacturing", icon: Factory },
      { label: "Government", href: "/sectors/government", icon: Landmark },
    ],
  },
  // {
  //   label: "Resources",
  //   href: "/resources",
  //   children: [
  //     { label: "Blog", href: "/resources#blog", icon: FileText },
  //     { label: "Case Studies", href: "/resources#case-studies", icon: ClipboardList },
  //     { label: "Whitepapers", href: "/resources#whitepapers", icon: FileCheck2 },
  //     { label: "FAQs", href: "/resources#faqs", icon: HelpCircle },
  //   ],
  // },
  // {
  //   label: "Careers",
  //   href: "/careers",
  // },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Enter the Hub",
    href: "/hub",
  },
];