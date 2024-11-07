import React from 'react';
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label as LabelComponent } from "@/registry/default/ui/label";

type LabelDemoProps = {
  labelText?: string;
  backgroundColor?: string;
  textColor?: string;
};

const LabelDemo: React.FC<LabelDemoProps> = ({ labelText, backgroundColor, textColor }) => {
  return (
    <div
      className="p-4"
      style={{ backgroundColor: backgroundColor || 'transparent' }}
    >
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <LabelComponent
          htmlFor="terms"
          className="label"
          style={{ color: textColor || '#000000' }}
        >
          {labelText || 'Accept terms and conditions'}
        </LabelComponent>
      </div>
    </div>
  );
};

export default LabelDemo;
