type ObjectValues<T> = T[keyof T]

export const ButtonSizes = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
} as const

export type ButtonSize = ObjectValues<typeof ButtonSizes>
