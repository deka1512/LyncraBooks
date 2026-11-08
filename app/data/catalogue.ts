import type { Author, WordPressBook, WordPressCategory } from '~/types/book'

export const demoAuthors: Author[] = [
  { id: 1, name: 'Samuel K. Mbuyi', slug: 'samuel-k-mbuyi', portrait: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=85', shortBio: 'Auteur et enseignant passionné par la foi et la croissance intérieure.', biography: 'Samuel K. Mbuyi accompagne depuis plusieurs années des lecteurs dans leur cheminement spirituel. Ses écrits invitent à approfondir sa relation avec Dieu, à développer une foi vivante et à traduire ses convictions dans les gestes du quotidien.' },
  { id: 2, name: 'Esther Nzambe', slug: 'esther-nzambe', portrait: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=85', shortBio: 'Essayiste, conférencière et voix engagée pour une vie intentionnelle.', biography: 'Esther Nzambe écrit sur l’identité, la discipline personnelle et la transformation. Avec une approche accessible et profondément humaine, elle encourage chacun à reconnaître son potentiel et à construire une vie alignée avec ses valeurs.' },
  { id: 3, name: 'David Ilunga', slug: 'david-ilunga', portrait: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=85', shortBio: 'Chercheur indépendant et vulgarisateur des grandes idées.', biography: 'David Ilunga rend les sujets complexes accessibles. Ses ouvrages croisent connaissance, histoire et réflexion pour donner aux lecteurs des repères solides et l’envie de continuer à apprendre.' },
  { id: 4, name: 'Grâce M. Kanku', slug: 'grace-m-kanku', portrait: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop&q=85', shortBio: 'Autrice, formatrice et accompagnatrice des parcours de vie.', biography: 'Grâce M. Kanku explore les relations, la résilience et le sens de la vie. Elle propose des pistes concrètes pour traverser les saisons difficiles, cultiver la sagesse et prendre soin de ses relations.' },
]

export const demoCategories: WordPressCategory[] = [
  { id: 1, name: 'Foi & spiritualité', slug: 'foi-spiritualite', description: 'Des lectures pour nourrir la foi, la méditation et la vie spirituelle.' },
  { id: 2, name: 'Développement personnel', slug: 'developpement-personnel', description: 'Des idées et des outils pour mieux se connaître et progresser.' },
  { id: 3, name: 'Savoir & connaissance', slug: 'savoir-connaissance', description: 'Des ouvrages pour apprendre, réfléchir et élargir ses horizons.' },
  { id: 4, name: 'Vie & relations', slug: 'vie-relations', description: 'Des lectures pour mieux comprendre les autres et construire des relations saines.' },
]

const makeBook = (id: number, slug: string, title: string, authorIds: number[], categoryId: number, cover: string, excerpt: string, content: string): WordPressBook => ({
  id, slug, title: { rendered: title }, excerpt: { rendered: excerpt }, content: { rendered: content },
  authors: demoAuthors.filter(author => authorIds.includes(author.id)),
  _embedded: {
    'wp:featuredmedia': [{ source_url: cover, alt_text: `Couverture du livre ${title}` }],
    'wp:term': [[{ id: categoryId, name: demoCategories.find(category => category.id === categoryId)!.name, slug: demoCategories.find(category => category.id === categoryId)!.slug, taxonomy: 'category' }]],
  },
})

export const demoBooks: WordPressBook[] = [
  makeBook(101, 'une-foi-qui-grandit', 'Une foi qui grandit', [1], 1, '/images/books/une-foi-qui-grandit.svg', 'Un chemin simple et profond pour faire grandir sa foi au quotidien.', '<p>La foi se construit dans la durée. À travers des réflexions, des exercices et des pistes de méditation, ce livre invite à développer une relation vivante avec Dieu et à faire de chaque journée une occasion de grandir.</p>'),
  makeBook(102, 'les-saisons-de-la-vie', 'Les saisons de la vie', [4], 4, '/images/books/les-saisons-de-la-vie.svg', 'Apprendre à accueillir chaque saison avec sagesse et espérance.', '<p>Chaque saison porte ses défis et ses possibilités. Cet ouvrage aide à traverser les transitions, à cultiver la résilience et à reconnaître les petites avancées qui préparent les grands changements.</p>'),
  makeBook(103, 'devenir-intentionnel', 'Devenir intentionnel', [2], 2, '/images/books/devenir-intentionnel.svg', 'Reprendre la direction de sa vie, une décision à la fois.', '<p>Vivre intentionnellement commence par des choix conscients. Ce livre propose des outils pratiques pour clarifier ses priorités, construire des habitudes durables et avancer avec cohérence.</p>'),
  makeBook(104, 'les-fondements-de-la-sagesse', 'Les fondements de la sagesse', [3, 1], 3, '/images/books/fondements-sagesse.svg', 'Des repères pour penser avec profondeur et discerner avec justesse.', '<p>La sagesse ne consiste pas seulement à accumuler des informations. Elle demande de relier les idées, de questionner ses certitudes et de transformer la connaissance en discernement.</p>'),
  makeBook(105, 'oser-se-reconstruire', 'Oser se reconstruire', [4], 2, '/images/books/oser-se-reconstruire.svg', 'Retrouver confiance et élan après les périodes de rupture.', '<p>Se reconstruire est un processus fait de patience, de vérité et de courage. Grâce M. Kanku propose des réflexions et des exercices pour retrouver ses repères et ouvrir un nouveau chapitre.</p>'),
  makeBook(106, 'une-vie-ancree', 'Une vie ancrée', [1, 2], 1, '/images/books/une-vie-ancree.svg', 'Relier ses convictions à ses choix et à ses actions.', '<p>Une vie ancrée se construit lorsque les convictions deviennent des gestes concrets. Ce livre explore les habitudes, les relations et les décisions qui donnent de la profondeur à la vie spirituelle.</p>'),
  makeBook(107, 'apprendre-a-comprendre', 'Apprendre à comprendre', [3], 3, '/images/books/apprendre-comprendre.svg', 'Développer sa curiosité et mieux lire le monde qui nous entoure.', '<p>Comprendre demande de la curiosité, de la méthode et de l’humilité. Ce guide encourage à poser de meilleures questions, vérifier ses sources et apprendre tout au long de sa vie.</p>'),
  makeBook(108, 'la-force-des-relations', 'La force des relations', [2, 4], 4, '/images/books/force-relations.svg', 'Cultiver des relations authentiques, saines et constructives.', '<p>Nos relations influencent profondément notre quotidien. Découvrez des clés pour mieux communiquer, poser des limites justes et bâtir des liens fondés sur le respect.</p>'),
]
