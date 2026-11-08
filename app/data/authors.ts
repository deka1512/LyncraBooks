export interface StaticAuthor {
  slug: string
  name: string
  role: string
  shortBio: string
  biography: string
}

/**
 * Les fiches individuelles seront ajoutées lorsque les noms et biographies
 * des auteurs auront été confirmés. La collection est utilisée comme crédit
 * éditorial temporaire pour les livres dont l'auteur n'est pas encore renseigné.
 */
export const authors: StaticAuthor[] = [
  {
    slug: 'collection-lyncra',
    name: 'Collection Lyncra',
    role: 'Collection éditoriale',
    shortBio: 'Une sélection de lectures chrétiennes pour nourrir la foi et accompagner la croissance spirituelle.',
    biography: 'Les ouvrages actuellement présentés sous cette signature sont regroupés au sein de la collection éditoriale Lyncra. Les noms et biographies individuels des auteurs seront ajoutés lorsque les informations bibliographiques auront été confirmées.',
  },
]
