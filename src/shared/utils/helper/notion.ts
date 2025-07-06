import { Annotations, ImageProperty, RichTextProperty } from '@/shared/types';

/**
 * 색을 테일윈드 색으로 매칭 해주는 헬퍼 함수
 */
export const getColorClass = (color: string): string => {
  const colorMap: Record<string, string> = {
    default: 'text-slate-200',
    gray: 'text-gray-500',
    brown: 'text-amber-700',
    orange: 'text-orange-500',
    yellow: 'text-yellow-500',
    green: 'text-green-500',
    blue: 'text-blue-500',
    purple: 'text-purple-500',
    pink: 'text-pink-500',
    red: 'text-red-500',
    // 백그라운드 색상들
    gray_background: 'bg-gray-600/90 text-gray-900',
    brown_background: 'bg-amber-100 text-amber-900',
    orange_background: 'bg-orange-100 text-orange-900',
    yellow_background: 'bg-yellow-100 text-yellow-900',
    green_background: 'bg-green-100 text-green-900',
    blue_background: 'bg-blue-100 text-blue-900',
    purple_background: 'bg-purple-100 text-purple-900',
    pink_background: 'bg-pink-100 text-pink-900',
    red_background: 'bg-red-100 text-red-900',
  };

  return colorMap[color] || colorMap.default;
};

/**
 * 어노테이션으로 text 스타일 적용 후 tailwind className으로 설정
 */
export const getStyleClasses = (annotations: Annotations): string => {
  const classes: string[] = [];

  if (annotations.bold) classes.push('font-bold');
  if (annotations.italic) classes.push('italic');
  if (annotations.strikethrough) classes.push('line-through');
  if (annotations.underline) classes.push('underline');
  if (annotations.code) {
    classes.push('bg-gray-700 text-rose-400! px-1 py-0.5 rounded text-sm font-mono');
  }

  // 색상 적용
  classes.push(getColorClass(annotations.color));

  return classes.join(' ');
};

/**
 * rich_text 배열에서 모든 plain_text를 추출하여 하나의 문자열 합침.
 */
export const getPlainText = (richTexts: RichTextProperty[]): string => {
  return richTexts.map((richText) => richText.plain_text).join('');
};

/**
 * image 블록에서 type에 따라 적절한 URL을 반환.
 */
export const getImageUrl = (image: ImageProperty): string | undefined => {
  if (image.type === 'external') {
    return image.external?.url;
  }
  if (image.type === 'file') {
    return image.file?.url;
  }
  return undefined;
};

/**
 * image 블록에서 캡션을 추출. 없으면 기본값을 반환
 */
export const getImageCaption = (image: ImageProperty, defaultCaption = '이미지'): string => {
  return getPlainText(image.caption) || defaultCaption;
};
