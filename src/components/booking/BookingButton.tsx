"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { useCalendlyBooking } from "@/components/booking/CalendlyBookingProvider";
import type { ComponentProps } from "react";

type MagneticButtonProps = ComponentProps<typeof MagneticButton>;

type BookingButtonProps = Omit<MagneticButtonProps, "href" | "onClick"> & {
  onClick?: () => void;
};

export function BookingButton({ onClick, ...props }: BookingButtonProps) {
  const { openBooking } = useCalendlyBooking();

  return (
    <MagneticButton
      {...props}
      onClick={() => {
        onClick?.();
        openBooking();
      }}
    />
  );
}
