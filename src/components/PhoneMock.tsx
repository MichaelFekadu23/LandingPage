export const PhoneMock: React.FC<{ src?: string; node?: React.ReactNode }> = ({ src, node }) => {
  return (
    <div className="mx-auto w-full max-w-sm select-none">
      {node ? (
        // Inline SVG node from props
        <div className="block w-full h-auto mx-auto">{node}</div>
      ) : src ? (
        // Use <object>, but force block + responsive sizing
        <object
          data={src}
          type="image/svg+xml"
          role="img"
          aria-label="Moto phone mock"
          className="block w-full h-auto mx-auto"
        />
      ) : (
        // Placeholder
        <div className="aspect-[9/19] w-full rounded-[2.2rem] border border-dashed border-emerald/40 grid place-items-center text-sm text-black/50">
          Phone SVG Placeholder
        </div>
      )}
    </div>
  );
};
