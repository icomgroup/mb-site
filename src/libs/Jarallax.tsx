// import { useEffect, ReactNode, createRef } from "react";

// import { jarallax } from "jarallax";
// import "jarallax/dist/jarallax.min.css";

// type jarallaxConfig = {
//   speed?: number;
// };

// type Props = {
//   className?: string;
//   children: ReactNode;
// } & jarallaxConfig;

// export default function Jarallax({
//   className = "",
//   children,
//   ...props
// }: Props) {
//   const $el = createRef<HTMLDivElement>();

//   // Init Jarallax.
//   useEffect(() => {
//     if ($el.current) {
//       jarallax($el.current, props);
//     }
//     const refCopy = $el;
//     // Destroy Jarallax.
//     return function destroy() {
//       if (refCopy) {
//         jarallax(refCopy, "destroy");
//       }
//     };
//   }, [$el, props]);

//   // Update options.
//   useEffect(() => {
//     if ($el.current) {
//       jarallax($el.current, "destroy");
//       jarallax($el.current, props);
//     }
//   }, [$el, props]);

//   return (
//     <div ref={$el} className={`jarallax ${className}`}>
//       {children}
//     </div>
//   );
// }
