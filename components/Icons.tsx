import Ionicons from '@expo/vector-icons/Ionicons';

export const HomeIcon = ({size, color}: {size: number, color: string}) => (
  <Ionicons name="earth" size={size} color={color} />
);

export const AboutIcon = ({size, color}: {size: number, color: string}) => (
  <Ionicons name="eye" size={size} color={color} />
);

export const BackIcon = ({size, color}: {size: number, color: string}) => (
  <Ionicons name="caret-back-outline" size={size} color={color} />
);

export const UnknownIcon = ({size, color}: {size: number, color: string}) => (
  <Ionicons name="help-outline" size={size} color={color} />
);

export const MaleIcon = ({size, color}: {size: number, color: string}) => (
  <Ionicons name="male" size={size} color={color} />
);

export const FemaleIcon = ({size, color}: {size: number, color: string}) => (
  <Ionicons name="female" size={size} color={color} />
);

export const OriginIcon = ({size, color}: {size: number, color: string}) => (
  <Ionicons name="planet" size={size} color={color} />
);

export const LocationIcon = ({size, color}: {size: number, color: string}) => (
  <Ionicons name="location-sharp" size={size} color={color} />
);
