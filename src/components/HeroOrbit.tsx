import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldorbit = false,
  shouldspin = false,
  spinduration,
  orbitduration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  shouldspin?: boolean;
  spinduration: string;
  shouldorbit?: boolean;
  orbitduration?: string;
}>) => {
  // Determine classes and styles based on `shouldorbit` and `shouldspin`
  const orbitClass = shouldorbit ? "animate-spin" : "";
  const spinClass = shouldspin ? "animate-spin" : "";

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className={twMerge(orbitClass)}
        style={{
          animationDuration: orbitduration,
        }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            className={twMerge(spinClass)}
            style={{
              animationDuration: spinduration,
            }}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
