import { ImageLoaderProps } from 'next/image'

const normalizeSrc = (src: string) => (src[0] === '/' ? src.slice(1) : src)

export const contentfulLoader = ({
  src,
  quality = 70,
  width,
}: ImageLoaderProps): string => {
  const params = ['w=' + width]

  if (quality) {
    params.push('q=' + quality)
  }

  return `${normalizeSrc(src)}?${params.join('&')}&fm=webp`
}
