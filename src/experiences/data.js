const experiences = [
    {
        id:"1",
        role: 'Développeur Front ReactJS',
        client: 'AXA BANQUE',
        startDate: '05/2019',
        endDate: '12/2019',
        project: 'Parcours de prêt personnel: Application Web / Mobile',
        shortDescription: 'Application destinée aux clients d’AXA Banque afin de leur faciliter la demande d’un prêt bancaire via un parcours simple et fluide.',
        bulletPoints: [
            'Développement des pages de parcours : informations personnelles, propositions des offres, Récapitulatif',
            'Développement d’une librairie de composants réutilisables sur d’autres parcours.',
            '100 % de couverture par les tests unitaires pour la libraire des composants',
            'Responsive web mobile, tablette',
            'Intégration et déploiement continue',
            'Participation au déploiement sur AWS',
            'Revue de code.'
        ],
        technologies: [
            'React 16.8.9',
            'Redux 4',
            'TypeScript', 'HTML5', 'CSS4', 'Webpack 4',  'Babel',
            'Git', 'Node/ npm', 'Jest', 'Enzyme', 'Jenkins',
            'React Testing Library', 'ESLint', 'Prettier', 'Sonar',
            'Amazon web services', 'Docker', 'JIRA', 'VScode'
        ],
        fullDescription: ''
    },
    {
        id:"2",
        role: 'Développeur FullStack JS - ReactJS / Node JS',
        client: 'BNP ASSET MANAGEMENT',
        startDate: '01/2019',
        endDate: '05/2019',
        project: 'Augmented Investment (plateforme de recherche d’investissements)',
        shortDescription: 'Application destinée aux clients d’AXA Banque afin de leur faciliter la demande d’un prêt bancaire via un parcours simple et fluide.',
        bulletPoints: [
            'Développement de la page Search',
            'Correction d’anomalies et évolution',
            'Server-Side Rendering',
            'Développement des packages yarn et déploiement sur verdaccio (private npm proxy registry)',
            'Développement de plusieurs components React (split to Smart and Dumb components)',
            'Gestion des builds Front avec webpack et babel',
            'Implémentation des tests unitaires',
            'Maintenance des builds et releases sur TFS',
            'Méthodologie Agile: English daily meetings, Sprint planning, Démo, Rétrospective',
        ],
        technologies: [
            'React 16.4', 'Redux 4', 'HighCharts', 'yarn', 'verdaccio',
            'nextJs', 'NodeJs', 'Express', 'redux-thunk', 'Isomorphic-unfetch',
             'Babel',' Webpack 4' , 'Jest', 'Enzyme', 'Eslint', 'Nodemon',
             'Redux-logger', 'MaterialUI', 'React JSS (CSS-in-JS)', 'React-Grid-Layout','TFS'
        ],
        fullDescription: ''
    },
    {
        id:"3",
        role: 'Développeur Angular / VueJS',
        client: 'GS1 FRANCE',
        startDate: '09/2018',
        endDate: '12/2018',
        project: 'Augmented Investment (plateforme de recherche d’investissements)',
        shortDescription: 'Application destinée aux clients d’AXA Banque afin de leur faciliter la demande d’un prêt bancaire via un parcours simple et fluide.',
        bulletPoints: [
            'Développement de la page Search',
            'Correction d’anomalies et évolution',
            'Server-Side Rendering',
            'Développement des packages yarn et déploiement sur verdaccio (private npm proxy registry)',
            'Développement de plusieurs components React (split to Smart and Dumb components)',
            'Gestion des builds Front avec webpack et babel',
            'Implémentation des tests unitaires',
            'Maintenance des builds et releases sur TFS',
            'Méthodologie Agile: English daily meetings, Sprint planning, Démo, Rétrospective',
        ],
        technologies: [
            'React 16.4', 'Redux 4', 'HighCharts', 'yarn', 'verdaccio',
            'nextJs', 'NodeJs', 'Express', 'redux-thunk', 'Isomorphic-unfetch',
             'Babel',' Webpack 4' , 'Jest', 'Enzyme', 'Eslint', 'Nodemon',
             'Redux-logger', 'MaterialUI', 'React JSS (CSS-in-JS)', 'React-Grid-Layout','TFS'
        ],
        fullDescription: ''
    },
    {
        id:"4",
        role: 'Développeur Full Stack React / C# .Net',
        client: 'AXA FRANCE',
        startDate: '11/2017',
        endDate: '08/2018',
        project: 'Suivi de justificatifs: Widget web / Mobile',
        shortDescription: 'bla ladndddd jdjlj',
        bulletPoints: [
            'Parcours Client et Parcours Agent AXA',
            'Fenêtre d’Upload de justificatifs',
            'Développement de WEB APIs : Upload, Lecture dossier,...',
            'Développement de web service : Socle de Notification, Mise à jour dossier',
            'Résilience des Web Services Externes',
            'Implémentation du web Tracking :  Google Analytics',
            'TDD, BDD, Tests unitaires',
            'Programmation fonctionnelle',
            'Analyse des métriques de code : Qualimétrie Sonar, Clean Code',
            'Revue de code'
        ],
        technologies: [
            'JavaScript', 'ES6', 'ReactJS', 'Npm', 'Sonar', 'Eslint',
            'VSTS Git', 'Prettier', 'Jest', 'Enzyme', 'Redux', 'Moq',
            'WEBAPI 2', 'WCF', 'SOAP', 'WSDL', 'Entity Framework 6',
            'Nunit', 'SpecFlow', 'Gherkin', 'IIS', 'SQL Management Studio',
            'SQL', 'LINQ', 'Agile Scrum', 'Jira', 'Confluence'
        ],
        fullDescription: ''
    },
    {
        id:"5",
        role: 'Référent Technique AngularJS',
        client: 'ORANGE BANQUE',
        startDate: '12/2016',
        endDate: '11/2017',
        project: 'Banque En ligne d’ORANGE: Application Web mobile',
        shortDescription: 'Banque en ligne orange',
        bulletPoints: [
            'La page d’accueil : Liste des comptes et services disponibles',
            'La liste des opérations : listing, donuts, changements de catégorie, ...',
            'La gestion des documents et relevés bancaires',
            'La gestion des demandes client',
            'Les caractéristiques des comptes : découvert autorisé, ...',
            'Profile utilisateur : informations personnelles, liens utiles, conditions générales',
            'Mise en place d’un système du web analytiques (Adobe)',
            'Implémentation du filtre pour les opérations',
            'Mise en place des tests unitaires et E2E',
            'Revue de code',
            'Analyse et amélioration des performances',
            'Mise en place des guidelines pour améliorer la qualité de code',
            'Analyse des besoins fonctionnelles et traduction en story techniques',
            'Méthodologie Agile Scrum : chiffrage, Daily meeting, Démo, Planning Poker',
            'Relation technique et fonctionnelle avec le client',
            'Coordination technique avec les architectes et les autres experts technique',
            'Gestion du périmètre technique et fonctionnel et Support technique',
        ],
        technologies: [
            'AngularJS 1.5', 'Bootstrap', 'HTML', 'CSS', 'Javascript', 
            'VSCode', 'Jira', 'git', 'Backbase', 'gulp', 'Less', 'Jasmine',
            'Protractor', 'Karma', 'Jenkins'
        ],
        fullDescription: ''
    },
    {
        id:"6",
        role: 'Développeur AngularJS',
        client: 'PNB CIB',
        startDate: '05/2016',
        endDate: '11/2016',
        project: 'Abnormal Trading Patterns (Strategic Solution)',
        shortDescription: 'Refonte Graphique et Data d’une application Intranet',
        bulletPoints: [
            'External Radar',
            'Alerts Rewoking',
            'Alerts Concentration',
            'Composants réutilisables (Menu contextuel, Filtre de recherche)',
            'Adaptation des anciennes interfaces et Amélioration de UX.',
            'Découplage de l’ancien code entre les parties front et back.',
            'Intégration HTML/CSS à partir de l’existant.',
            'Responsive Design',
            'Compatibilités des navigateurs web',
            'Respect des normes de codage.',
            'Réalisation des tests unitaires.',
            'Méthodologie Agile Scrum.',
            'Communication quotidienne en Anglais avec les équipes en Inde.',
        ],
        technologies: [
            'JavaScript', 'ES5', 'AngularJS 1.5',
            'Angular Material', 'HTML5', 'CSS3', 'Jasmine', 'uiGrid', 'Jira', 'TFS'
        ],
        fullDescription: ''
    },
    {
        id:"7",
        role: 'Développeur AngularJS',
        client: 'SAGE SOFTWARE',
        startDate: '06/2013',
        endDate: '04/2016',
        project: 'Sage Customer View',
        shortDescription: 'Application Mobile Hybride multi Devices',
        bulletPoints: [
            'Dashboard des indicateurs clés et portefeuille clients',
            'Liste et Détail des KPI',
            'Module des Documents Commerciaux',
            'Liste et Détail des clients',
            'Administration des paramétrages de l’application',
            'Gestion de l’internationalisation de l’application',
            'Implémentation d’un algorithme de Recherche Avancée',
            'Conception et Intégration des maquettes HTML/CSS',
            'Rédaction des Scénarios de Test',
            'Respect des Normes de code W3C et réutilisation du code.',
            'Réalisation des Tests unitaires et End to End Tests.',
            'Déploiement sur le Play Store, App Store et Windows Store.',
            'Méthodologie Agile SCRUM: Sprint Planning, Planning Poker, Stand Up Meeting, Demo, Coding Dojo.'
        ],
        technologies: [
            'Javascript', 'AngularJS 1.3', 'HTML5', 'CSS3', 'jQuery', 'Bower', 'Grunt',
            'npm', 'Protractor', 'Jasmine', 'Karma',
            'KendoUI', 'PhoneGap', 'Cordova', 'Jira', 'Bitbucket'
        ],
        fullDescription: ''
    },
    {
        id:"8",
        role: 'Développeur Angular / Node JS',
        startDate: '04/2019',
        endDate: '08/2019',
        project: 'Gestion des Ventes',
        shortDescription: 'Application web pour la gestion des commandes / stock / clients',
        bulletPoints: [
            'Modélisation et création de la base de données en MongoDB et hébergement sur mLab',
            'Création du serveur ExpressJS / NodeJS',
            'Développement des APIs pour l’interaction avec la base de données.',
            'Création de l’application Angular et développement des interfaces Graphiques',
            'Liste des produits et modification d’un produit',
            'Liste et détail des commandes',
            'Liste et détail des clients',
            'Création des services métier',
            'Déploiement continu sur le serveur Heroku'
        ],
        technologies: [
            'JavaScript', 'Angular 6', 'TypeScript', 'ES6', 'NodeJS',
            'ExpressJS', 'MongoDB', 'Mongo Shell', 'Robot 3T (Robomongo)',
            'mLab', 'Native MongoDB Driver', 'HTML5', 'CSS3', 'Bootstrap',
             'Angular Material', 'npm', 'Github', 'Serveur','Heroku'
        ],
        fullDescription: ''
    }
];

export default experiences;