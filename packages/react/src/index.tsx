/**
 * @iconora/react
 * Production-grade React icon components for the Iconora library.
 *
 * @example
 * import { Icon, HomeIcon, SearchIcon } from '@iconora/react';
 *
 * // Generic usage
 * <Icon name="home" size={24} color="currentColor" />
 *
 * // Named component
 * <HomeIcon size={20} strokeWidth={1.5} className="text-blue-500" />
 */

import React, { forwardRef, memo } from "react";
import { icons, type IconMeta } from "@iconora/core";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in px (sets both width and height). Default: 24 */
  size?: number | string;
  /** Icon stroke color. Default: 'currentColor' */
  color?: string;
  /** Stroke width. Default: 2 */
  strokeWidth?: number | string;
  /** Accessible label */
  label?: string;
}

export interface NamedIconProps extends Omit<IconProps, "name"> {}

// ---------------------------------------------------------------------------
// Core renderer
// ---------------------------------------------------------------------------

function renderIcon(
  meta: IconMeta,
  {
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    label,
    className,
    style,
    ...rest
  }: IconProps,
  ref: React.Ref<SVGSVGElement>,
): React.ReactElement {
  const ariaProps = label
    ? { "aria-label": label, role: "img" }
    : { "aria-hidden": true };

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={meta.viewBox ?? "0 0 24 24"}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={["iconora", `iconora-${meta.name}`, className]
        .filter(Boolean)
        .join(" ")}
      style={style}
      {...ariaProps}
      {...rest}
    >
      {meta.paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Generic <Icon name="..." /> component
// ---------------------------------------------------------------------------

export interface IconComponentProps extends IconProps {
  /** Icon name from the Iconora library */
  name: string;
}

export const Icon = memo(
  forwardRef<SVGSVGElement, IconComponentProps>(function Icon(
    { name, ...props },
    ref,
  ) {
    const meta = icons[name];
    if (!meta) {
      console.warn(`[Iconora] Icon "${name}" not found.`);
      return null;
    }
    return renderIcon(meta, props, ref);
  }),
);

Icon.displayName = "Icon";

// ---------------------------------------------------------------------------
// Factory — creates a strongly-typed named icon component
// ---------------------------------------------------------------------------

type IconComponent = React.MemoExoticComponent<
  React.ForwardRefExoticComponent<
    NamedIconProps & React.RefAttributes<SVGSVGElement>
  >
>;

function createIcon(name: keyof typeof icons): IconComponent {
  const meta = icons[name];
  const displayName =
    (name as string)
      .split("-")
      .map((s: string) => s.charAt(0).toUpperCase() + s.slice(1))
      .join("") + "Icon";

  const Component = memo(
    forwardRef<SVGSVGElement, NamedIconProps>(function NamedIcon(props, ref) {
      return renderIcon(meta, props, ref);
    }),
  );

  Component.displayName = displayName;
  return Component;
}

// ---------------------------------------------------------------------------
// Named icon exports — one per icon
// ---------------------------------------------------------------------------

export const HomeIcon = createIcon("home");
export const MenuIcon = createIcon("menu");
export const CloseIcon = createIcon("close");
export const SearchIcon = createIcon("search");
export const SettingsIcon = createIcon("settings");
export const UserIcon = createIcon("user");
export const BellIcon = createIcon("bell");
export const HeartIcon = createIcon("heart");
export const StarIcon = createIcon("star");
export const BookmarkIcon = createIcon("bookmark");
export const FilterIcon = createIcon("filter");
export const GridIcon = createIcon("grid");
export const ListIcon = createIcon("list");
export const MoonIcon = createIcon("moon");
export const SunIcon = createIcon("sun");

export const ArrowUpIcon = createIcon("arrow-up");
export const ArrowDownIcon = createIcon("arrow-down");
export const ArrowLeftIcon = createIcon("arrow-left");
export const ArrowRightIcon = createIcon("arrow-right");
export const ChevronUpIcon = createIcon("chevron-up");
export const ChevronDownIcon = createIcon("chevron-down");
export const ChevronLeftIcon = createIcon("chevron-left");
export const ChevronRightIcon = createIcon("chevron-right");
export const RefreshIcon = createIcon("refresh");
export const ExternalLinkIcon = createIcon("external-link");

export const PlayIcon = createIcon("play");
export const PauseIcon = createIcon("pause");
export const StopIcon = createIcon("stop");
export const VolumeIcon = createIcon("volume");
export const ImageIcon = createIcon("image");
export const CameraIcon = createIcon("camera");
export const MicIcon = createIcon("mic");

export const MailIcon = createIcon("mail");
export const ChatIcon = createIcon("chat");
export const PhoneIcon = createIcon("phone");
export const LinkIcon = createIcon("link");
export const ShareIcon = createIcon("share");
export const GlobeIcon = createIcon("globe");

export const CartIcon = createIcon("cart");
export const CreditIcon = createIcon("credit");
export const TagIcon = createIcon("tag");
export const GiftIcon = createIcon("gift");

export const FileIcon = createIcon("file");
export const FolderIcon = createIcon("folder");
export const DownloadIcon = createIcon("download");
export const UploadIcon = createIcon("upload");
export const TrashIcon = createIcon("trash");
export const EditIcon = createIcon("edit");
export const CopyIcon = createIcon("copy");

export const BarChartIcon = createIcon("bar-chart");
export const PieChartIcon = createIcon("pie-chart");
export const TrendingIcon = createIcon("trending");

export const MonitorIcon = createIcon("monitor");
export const SmartphoneIcon = createIcon("smartphone");
export const WifiIcon = createIcon("wifi");
export const BluetoothIcon = createIcon("bluetooth");

export const LockIcon = createIcon("lock");
export const UnlockIcon = createIcon("unlock");
export const ShieldIcon = createIcon("shield");
export const KeyIcon = createIcon("key");
export const EyeIcon = createIcon("eye");
export const EyeOffIcon = createIcon("eye-off");

export const MapPinIcon = createIcon("map-pin");
export const CloudIcon = createIcon("cloud");
export const ZapIcon = createIcon("zap");

// Re-export core utilities for convenience
export {
  icons,
  iconNames,
  getIconsByCategory,
  searchIcons,
  categories,
} from "@iconora/core";
export type { IconMeta, IconCategory } from "@iconora/core";
