export default function Waves() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-24 overflow-hidden sm:h-32 md:h-40"
      aria-hidden="true"
    >
      {/* Back layer - soft, slow drift */}
      <div className="wave-layer absolute inset-x-0 bottom-0 h-full animate-wave-slow opacity-40">
        <svg viewBox="0 0 2800 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,120 C175,180 350,60 700,110 C1050,160 1225,40 1400,90 C1575,140 1750,180 2100,110 C2280,75 2450,60 2600,90 L2800,120 L2800,200 L0,200 Z
               M2800,120 C2975,180 3150,60 3500,110 C3850,160 4025,40 4200,90 C4375,140 4550,180 4900,110 C5080,75 5250,60 5400,90 L5600,120 L5600,200 L2800,200 Z"
            fill="white"
            fillOpacity="1"
          />
        </svg>
      </div>

      {/* Front layer - crisper, faster drift, sits on top */}
      <div className="wave-layer absolute inset-x-0 bottom-0 h-full animate-wave-fast">
        <svg viewBox="0 0 2800 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,150 C200,90 400,190 750,140 C1100,90 1300,170 1600,140 C1900,110 2100,60 2400,110 C2550,135 2700,150 2800,150 L2800,200 L0,200 Z
               M2800,150 C3000,90 3200,190 3550,140 C3900,90 4100,170 4400,140 C4700,110 4900,60 5200,110 C5350,135 5500,150 5600,150 L5600,200 L2800,200 Z"
            fill="white"
            fillOpacity="1"
          />
        </svg>
      </div>
    </div>
  );
}
