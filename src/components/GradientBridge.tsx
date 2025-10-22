export default function GradientBridge() {
  return (
    <div className="relative w-full">
      <div
        style={{
          /* gradient */
          position: 'absolute',
          width: '100vw',
          height: '108px',
          left: 'calc(50% - 100vw/2)',
          top: '-50px',

          background: '#FFFFFF',
          filter: 'blur(40px)',
          zIndex: 30,

        }}
      />
      <div
        style={{
          /* gradient */
          position: 'absolute',
          width: '100vw',
          height: '108px',
          left: 'calc(50% - 100vw/2)',
          top: '-30px',

          background: '#FFFFFF',
          filter: 'blur(22px)',
          zIndex: 40

          /* gradient frame */



        }}
      />
    </div>
  )
}