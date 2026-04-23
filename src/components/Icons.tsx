import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 1.8,
};

export function BrandIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        {...baseProps}
        d="M12 21c5.8-2 8-6.9 8-11.8V5.9L12 3 4 5.9v3.3C4 14.1 6.2 19 12 21Z"
      />
      <path {...baseProps} d="M12 8v7" />
      <path {...baseProps} d="M8.5 11.5h7" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect {...baseProps} x="3" y="5" width="18" height="14" rx="2.5" />
      <path {...baseProps} d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        {...baseProps}
        d="M19.2 18.1A8.4 8.4 0 1 0 6 19l-2.2 2.2 3.1-.7a8.4 8.4 0 0 0 12.3-2.4Z"
      />
      <path
        {...baseProps}
        d="M9.2 8.7c-.3.3-.8 1-.8 1.7 0 .7.5 1.4.7 1.7.2.2 2.5 3.9 6.1 5.2 2.9 1.1 3.4.8 4 .7.6-.1 1.8-.8 2-1.5.3-.7.3-1.3.2-1.5-.1-.2-.5-.3-1-.6s-1.8-.9-2.1-1-.5-.2-.7.2-.8 1-.9 1.2c-.2.2-.4.2-.8.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.5-.6.2-.2.2-.4.3-.6.1-.2.1-.4 0-.6-.1-.2-.7-1.8-1-2.4-.3-.7-.5-.6-.7-.6h-.6Z"
      />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...baseProps} d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path {...baseProps} d="M4 20a8 8 0 0 1 16 0" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        {...baseProps}
        d="M12 20.4s-7-4.5-8.9-8C1.3 9.5 2.6 6.1 5.7 5.6c2-.3 3.6.6 4.6 2 1-1.4 2.6-2.3 4.6-2 3.1.5 4.4 3.9 2.6 6.8-1.9 3.5-5.5 8-5.5 8Z"
      />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        {...baseProps}
        d="M12 21c5.5-2.1 7-6.6 7-11.1V5.8L12 3 5 5.8v4.1C5 14.4 6.5 18.9 12 21Z"
      />
      <path {...baseProps} d="m9.4 12.1 1.7 1.7 3.7-4.2" />
    </svg>
  );
}

export function TeamIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...baseProps} d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path {...baseProps} d="M16.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      <path {...baseProps} d="M3.5 19a5.5 5.5 0 0 1 9 0" />
      <path {...baseProps} d="M13 18c.7-1.8 2.2-3 4.5-3 1.6 0 2.5.4 3 1" />
    </svg>
  );
}

export function StethoscopeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...baseProps} d="M7 4v5a4 4 0 1 0 8 0V4" />
      <path {...baseProps} d="M7 6H5" />
      <path {...baseProps} d="M17 6h2" />
      <path {...baseProps} d="M11 13v2a4 4 0 0 0 8 0v-1.2" />
      <path {...baseProps} d="M19 14.3a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z" />
    </svg>
  );
}

export function SyringeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...baseProps} d="m14.8 4.2 5 5" />
      <path {...baseProps} d="m13.4 5.6 5 5" />
      <path {...baseProps} d="m5.3 19.2 8.1-8.1 2.8 2.8-8.1 8.1H5.3v-2.8Z" />
      <path {...baseProps} d="m12 7 5-5" />
      <path {...baseProps} d="M3 21h4" />
    </svg>
  );
}

export function ClipboardIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect {...baseProps} x="5" y="4.5" width="14" height="16" rx="2.5" />
      <path {...baseProps} d="M9 4.5h6v3H9z" />
      <path {...baseProps} d="M9 10h6" />
      <path {...baseProps} d="M9 14h6" />
    </svg>
  );
}

export function HeartbeatIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        {...baseProps}
        d="M3.5 12.2c0-4 4.4-6.7 8-3.2.2.2.4.4.5.6.2-.2.3-.4.5-.6 3.6-3.5 8-.8 8 3.2 0 4.6-6.1 8.4-8.5 9.8-2.4-1.4-8.5-5.2-8.5-9.8Z"
      />
      <path {...baseProps} d="M4.8 12h3.2l1.4-2.4 2.3 5 2.1-3.3H19" />
    </svg>
  );
}

export function CareIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...baseProps} d="M7.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      <path {...baseProps} d="M16.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      <path {...baseProps} d="M3.5 18c.6-2.3 2.5-4 5-4s4.4 1.7 5 4" />
      <path {...baseProps} d="M10.5 18c.6-2.3 2.5-4 5-4s4.4 1.7 5 4" />
      <path {...baseProps} d="M12 5.5c.7-1 1.7-1.5 2.8-1.5 2.1 0 3.3 2.2 2.2 4-1 1.6-3.3 3.3-5 4.4-1.7-1.1-4-2.8-5-4.4-1.1-1.8.1-4 2.2-4 1.1 0 2.1.5 2.8 1.5Z" />
    </svg>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect {...baseProps} x="3" y="7" width="18" height="12" rx="2.5" />
      <path {...baseProps} d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7" />
      <path {...baseProps} d="M3 11.5h18" />
      <path {...baseProps} d="M11 13h2" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        {...baseProps}
        d="M12 21s6-5.7 6-10.5A6 6 0 1 0 6 10.5C6 15.3 12 21 12 21Z"
      />
      <path {...baseProps} d="M12 12.3a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z" />
    </svg>
  );
}

export function GearIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        {...baseProps}
        d="m12 3 1 2.3 2.6.4.7 2.5 2.1 1.5-.9 2.5.9 2.5-2.1 1.5-.7 2.5-2.6.4L12 21l-1-2.3-2.6-.4-.7-2.5-2.1-1.5.9-2.5-.9-2.5 2.1-1.5.7-2.5 2.6-.4L12 3Z"
      />
      <path {...baseProps} d="M12 15.4a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8Z" />
    </svg>
  );
}

export function TrendUpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...baseProps} d="M4 18V6" />
      <path {...baseProps} d="M4 18h16" />
      <path {...baseProps} d="m7 14 4-4 3 3 4-5" />
      <path {...baseProps} d="M16 8h2v2" />
    </svg>
  );
}

export function TriangleAlertIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...baseProps} d="M12 4 3.7 18.5A1.1 1.1 0 0 0 4.7 20h14.6a1.1 1.1 0 0 0 1-1.5L12 4Z" />
      <path {...baseProps} d="M12 9v4.8" />
      <path {...baseProps} d="M12 17.2h.1" />
    </svg>
  );
}

export function SearchFileIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...baseProps} d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
      <path {...baseProps} d="M14 3v5h5" />
      <path {...baseProps} d="M10.4 16.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z" />
      <path {...baseProps} d="m12.3 18.4 1.7 1.6" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...baseProps} d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path {...baseProps} d="M12 7.4v5l3.3 1.9" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...baseProps} d="M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
      <path {...baseProps} d="m16 16 4 4" />
    </svg>
  );
}

export function ChecklistIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect {...baseProps} x="5" y="4" width="14" height="16" rx="2.5" />
      <path {...baseProps} d="m8.3 10.2 1.2 1.2 2-2.2" />
      <path {...baseProps} d="M12.8 10.7H16" />
      <path {...baseProps} d="m8.3 14.8 1.2 1.2 2-2.2" />
      <path {...baseProps} d="M12.8 15.3H16" />
    </svg>
  );
}

export function MonitorIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect {...baseProps} x="4" y="5" width="16" height="11" rx="2" />
      <path {...baseProps} d="M9 20h6" />
      <path {...baseProps} d="M12 16v4" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...baseProps} d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path {...baseProps} d="m8.6 12.1 2.2 2.2 4.7-4.9" />
    </svg>
  );
}

export function InstrumentIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...baseProps} d="m6 5 3.5 3.5" />
      <path {...baseProps} d="m14.5 14.5 3.5 3.5" />
      <path {...baseProps} d="M8.3 13.2 5 21" />
      <path {...baseProps} d="m10.1 11.4 8.9-8.9" />
      <path {...baseProps} d="M6.1 3.7A2.1 2.1 0 1 0 9 6.6" />
      <path {...baseProps} d="M14.8 14.6a2.1 2.1 0 1 0 2.9 2.9" />
      <path {...baseProps} d="m6.6 17.2 3-3 3.1 3.1-3 3" />
    </svg>
  );
}
