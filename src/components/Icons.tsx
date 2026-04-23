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
        d="M12 21s-6.8-4.4-9.1-8.2C.5 9.1 2.2 4.8 6 4.2c2-.3 3.4.4 4.4 1.6 1-1.2 2.5-1.9 4.5-1.6 3.7.6 5.4 4.9 3 8.6C15.5 16.6 12 21 12 21Z"
      />
      <path {...baseProps} d="M12 8.2v6.2" />
      <path {...baseProps} d="M8.9 11.3h6.2" />
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

