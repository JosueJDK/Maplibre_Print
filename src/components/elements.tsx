import clsx from "clsx";
import type { ClassValue } from "clsx";
import classed from "classed-components";
import * as Tooltip from "@radix-ui/react-tooltip";
import * as Popover from "@radix-ui/react-popover";
import {
    SymbolIcon
  } from "@radix-ui/react-icons";

export type B3Size = "xxs" | "xs" | "sm" | "md" | "lg";

export type B3Variant =
  | "default"
  | "primary"
  | "quiet"
  | "code"
  | "quiet/mode"
  | "destructive"
  | "custom";
export type B3Side = "default" | "left" | "right" | "middle";


export const sharedPadding = (
    size: B3Size,
    side: B3Side = "default"
  ): ClassValue => ({
    "p-0 text-xs rounded-sm": size === "xxs",
    "py-0.5 px-1.5 text-xs rounded-sm": size === "xs",
    "py-1 px-2 text-sm rounded": size === "sm",
    "py-1 px-3 text-md rounded": size === "md",
    "rounded-l-none": side === "right",
    "rounded-r-none": side === "left",
    "rounded-none": side === "middle",
  });


/**
 * Shared by select and buttons
 */
export function sharedOutline(
    variant: B3Variant,
    disabled = false
  ): ClassValue {
    return [
      `
      outline-none
  
    `,
      disabled
        ? ""
        : `focus-visible:ring-1
      focus-visible:ring-offset-1
      focus-visible:ring-blue-500
      dark:focus-visible:ring-blue-500
      dark:focus-visible:ring-offset-gray-900`,
  
      {
        [`border border-blue-500`]: variant === "primary",
        [`border
      border-gray-200               dark:border-gray-500
      shadow-sm
    `]: variant === "default",
  
        [`
      focus-visible:border-gray-200   dark:focus-visible:border-gray-300
      hover:border-gray-300   dark:hover:border-gray-300
      `]: variant === "default" && !disabled,
  
        [`border
      border-red-200               dark:border-red-300
    `]: variant === "destructive",
  
        [`
      focus-visible:border-red-500   dark:focus-visible:border-red-300
      hover:border-red-300   dark:hover:border-red-300
    `]: variant === "destructive" && !disabled,
      },
    ];
  }
  
  const sharedBackground = (variant: B3Variant, disabled = false): ClassValue => {
    switch (variant) {
      case "primary":
      case "code":
        return [
          `bg-blue-500`,
          !disabled &&
            `hover:bg-blue-600 dark:hover:bg-blue-400 hover:shadow`,
        ];
      case "default":
        return !disabled && `hover:bg-gray-100 dark:hover:bg-gray-800`;
      case "custom":
          return !disabled && `hover:bg-gray-500 dark:hover:bg-gray-800`;
      case "quiet":
        return !disabled && `hover:bg-gray-200 dark:hover:bg-gray-700`;
      case "quiet/mode":
        return !disabled && `hover:bg-gray-200 dark:hover:bg-gray-700`;
      case "destructive":
        return !disabled && `hover:bg-red-500/10 dark:hover:bg-red-500/20`;
    }
  };
  
  const sharedText = (variant: B3Variant): ClassValue => {
    switch (variant) {
      case "quiet":
      case "code":
      case "quiet/mode":
      case "default": {
        return "font-medium text-gray-700 dark:text-white";
      }
      case "primary": {
        return "font-medium text-white";
      }
      case "custom": {
        return "font-medium text-white";
      }
      case "destructive": {
        return "font-medium text-red-500 dark:text-red-300";
      }
    }
  };

  
export const StyledLabelSpan = classed.span(
  ({ size = "sm" }: { size?: B3Size }) =>
    clsx(
      {
        "text-sm": size === "sm",
        "text-xs": size === "xs",
      },
      "text-gray-700 dark:text-gray-300 select-none"
    )
);


export const styledPanelTitle = ({
  interactive = false,
}: {
  interactive?: boolean;
}) =>
  clsx(
    `text-sm
  w-full
  text-gray-700 dark:text-gray-300
  flex justify-between items-center`,
    "px-3 py-3",
    interactive && `hover:text-gray-900 dark:hover:text-white`
  );


export const styledCheckbox = ({
  variant = "default",
}: {
  variant: B3Variant;
}) =>
  clsx([
    sharedOutline("primary"),
    {
      "text-purple-500 focus:ring-purple-500": variant === "primary",
      "text-gray-500 border-gray-500 hover:border-gray-700 dark:hover:border-gray-300 focus:ring-gray-500":
        variant === "default",
    },
    `bg-transparent rounded dark:ring-offset-gray-700`,
  ]);

  
export const inputClass = ({
  _size = "sm",
  variant = "default",
  width = "w-56"
}: {
  _size?: B3Size;
  variant?: B3Variant;
  width?: string
}) =>
  clsx([
    sharedPadding(_size),
    sharedOutline("default"),
    {
      "font-mono": variant === "code",
    },
    `block ${width}
    dark:bg-transparent dark:text-gray-100`,
]);


export const styledButton = ({
    size = "sm",
    variant = "default",
    disabled = false,
    side = "default",
  }: {
    size?: B3Size | "full-width";
    variant?: B3Variant;
    disabled?: boolean;
    side?: B3Side;
  }) =>
    clsx(
      variant === "quiet/mode"
        ? `aria-expanded:bg-blue-400 aria-expanded:text-white
        dark:aria-expanded:bg-blue-600
      data-state-on:bg-blue-400 dark:data-state-on:bg-gray-900`
        : variant === "primary"
        ? `aria-expanded:bg-blue-600
      data-state-on:bg-blue-600 rounded-full mr-2`
      : variant === "custom"
      ? `aria-expanded:bg-gray-600 bg-gray-400
    data-state-on:bg-gray-600 rounded-full mr-2`
      : `
      aria-expanded:bg-gray-200 dark:aria-expanded:bg-black
      data-state-on:bg-gray-200 dark:data-state-on:bg-gray-600`,
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "transition-colors",
      // Focus
      `focus-visible:outline-none`,
      // Sizing
      sharedPadding(size === "full-width" ? "md" : size, side),
      // Display
      `inline-flex items-center gap-x-1`,
      // Transition
      // `transition-all`,
      // Text
      sharedText(variant),
      // Outline
      sharedOutline(variant, disabled),
      sharedBackground(variant, disabled),
      size === "full-width" && "flex-auto justify-center",
      // Colored variants
      {}
    );

export const TContent = classed(Tooltip.Content)(
    ({ size = "sm" }: { size?: B3Size }) => [
      {
        "max-w-md": size === "sm",
        "w-64": size === "md",
      },
      `px-2 py-1 rounded
    z-50
    text-sm
    border
    shadow-sm
    text-gray-700          dark:text-white
    bg-white               dark:bg-gray-900
    border-gray-200        dark:border-gray-600
    `,
    ]
  );


export const StyledPopoverContent = classed(Popover.Content)(
    ({
    size = "sm",
    flush = "no",
    }: {
    size?: B3Size | "no-width";
    flush?: "yes" | "no";
    }) =>
    clsx(
        {
        "w-32": size === "xs",
        "w-64": size === "sm",
        "w-96": size === "md",
        "w-[36em]": size === "lg",
        },
        flush === "yes" ? "" : "p-3",
        `shadow-lg
        placemark-appear
        z-50
        bg-white dark:bg-gray-900
        dark:text-white
        border border-gray-200 dark:border-gray-700 rounded-md`
    )
);

const ArrowSVG = (
    <svg>
      <polygon points="0,0 30,0 15,10" />
      <path
        d="M 0 0 L 15 10 L 30 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-gray-200 dark:text-gray-600"
      />
    </svg>
);

const arrowLike = "text-white dark:text-gray-900 fill-current";

export const StyledPopoverArrow = () => (
    <Popover.Arrow offset={5} width={11} height={5} className={arrowLike} asChild>
      {ArrowSVG}
    </Popover.Arrow>
  );

export const Button = classed.button(styledButton);

export function PopoverContent2({
    children,
    ...props
  }: React.ComponentProps<typeof StyledPopoverContent>) {
    return (
      <Popover.Portal>
        <StyledPopoverContent {...props}>
          <StyledPopoverArrow />
          {children}
        </StyledPopoverContent>
      </Popover.Portal>
    );
  }


export function Loading({ size = "sm" }: { size?: B3Size }) {
  return (
    <div
      className={clsx(
        {
          "h-32": size === "sm",
          "h-16": size === "xs",
        },
        `text-gray-500 flex items-center justify-center`
      )}
    >
      <SymbolIcon className="animate-spin" />
      <span className="ml-2">Loading…</span>
    </div>
  );
}