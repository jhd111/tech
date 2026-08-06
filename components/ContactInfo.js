import { Mail, Map } from "lucide-react";
import Reveal from "./Reveal";

const contactPoints = [
  {
    icon: Mail,
    label: "Send Email",
    lines: ["services@htechsupports.com", "sales@htechsupports.com"],
  },
  {
    icon: Map,
    label: "Visit Now - Head Office",
    lines: ["- Munich, Germany"],
  },
  {
    icon: Map,
    label: "Visit Now - Branches",
    lines: [
      "- Klagenfurt, Austria",
      "- Dubai Silicon Oasis, UAE",
      "- Bloomsbury Square, London UK",
      "- Porto, Portugal",
    ],
  },
];

export default function ContactInfo() {
  return (
    <Reveal>
      <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand">
        <span className="h-px w-8 bg-brand" aria-hidden="true" />
        Contact With Us
      </p>
      <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Feel Free to Get in Touch
      </h2>

      <div className="mt-8 space-y-6">
        {contactPoints.map(({ icon: Icon, label, lines }, index) => (
          <Reveal
            key={label}
            delay={index * 100}
            className="flex items-start gap-4"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-brand text-brand">
              <Icon size={22} />
            </span>
            <div>
              <p className="text-sm text-slate-500">{label}</p>
              {lines.map((line) => (
                <p key={line} className="font-semibold text-slate-800">
                  {line}
                </p>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Reveal>
  );
}
