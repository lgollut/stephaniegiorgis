// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type ArchivesDocumentDataSlicesSlice = LinkListSlice;

/**
 * Content for Archives documents
 */
interface ArchivesDocumentData {
  /**
   * Slice Zone field in *Archives*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: archives.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ArchivesDocumentDataSlicesSlice> /**
   * Meta Description field in *Archives*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: archives.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Archives*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: archives.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Archives*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: archives.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Archives document from Prismic
 *
 * - **API ID**: `archives`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArchivesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ArchivesDocumentData>,
    'archives',
    Lang
  >;

type ArtworkDocumentDataSlicesSlice = DocumentationSlice;

/**
 * Content for Artwork documents
 */
interface ArtworkDocumentData {
  /**
   * Title field in *Artwork*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: artwork.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Medium field in *Artwork*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: artwork.medium
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  medium: prismic.KeyTextField;

  /**
   * Measure field in *Artwork*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: artwork.measure
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  measure: prismic.KeyTextField;

  /**
   * Year field in *Artwork*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: artwork.year
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  year: prismic.KeyTextField;

  /**
   * Description field in *Artwork*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: artwork.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Cover Image field in *Artwork*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: artwork.cover_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cover_image: prismic.ImageField<'1:1'>;

  /**
   * Slice Zone field in *Artwork*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: artwork.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ArtworkDocumentDataSlicesSlice> /**
   * Meta title field in *Artwork*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: artwork.meta_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta description field in *Artwork*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: artwork.meta_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta image field in *Artwork*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: artwork.meta_image
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Artwork document from Prismic
 *
 * - **API ID**: `artwork`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArtworkDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ArtworkDocumentData>,
    'artwork',
    Lang
  >;

type ArtworksDocumentDataSlicesSlice = GridSlice;

/**
 * Content for Artworks documents
 */
interface ArtworksDocumentData {
  /**
   * Slice Zone field in *Artworks*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: artworks.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ArtworksDocumentDataSlicesSlice> /**
   * Meta Description field in *Artworks*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: artworks.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Artworks*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: artworks.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Artworks*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: artworks.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Artworks document from Prismic
 *
 * - **API ID**: `artworks`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArtworksDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ArtworksDocumentData>,
    'artworks',
    Lang
  >;

type ContactDocumentDataSlicesSlice = never;

/**
 * Content for Contact documents
 */
interface ContactDocumentData {
  /**
   * Image field in *Contact*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<'2/3'>;

  /**
   * Legend field in *Contact*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.legend
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  legend: prismic.RichTextField;

  /**
   * Slice Zone field in *Contact*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ContactDocumentDataSlicesSlice> /**
   * Meta Description field in *Contact*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: contact.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Contact*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Contact*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: contact.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Contact document from Prismic
 *
 * - **API ID**: `contact`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ContactDocumentData>,
    'contact',
    Lang
  >;

type HomepageDocumentDataSlicesSlice = CaptionImageSlice | RichTextSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<HomepageDocumentData>,
    'homepage',
    Lang
  >;

type MainNavigationDocumentDataSlicesSlice = NavigationLinksSlice;

/**
 * Content for Main Navigation documents
 */
interface MainNavigationDocumentData {
  /**
   * Slice Zone field in *Main Navigation*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: main_navigation.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<MainNavigationDocumentDataSlicesSlice>;
}

/**
 * Main Navigation document from Prismic
 *
 * - **API ID**: `main_navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MainNavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<MainNavigationDocumentData>,
    'main_navigation',
    Lang
  >;

type PresentationDocumentDataSlicesSlice = never;

/**
 * Content for Presentation documents
 */
interface PresentationDocumentData {
  /**
   * Introduction field in *Presentation*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: presentation.introduction
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  introduction: prismic.RichTextField;

  /**
   * Resume field in *Presentation*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: presentation.resume
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  resume: prismic.RichTextField;

  /**
   * Resume Image field in *Presentation*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: presentation.resume_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  resume_image: prismic.ImageField<never>;

  /**
   * Resume Link field in *Presentation*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: presentation.resume_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  resume_link: prismic.LinkToMediaField;

  /**
   * Slice Zone field in *Presentation*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: presentation.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PresentationDocumentDataSlicesSlice> /**
   * Meta Description field in *Presentation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: presentation.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Presentation*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: presentation.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Presentation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: presentation.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Presentation document from Prismic
 *
 * - **API ID**: `presentation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PresentationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<PresentationDocumentData>,
    'presentation',
    Lang
  >;

export type AllDocumentTypes =
  | ArchivesDocument
  | ArtworkDocument
  | ArtworksDocument
  | ContactDocument
  | HomepageDocument
  | MainNavigationDocument
  | PresentationDocument;

/**
 * Primary content in *CaptionImage → Primary*
 */
export interface CaptionImageSliceDefaultPrimary {
  /**
   * Image field in *CaptionImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: caption_image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<'4:3' | '2:3' | '3:2'>;

  /**
   * caption field in *CaptionImage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: caption_image.primary.caption
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  caption: prismic.RichTextField;

  /**
   * Image Ratio field in *CaptionImage → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: 4:3
   * - **API ID Path**: caption_image.primary.image_ratio
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  image_ratio: prismic.SelectField<
    '4:3' | '2:3' | '3:2' | 'original',
    'filled'
  >;
}

/**
 * Default variation for CaptionImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CaptionImageSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<CaptionImageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CaptionImage*
 */
type CaptionImageSliceVariation = CaptionImageSliceDefault;

/**
 * CaptionImage Shared Slice
 *
 * - **API ID**: `caption_image`
 * - **Description**: CaptionImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CaptionImageSlice = prismic.SharedSlice<
  'caption_image',
  CaptionImageSliceVariation
>;

/**
 * Primary content in *Documentation → Primary*
 */
export interface DocumentationSliceImagePrimary {
  /**
   * Layout field in *Documentation → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Slider
   * - **API ID Path**: documentation.primary.layout
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  layout: prismic.SelectField<
    | 'Slider'
    | 'Grid 1/1'
    | 'Grid 1/2'
    | 'Grid 2/1'
    | 'Grid 2/2'
    | 'Grid 1/1/1'
    | 'Grid 1/1/2',
    'filled'
  >;
}

/**
 * Primary content in *Documentation → Items*
 */
export interface DocumentationSliceImageItem {
  /**
   * Image field in *Documentation → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: documentation.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<'2:3' | '3:2' | '1:1'>;

  /**
   * Image Ratio field in *Documentation → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: 2:3
   * - **API ID Path**: documentation.items[].image_ratio
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  image_ratio: prismic.SelectField<'2:3' | '3:2' | '1:1', 'filled'>;
}

/**
 * Image variation for Documentation Slice
 *
 * - **API ID**: `image`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DocumentationSliceImage = prismic.SharedSliceVariation<
  'image',
  Simplify<DocumentationSliceImagePrimary>,
  Simplify<DocumentationSliceImageItem>
>;

/**
 * Primary content in *Documentation → Items*
 */
export interface DocumentationSliceSoundItem {
  /**
   * Poster field in *Documentation → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: documentation.items[].poster
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  poster: prismic.ImageField<'2:3' | '3:2' | '1:1'>;

  /**
   * Sound field in *Documentation → Items*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: documentation.items[].sound
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  sound: prismic.LinkToMediaField;

  /**
   * Poster Ratio field in *Documentation → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: 2:3
   * - **API ID Path**: documentation.items[].poster_ratio
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  poster_ratio: prismic.SelectField<'2:3' | '3:2' | '1:1', 'filled'>;
}

/**
 * Sound variation for Documentation Slice
 *
 * - **API ID**: `sound`
 * - **Description**: Sound
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DocumentationSliceSound = prismic.SharedSliceVariation<
  'sound',
  Record<string, never>,
  Simplify<DocumentationSliceSoundItem>
>;

/**
 * Primary content in *Documentation → Items*
 */
export interface DocumentationSliceVideoItem {
  /**
   * Poster field in *Documentation → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: documentation.items[].poster
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  poster: prismic.ImageField<'4:3' | '16:9' | '1:1'>;

  /**
   * Video field in *Documentation → Items*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: documentation.items[].video
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  video: prismic.LinkToMediaField;

  /**
   * Ratio field in *Documentation → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: 16:9
   * - **API ID Path**: documentation.items[].ratio
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  ratio: prismic.SelectField<'16:9' | '4:3' | '1:1', 'filled'>;
}

/**
 * Video variation for Documentation Slice
 *
 * - **API ID**: `video`
 * - **Description**: Video
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DocumentationSliceVideo = prismic.SharedSliceVariation<
  'video',
  Record<string, never>,
  Simplify<DocumentationSliceVideoItem>
>;

/**
 * Slice variation for *Documentation*
 */
type DocumentationSliceVariation =
  | DocumentationSliceImage
  | DocumentationSliceSound
  | DocumentationSliceVideo;

/**
 * Documentation Shared Slice
 *
 * - **API ID**: `documentation`
 * - **Description**: Documentation
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DocumentationSlice = prismic.SharedSlice<
  'documentation',
  DocumentationSliceVariation
>;

/**
 * Primary content in *Grid → Items*
 */
export interface GridSliceDefaultItem {
  /**
   * Artwork field in *Grid → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: grid.items[].artwork
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  artwork: prismic.LinkField;
}

/**
 * Default variation for Grid Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GridSliceDefault = prismic.SharedSliceVariation<
  'default',
  Record<string, never>,
  Simplify<GridSliceDefaultItem>
>;

/**
 * Slice variation for *Grid*
 */
type GridSliceVariation = GridSliceDefault;

/**
 * Grid Shared Slice
 *
 * - **API ID**: `grid`
 * - **Description**: Grid
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GridSlice = prismic.SharedSlice<'grid', GridSliceVariation>;

/**
 * Primary content in *LinkList → Items*
 */
export interface LinkListSliceDefaultItem {
  /**
   * Label field in *LinkList → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: link_list.items[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *LinkList → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: link_list.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Description field in *LinkList → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: link_list.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Screenshot field in *LinkList → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: link_list.items[].screenshot
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  screenshot: prismic.ImageField<'Square'>;
}

/**
 * Default variation for LinkList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LinkListSliceDefault = prismic.SharedSliceVariation<
  'default',
  Record<string, never>,
  Simplify<LinkListSliceDefaultItem>
>;

/**
 * Slice variation for *LinkList*
 */
type LinkListSliceVariation = LinkListSliceDefault;

/**
 * LinkList Shared Slice
 *
 * - **API ID**: `link_list`
 * - **Description**: LinkList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LinkListSlice = prismic.SharedSlice<
  'link_list',
  LinkListSliceVariation
>;

/**
 * Primary content in *NavigationLinks → Items*
 */
export interface NavigationLinksSliceDefaultItem {
  /**
   * Label field in *NavigationLinks → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_links.items[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Current Segment field in *NavigationLinks → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_links.items[].current_segment
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  current_segment: prismic.KeyTextField;

  /**
   * Href field in *NavigationLinks → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_links.items[].href
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  href: prismic.KeyTextField;
}

/**
 * Default variation for NavigationLinks Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationLinksSliceDefault = prismic.SharedSliceVariation<
  'default',
  Record<string, never>,
  Simplify<NavigationLinksSliceDefaultItem>
>;

/**
 * Slice variation for *NavigationLinks*
 */
type NavigationLinksSliceVariation = NavigationLinksSliceDefault;

/**
 * NavigationLinks Shared Slice
 *
 * - **API ID**: `navigation_links`
 * - **Description**: NavigationLinks
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationLinksSlice = prismic.SharedSlice<
  'navigation_links',
  NavigationLinksSliceVariation
>;

/**
 * Primary content in *RichText → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  'rich_text',
  RichTextSliceVariation
>;

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ArchivesDocument,
      ArchivesDocumentData,
      ArchivesDocumentDataSlicesSlice,
      ArtworkDocument,
      ArtworkDocumentData,
      ArtworkDocumentDataSlicesSlice,
      ArtworksDocument,
      ArtworksDocumentData,
      ArtworksDocumentDataSlicesSlice,
      ContactDocument,
      ContactDocumentData,
      ContactDocumentDataSlicesSlice,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      MainNavigationDocument,
      MainNavigationDocumentData,
      MainNavigationDocumentDataSlicesSlice,
      PresentationDocument,
      PresentationDocumentData,
      PresentationDocumentDataSlicesSlice,
      AllDocumentTypes,
      CaptionImageSlice,
      CaptionImageSliceDefaultPrimary,
      CaptionImageSliceVariation,
      CaptionImageSliceDefault,
      DocumentationSlice,
      DocumentationSliceImagePrimary,
      DocumentationSliceImageItem,
      DocumentationSliceSoundItem,
      DocumentationSliceVideoItem,
      DocumentationSliceVariation,
      DocumentationSliceImage,
      DocumentationSliceSound,
      DocumentationSliceVideo,
      GridSlice,
      GridSliceDefaultItem,
      GridSliceVariation,
      GridSliceDefault,
      LinkListSlice,
      LinkListSliceDefaultItem,
      LinkListSliceVariation,
      LinkListSliceDefault,
      NavigationLinksSlice,
      NavigationLinksSliceDefaultItem,
      NavigationLinksSliceVariation,
      NavigationLinksSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
    };
  }
}
