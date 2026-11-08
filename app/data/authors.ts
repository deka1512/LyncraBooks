export interface StaticAuthor {
  slug: string
  name: string
  role: string
  shortBio: string
  biography: string
}

// Noms et biographies fictifs de démonstration : à valider ou remplacer avant publication commerciale.
export const authors: StaticAuthor[] = [
  { slug: 'esther-mbuyi', name: 'Esther Mbuyi', role: 'Autrice — Foi & spiritualité', shortBio: 'Elle écrit sur la foi vivante, la prière et la confiance en Dieu au quotidien.', biography: 'Esther Mbuyi est un personnage fictif créé pour la maquette éditoriale de Lyncra Books. Son profil présente une voix consacrée à l’encouragement spirituel, à la vie de prière et à l’enracinement dans les Écritures.' },
  { slug: 'jonathan-ilunga', name: 'Jonathan Ilunga', role: 'Auteur — Vie chrétienne & croissance', shortBio: 'Il explore la transformation personnelle et la mise en pratique des valeurs de l’Évangile.', biography: 'Jonathan Ilunga est un personnage fictif créé pour la maquette éditoriale de Lyncra Books. Son univers aborde la croissance personnelle, le renouvellement des pensées et le courage de vivre sa foi.' },
  { slug: 'samuel-kabasele', name: 'Samuel Kabasele', role: 'Auteur — Bible & connaissance', shortBio: 'Il s’intéresse à la sagesse biblique, au discernement et à l’étude de la Parole.', biography: 'Samuel Kabasele est un personnage fictif créé pour la maquette éditoriale de Lyncra Books. Son profil éditorial met en avant l’étude biblique, la recherche de sagesse et le discernement chrétien.' },
  { slug: 'grace-nsimba', name: 'Grâce Nsimba', role: 'Autrice — Vie chrétienne & croissance', shortBio: 'Elle encourage une vie intentionnelle, guidée par la foi et des choix porteurs de sens.', biography: 'Grâce Nsimba est un personnage fictif créé pour la maquette éditoriale de Lyncra Books. Ses thèmes de prédilection sont les priorités, la vocation et la cohérence entre convictions et actions.' },
  { slug: 'deborah-kalala', name: 'Déborah Kalala', role: 'Autrice — Foi & spiritualité', shortBio: 'Elle invite à prendre le temps de méditer les Écritures et d’approfondir sa relation avec Dieu.', biography: 'Déborah Kalala est un personnage fictif créé pour la maquette éditoriale de Lyncra Books. Son univers est tourné vers la méditation biblique, l’écoute et la profondeur de la vie spirituelle.' },
  { slug: 'david-banza', name: 'David Banza', role: 'Auteur — Bible & connaissance', shortBio: 'Il propose une approche accessible des fondements bibliques et de la connaissance chrétienne.', biography: 'David Banza est un personnage fictif créé pour la maquette éditoriale de Lyncra Books. Son profil met en avant la découverte des fondements de la foi, l’apprentissage et l’ouverture de nouvelles perspectives bibliques.' },
]
