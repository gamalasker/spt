// The Quiz, when selecting answers, select with a number, should not be higher than 3

//for example:
/*

 options: ['answer 0', 'answer 1', 'answer 2', 'answer 3']
 answer: 1

*/
const quiz = [

    {
        question: 'Qui arrive chez Charlotte...',
        options: [
            'Marion', 'Richard ', 'Le père de charlotte ', 'La mère de Charlotte '
        ],
        answer: 0
    },

    {
        question: 'Qui est Richard ?',
        options: [
            'C’est le père de Charlotte.', 'C’est le frère de Charlotte.', 'C’est le copain de Charlotte.', 'C’est le voisin de Charlotte.'
        ],
        answer: 1
    },

    {
        question: '…….ouvre la porte.',
        options: [
            'Marion', 'Charlotte ', 'Richard', 'Le père de Richard'
        ],
        answer: 2
    },

    {
        question: 'Qui sonne à la porte ?',
        options: [
            'C’est le frère de Charlotte.', 'C’est la mère de Charlotte.', 'C’est Charlotte.', 'C’est Marion'
        ],
        answer: 3
    },    
    
    {
        question: 'Marion porte…',
        options: [
            'Une robe verte', ' Une chemise verte eu un jean.', 'Des chaussures noires, un jean, un manteau, un bonnet et un sac', 'Des chaussures de sport, un survêtement, un manteau, un bonnet et un sac'
        ],
        answer: 2
    },

    {
        question: 'Qu’est-ce que Marion va faire à ton avis ?',
        options: [
            'Elle va au sport et vient chercher Charlotte pour aller ensemble.', 'Elle va au cinéma et vient chercher Charlotte pour aller ensemble.', 'Elle va à une fête déguisée et vient chercher Charlotte pour aller ensemble.', 'Elle va au lycée était vient chercher Charlotte pour aller ensemble.'
        ],
        answer: 0
    },

    {
        question: 'Pour Richard, Charlotte est une championne…',
        options: [
            'Du retard', 'Du basket', 'Du tennis', 'De la boxe'
        ],
        answer: 0
    },

    {
        question: 'Où est la serviette de Charlotte ?',
        options: [
            'Dans la salle de bains.', 'Dans le salon.', 'Dans le vestiaire ', 'Dans la chambre à coucher '
        ],
        answer: 0
    },

    {
        question: 'Les deux filles vont arriver…',
        options: [
            'Trop tard ', 'À l’heure' , 'En retard', 'Le soir'
        ],
        answer: 2
    },

    {
        question: 'Qui va être mécontent…',
        options: [
            'Richard', 'Charlotte ', 'Marion', 'L’entraîneur '
        ],
        answer: 0
    },
    {
        question: 'Qui a rendez-vous avec Nathalie ?',
        options: [
            'C’est Marion', 'C’est Charlotte', 'C’est Richard', 'C’est l’entraîneur '
        ],
        answer: 0
    },
    {
        question: 'Charlotte va chez ses grands-parents…',
        options: [
            'À six heures.','Avant l’entraînement ', 'Le samedi', 'Avec Marion'
        ],
        answer: 0
    },
    {
        question: 'Dans la chambre, Charlotte ……',
        options: [
            'fait les devoirs.', 'se prépare pour faire du sport.', 'regarde un match.','Se douche'
        ],
        answer: 3
    },
    {
        question: 'Qui fais du judo le samedi?',
        options: [
             'Marion ', 'Richard ', 'Charlotte ','Nathalie'
        ],
        answer: 3
    },
    {
        question: 'Qui n’aime pas le judo ?',
        options: [
            'Marion ', 'Richard ', 'Charlotte ','Nathalie'
        ],
        answer: 2
    },

];
