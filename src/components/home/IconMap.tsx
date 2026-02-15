import type { LucideIcon } from 'lucide-react'
import {
  Atom,
  BarChart3,
  Boxes,
  CheckCircle2,
  Code2,
  Diamond,
  GraduationCap,
  Headphones,
  Layers3,
  Leaf,
  Palette,
  Shield,
  Users,
  Zap,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  atom: Atom,
  'bar-chart': BarChart3,
  boxes: Boxes,
  'check-circle': CheckCircle2,
  code: Code2,
  diamond: Diamond,
  'graduation-cap': GraduationCap,
  headphones: Headphones,
  layers: Layers3,
  leaf: Leaf,
  palette: Palette,
  shield: Shield,
  users: Users,
  zap: Zap,
}

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Zap
}
