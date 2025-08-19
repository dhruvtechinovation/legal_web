export {};

declare global {
  interface Window {
    Tawk_API?: {
      [x: string]: any;
      hideWidget: () => void;
      showWidget: () => void;
      onLoad?: () => void;
      maximize?: () => void;
      minimize?: () => void;
      toggle?: () => void;
      // Add other Tawk methods as needed
    };
  }
}

