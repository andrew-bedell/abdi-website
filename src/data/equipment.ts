export interface GearItem {
  name: string;
  brand: string;
  feature: string;
}

export const expeditionGear: GearItem[] = [
  {
    name: "Expedition Tent",
    brand: "Mountain Hardwear Trango 3",
    feature: "Axial strength and wind resistance",
  },
  {
    name: "Sleeping Bag",
    brand: "The North Face Inferno -20\u00b0F",
    feature: "ProDown moisture resistance",
  },
  {
    name: "Sleeping Pad",
    brand: "Therm-a-Rest NeoAir XTherm",
    feature: "High R-value for thermal insulation",
  },
  {
    name: "Mess Tent",
    brand: "Custom Arusha Canvas",
    feature: "Reinforced poles for high-wind stability",
  },
  {
    name: "Dining Chairs",
    brand: "Helinox Camp Chair",
    feature: "Lightweight but durable for high camps",
  },
  {
    name: "Stove System",
    brand: "MSR WhisperLite International",
    feature: "Multi-fuel capability and reliability",
  },
];

export interface VehicleFeature {
  feature: string;
  spec: string;
  benefit: string;
}

export const vehicleFeatures: VehicleFeature[] = [
  {
    feature: "Roof Design",
    spec: "Full-Length Pop-up",
    benefit: "360\u00b0 unobstructed viewing",
  },
  {
    feature: "Suspension",
    spec: "Heavy-Duty Old Man Emu",
    benefit: "Smooth ride on corrugated roads",
  },
  {
    feature: "Communication",
    spec: "Long-Range VHF Radio",
    benefit: "Real-time wildlife spotting alerts",
  },
  {
    feature: "Power",
    spec: "220V Inverters & USB Ports",
    benefit: "Constant charging for camera gear",
  },
  {
    feature: "Refreshments",
    spec: "On-board Electric Fridge",
    benefit: "Chilled beverages and snacks",
  },
  {
    feature: "Seating",
    spec: "High-Back Ergonomic Seats",
    benefit: "Comfort during long game drives",
  },
];

export const safetyFeatures = [
  {
    title: "AMREF Flying Doctors",
    description:
      "Every client is enrolled in an emergency evacuation program providing helicopter transport to Nairobi or Dar es Salaam.",
  },
  {
    title: "Satellite Communication",
    description:
      "Every expedition and safari vehicle carries Garmin inReach or satellite phones for communication in areas without cellular coverage.",
  },
  {
    title: "Medical Equipment",
    description:
      "Portable hyperbaric bags (Gamow bags), emergency oxygen cylinders, pulse oximeters, and AEDs on every mountain expedition.",
  },
  {
    title: "Trained Staff",
    description:
      "All lead guides hold Wilderness First Responder (WFR) certification, with annual recertification requirements.",
  },
  {
    title: "Comprehensive Insurance",
    description:
      "Professional liability insurance protecting both the business and clients throughout their journey.",
  },
  {
    title: "Daily Medical Monitoring",
    description:
      "SpO2 readings, symptom assessments, and proactive AMS/HAPE/HACE screening at every altitude checkpoint.",
  },
];
