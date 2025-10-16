// src/global.d.ts
export {}; // make file a module

// ---- Asset module shims (for importing files) ----
// Use these if you plan to `import card from './card.glb'` or `import pic from './lanyard.png'`
declare module '*.glb' {
  const src: string;
  export default src;
}
declare module '*.gltf' {
  const src: string;
  export default src;
}
declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.jpeg' {
  const src: string;
  export default src;
}

// ---- Third-party modules with no types ----
declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
  export default any;
}
declare module 'draco3d';
declare module 'react-reconciler';

// ---- Small WebXR / OffscreenCanvas shims if TS complains ----
declare module 'offscreencanvas';

declare global {
  // minimal navigator.xr typing if you use webxr
  interface Navigator {
    xr?: any;
  }

  namespace JSX {
    interface IntrinsicElements {
      // three-stdlib MeshLine components used in some demos
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}
