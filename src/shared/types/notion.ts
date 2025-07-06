/**
 * title, text 프로퍼티
 */
export type TextProperty = {
  id: string;
  type: string;
  title?: {
    type: string;
    plain_text: string;
  }[];
  rich_text?: {
    type: string;
    plain_text: string;
  }[];
};

/**
 * 날짜 프로퍼티
 */
export type TimeProperty = {
  id: string;
  type: string;
  created_time?: string;
  last_edited_time?: string;
};
/**
 * 다중 선택 프로퍼티
 */
export type MultiSelectProperty = {
  id: string;
  type: string;
  multi_select: {
    id: string;
    name: string;
    color: string;
  }[];
};

/**
 * 본문 프로퍼티
 */
export type ContentProperty = {
  paragraph?: ParagraphProperty;
  image?: ImageProperty;
  heading_1?: HeadingProperty;
  heading_2?: HeadingProperty;
  heading_3?: HeadingProperty;
  bulleted_list_item?: BulletedPointProperty;
  callout?: CallOutProperty;
  code?: CodeFieldProperty;
  id: string;
  type: string;
};

/**
 * 코드 필드 프로퍼티
 */
export type CodeFieldProperty = {
  caption: string[];
  rich_text: RichTextProperty[];
  language: string;
};
/**
 * 콜아웃 프로퍼티
 */
export type CallOutProperty = {
  icon: { type: string; emoji: string };
  color: string;
  rich_text: RichTextProperty[];
};
/**
 * 블릿 포인트 프로퍼티
 */
export type BulletedPointProperty = {
  color: string;
  rich_text: RichTextProperty[];
};

/**
 * 헤더 3 프로퍼티
 */
export type HeadingProperty = {
  is_toggleable: boolean;
  color: string;
  rich_text: RichTextProperty[];
};

/**
 * 파러그래프 프로퍼티
 */
export type ParagraphProperty = {
  color: string;
  rich_text: RichTextProperty[];
};
/**
 * 리치 텍스트 프로퍼티
 */
export type RichTextProperty = {
  annotations: Annotations;
  href: string | null;
  plain_text: string;
  text: {
    content: string;
    link: string | null;
  };
  type: string;
};

/**
 * 이미지 프로퍼티
 */
export type ImageProperty = {
  caption: RichTextProperty[];
  file?: {
    url: string;
    expiry_time: string;
  };
  external?: { url: string };
  type: 'external' | 'file';
};

/**
 * 어노테이션 type
 */
export type Annotations = {
  bold: boolean;
  code: boolean;
  color: string;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
};
