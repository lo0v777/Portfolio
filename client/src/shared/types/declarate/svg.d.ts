declare module "*.svg?react" {
  import type React from 'react';
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}