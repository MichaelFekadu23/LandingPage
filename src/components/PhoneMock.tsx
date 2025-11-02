export const PhoneMock: React.FC<{ src?: string; node?: React.ReactNode }> = ({ src, node }) => {
  // Single, full SVG provided by the user. We just render it and keep sizing/styling.
  return (
    <div className="mx-auto w-full max-w-sm select-none">
      {node ? (
        <div className="w-full">{node}</div>
      ) : src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <object data={src} type="image/svg+xml"  aria-label="Moto phone mock"/>
      ) : (
        // Simple placeholder block until the real SVG is provided
        <div className="aspect-[9/19] w-full rounded-[2.2rem] border border-dashed border-emerald/40 grid place-items-center text-sm text-black/50">
          Phone SVG Placeholder
        </div>
      )}
    </div>
  );
};